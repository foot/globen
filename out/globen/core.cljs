(ns globen.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! timeout]]))


(enable-console-print!)


; Aussie country code.
(def AUS 36)


(def aussie-data [
  ; Sydney
  [-33.859972 151.211111]
  ; Melbourne
  [-37.813611 144.963056]
  ; Perth
  [-31.952222 115.858889]
  ; Brisbane
  [-27.467917 153.027778]
])


;
; Utils
;


(defn latlng-to-xyz
  ([lng lat] (latlng-to-xyz lng lat 20))
  ([lng lat u]
  (let [phi (* (- 90 lat) (/ js/Math.PI 180))
        theta (* (- 180 lng) (/ js/Math.PI 180))
        x (* u (js/Math.sin phi) (js/Math.cos theta))
        y (* u (js/Math.cos phi))
        z (* u (js/Math.sin phi) (js/Math.sin theta))]
    {:x x :y y :z z})))


(defn add-point [p v world]
  (let [u (* v 1)
        box (new js/goo.Box u u u)
        mat (.createMaterial js/goo.Material (.-simpleLit js/goo.ShaderLib))
        tick (fn [entity tpf]
               (.setRotation entity (.-time world) (* 1.2 (.-time world)) 0))
        en (.createEntity world box mat tick)
        trans (.-translation (.-transform (.-transformComponent en)))]
    (aset trans "x" (:x p))
    (aset trans "y" (:y p))
    (aset trans "z" (:z p))
    (.addToWorld en)))


;
; Set the scene.
;


(defn add-control-script [camera runner]
  (let [domElement (aget runner "renderer" "domElement")
        initalPosition (new js/goo.Vector3 80 (/ js/Math.PI 2) 0)
        options #js{:domElement domElement :spherical initalPosition}
        ; 0.10.2 <= Compat, for more recent versions use:
        ; js/goo.OrbitCamControlScript
        orbit-script (js/goo.Scripts.create "OrbitCamControlScript" options)]
    (.set camera orbit-script)))


