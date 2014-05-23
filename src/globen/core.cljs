(ns globen.core)


(enable-console-print!)


(def aussie-data [
  ; "Sydney", 
  [-33.859972 151.211111]
  ; "Melbourne", 
  [-37.813611 144.963056]
  ; "Perth", 
  [-31.952222 115.858889]
  ; "Brisbane",
  [-27.467917 153.027778]
])


; Utils


(defn rotate [en x y z]
    (.setRotation en x y z))


(defn latlng-to-xyz
  ([lat lng] (latlng-to-xyz lat lng 20))
  ([lat lng u]
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


; Set the scene.


(defn add-control-script [camera runner]
  (let [domElement (aget runner "renderer" "domElement")
        initalPosition (new js/goo.Vector3 600 (/ js/Math.PI 2) 0)
        options #js{:domElement domElement :spherical initalPosition}
        orbit-script (js/goo.Scripts.create "OrbitCamControlScript" options)]
    (.set camera orbit-script)))


(defn setup-world [runner]
  (let [world (.-world runner)]
    (-> (.createEntity world (new js/goo.PointLight) #js[100 100 100])
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
  (new js/goo.GooRunner #js{:antialias false :logo false}))


; Bundle loading stuff.


(defn get-project-id [js-bundle]
  (let [bundle (js->clj js-bundle)
        project-id (first (filter #(re-find #"project$" %) (keys bundle)))]
    project-id))


(defn load-globen [runner]
  (let [world (.-world runner)
        loader (new js/goo.DynamicLoader #js{:world world :rootPath "res-slim"})
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
                   (rotate earth 0.03 -0.32 0)))))))


; Population Data stuff.


(defn add-data [runner data]
  (doseq [[lat lng value] data]
    (let [p (latlng-to-xyz lat lng)]
      (add-point p value (.-world runner)))))


(defn load-data [runner]
  (-> (.get js/$ "population909500.json")
      (.then (fn [res]
               (let [[[year data] & rest] (.parse js/JSON res)
                     points (partition 3 data)
                     is-big (fn [[_ _ v]] (> v 0.05))
                     big-points (filter is-big points)]
                 (add-data runner big-points))))))


; TopoJSON stuff


(defn draw-shape [runner coords]
  (let [vertices (map #(apply latlng-to-xyz %) coords)
        verts (map (juxt :x :y :z) vertices)
        mesh (new js/goo.FilledPolygon (clj->js (flatten verts)))
        mat (.createMaterial js/goo.Material (.-simpleLit js/goo.ShaderLib))
        world (.-world runner)
        en (.createEntity world mesh mat)]
    (print verts)
    (.addToWorld en)))


(defn draw-country [runner c]
  (let [geom (aget c "geometry")
        shapes (if (= (.-type geom) "Polygon")
                 [(aget geom "coordinates")]
                 (aget geom "coordinates"))]
    (doseq [s shapes]
      (draw-shape runner (aget s 0)))))


(defn load-countries [runner]
  (-> (.get js/$ "world-50m.json")
      (.then (fn [res]
               (let [data (js/JSON.parse res)
                     countries (js/topojson.feature data (aget data "objects" "countries"))
                     features (.-features countries)
                     indias (filter #(= (.-id %) 356) features)]
                 (draw-shape runner aussie-data)
                 #_(doseq [c indias]
                   (draw-country runner c)))))))


; Start it up!


(defn init []
  (let [runner (new-runner)]
    (aset js/window "runner" runner)
    (setup-world runner)
    (attach runner "container")
    (load-globen runner)
    (load-countries runner)
    #_(load-data runner)))


(aset js/window "onload" init)
