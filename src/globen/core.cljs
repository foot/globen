(ns globen.core)

(enable-console-print!)


(def data [
  ; "Sydney", 
  [-33.859972, 151.211111 0], 
  ; "Melbourne", 
  [-37.813611, 144.963056 0],
  ; "Brisbane",
  [-27.467917, 153.027778 0],
  ; "Perth", 
  [-31.952222, 115.858889 0]
])


(defn ll-to-xy [lat lng]
  (let [phi (* (- 90 lat) (/ js/Math.PI 180))
        theta (* (- 180 lng) (/ js/Math.PI 180))
        u 200
        x (* u (js/Math.sin phi) (js/Math.cos theta))
        y (* u (js/Math.cos phi))
        z (* u (js/Math.sin phi) (js/Math.sin theta))]
    {:x x :y y :z z}))


(defn attach [runner id]
  (let [canvas (aget runner "renderer" "domElement")
        container (.getElementById js/document id)]
    (.appendChild container canvas)))


(defn new-runner []
  (new js/goo.GooRunner #js{:antialias false :logo false}))


(defn add-point [p v world]
  (let [u (* v 10)
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


(defn add-control-script [camera runner]
  (let [domElement (aget runner "renderer" "domElement")
        initalPosition (new js/goo.Vector3 600 (/ js/Math.PI 2) 0)
        options #js{:domElement domElement :spherical initalPosition}]
    (.set camera (new js/goo.OrbitCamControlScript options))))


(defn setup-world [runner]
  (let [world (.-world runner)]
    (-> (.createEntity world (new js/goo.PointLight) #js[100 100 100])
        (.addToWorld))
    (-> (.createEntity world (new js/goo.Camera) #js[0 0 600])
        (.addToWorld)
        (add-control-script runner)
        (.lookAt #js[0 0 0]))))


(defn load-globen [runner data]
  (doseq [[lat lng value] data]
    (let [p (ll-to-xy lat lng)]
      (add-point p value (.-world runner)))))


(defn init []

  (let [runner (new-runner)]
    (setup-world runner)
    (attach runner "container")
    (-> (.get js/$ "population909500.json")
        (.then (fn [res]
                (let [[[year data] & rest] (.parse js/JSON res)
                      points (partition 3 data)
                      is-big (fn [[_ _ v]] (> v 0.05))
                      big-points (filter is-big points)]
                  (load-globen runner big-points)))))))


(aset js/window "onload" init)