(defn setup-world [runner]
  (let [world (.-world runner)]
    (-> (.createEntity world (new js/goo.PointLight) #js[100 100 100])
        (.addToWorld))
    (-> (.createEntity world (new js/goo.PointLight) #js[-100 -100 -100])
        (.addToWorld))
    (-> (.createEntity world (new js/goo.Camera) #js[0 0 600])
        (.addToWorld)
        (add-control-script runner)
        (.lookAt #js[0 0 0]))))


(defn attach [runner id]
  (let [canvas (aget runner "renderer" "domElement")
        container (.getElementById js/document id)]
    (.appendChild container canvas)))


(defn new-runner []
  (new js/goo.GooRunner #js{:antialias false
                            :logo false}))


;
; Bundle loading stuff.
;


(defn get-project-id [js-bundle]
  (let [bundle (js->clj js-bundle)
        project-id (first (filter #(re-find #"project$" %) (keys bundle)))]
    project-id))


; Load globe from a bundle.
#_(defn load-globen [runner]
  (let [world (.-world runner)
        loader (new js/goo.DynamicLoader #js{:world world :rootPath "res-2"})
        sms (new js/goo.StateMachineSystem runner)]
    (.setSystem world sms)
    (-> (.load loader "root.bundle")
        (.then (fn [bundle]
                 (.load loader (get-project-id bundle))))
        (.then (fn []
                 (.processEntityChanges world)
                 (let [by-name #(.first ((aget world "by" "name") %))
                       earth (by-name "Earth")]
                   (aset js/window "earth" earth)
                   (.setRotation earth 0.03 -0.32 0)
                   (.setTranslation earth -1 -0.7 0)))))))


; Placeholder simple sphere globe.
(defn load-globen [runner]
  (let [u 19.9
        world (.-world runner)
        box (new js/goo.Sphere 16 16 u)
        mat (js/goo.Material.createMaterial js/goo.ShaderLib.simpleColored)
        uniforms (.-uniforms mat)
        en (.createEntity world box mat)]
    (aset uniforms "color" #js[0.3 0.6 0.9])
    (.addToWorld en)))


;
; TopoJSON stuff
;


(defn draw-polygons [world coords]
  (let [vertices (map (fn [[lat lng]] (latlng-to-xyz lng lat)) coords)
        verts (map (juxt :x :y :z) vertices)
        line (new js/goo.PolyLine (clj->js (flatten verts)) true)
        [p1 p2 & ps] verts
        normal (.normalize (new js/goo.Vector3 (clj->js p1)))
        ; normal (.cross (new js/goo.Vector3 (clj->js p1)) (clj->js p2))
        path (new js/goo.PolyLine #js[0 0 0 (.-x normal) (.-y normal) (.-z normal)])
        surface (.mul line path)
        ; gen-mat (js/goo.Material.createMaterial js/goo.ShaderLib.simpleColored)
        ; gen-mat (.createMaterial js/goo.Material js/goo.ShaderLib.simpleLit)
        top-surface (new js/goo.FilledPolygon (clj->js (flatten verts)))
        gen-mat (js/getColoredMaterial)
        en (.createEntity world surface gen-mat #js[0 0 0])
        top (.createEntity world top-surface gen-mat #js[0 0 0])
        cullFace (aget gen-mat "cullState")]
    (aset cullFace "cullFace" "Front")
    (aset gen-mat "flat" true)
    (.addToWorld top)
    (.addToWorld en)))


(defn draw-line [world points]
  (let [line (new js/goo.PolyLine (clj->js points) true)
        gen-mat (js/goo.Material.createMaterial js/goo.ShaderLib.simpleColored)
        en (.createEntity world line gen-mat #js[0 0 0])]
    (.addToWorld en)))


(defn draw-shape [world coords]
  (let [vertices (map (fn [[lat lng]] (latlng-to-xyz lat lng)) coords)
        verts (map (juxt :x :y :z) vertices)]
    (draw-line world (flatten verts))))


(defn draw-country [world c]
  (let [geom (aget c "geometry")
        coords (aget geom "coordinates")
        shapes (if (= (.-type geom) "Polygon") [coords] coords)]
    (doseq [s shapes]
      (draw-shape world (aget s 0)))))


(defn draw-countries [world data]
  (let [data (js/topojson.simplify data #js{:coordinate-system "spherical"
                                            :retain-proportion 0.2
                                            :verbose true})
        countries (js/topojson.feature data (aget data "objects" "countries"))
        features (.-features countries)
        australias (filter #(= (.-id %) AUS) features)
        batch-size 10]
    (go
      (doseq [fs (partition batch-size batch-size [] features)]
        (doseq [c fs]
          (draw-country world c))
        (<! (timeout 0))))))


(defn load-countries [runner]
  (-> (.get js/$ "data/world-50m.json")
      (.then (fn [data]
               (let [world (.-world runner)]
                 (draw-countries world data))))))


;
; Population Data stuff.
;


(defn draw-data-cubes [runner data]
  (doseq [[lat lng value] data]
    (let [p (latlng-to-xyz lat lng)]
      (add-point p value (.-world runner)))))


(defn draw-data-shape
  ([world coords data] (draw-data-shape world coords data 10))
  ([world coords data s]
  (let [u (fn [v] (+ 20 (* s (get data v 0))))
        to-xyz (fn [[lat lng]]
                 (latlng-to-xyz lat lng (u [lat lng])))
        vertices (map to-xyz coords)
        verts (map (juxt :x :y :z) vertices)]
    (draw-line world (flatten verts)))))


(defn draw-circle [world lat data]
  (let [r (range -180 180 1)
        points (map #(identity [% lat]) r)]
    (draw-data-shape world points data 10)))


(defn draw-lat [runner data]
  (let [batch-size 2
        values (range 90 -90 -1)]
    (go
      (doseq [fs (partition batch-size batch-size [] values)]
        (doseq [l fs]
          (draw-circle (.-world runner) l data))
        (<! (timeout 0))))))


(defn load-elevation-data [runner]
  (-> (.get js/$ "data/elevation.json")
      (.then (fn [res]
               (let [points (aget res "table" "rows")
                     points (filter (fn [[_ _ v]] (> v 0)) points)
                     min-v (apply min (map (fn [[_ _ v]] v) points))
                     max-v (apply max (map (fn [[_ _ v]] v) points))
                     scale (-> (js/d3.scale.linear)
                               (.domain #js [min-v 0 max-v])
                               (.range #js [-1 0 1 ]))
                     to-key-values (fn [[lng lat v]] [[lat lng] (scale v)])
                     dict (into {} (map to-key-values points))]
                 (print (first points))
                 (print min-v)
                 (print max-v)
                 (draw-lat runner dict))))))


(defn load-population-data [runner]
  (-> (.get js/$ "data/population909500.json")
      (.then (fn [res]
               (let [[[year data] & rest] res
                     points (partition 3 data)
                     is-big (fn [[_ _ v]] (> v 0.05))
                     big-points (filter is-big points)
                     to-key-values (fn [[lng lat v]] [[lat lng] v])
                     dict (into {} (map to-key-values points))]
                 (print (count points))
                 (print (first dict))
                 (draw-lat runner dict))))))


;
; Start it up!
;


(defn init []
  (let [runner (new-runner)]
    (aset js/window "runner" runner)
    (setup-world runner)
    (attach runner "container")
    (load-globen runner)
    #_(load-countries runner)
    #_(draw-lat runner)
    #_(load-elevation-data runner)
    (load-population-data runner)))


(aset js/window "onload" init)
