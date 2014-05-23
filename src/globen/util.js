

//
// globe.js
//
/*
function addPoint(lat, lng) {

	var phi = (90 - lat) * Math.PI / 180;
	var theta = (180 - lng) * Math.PI / 180;

	var x = 200 * Math.sin(phi) * Math.cos(theta);
	var y = 200 * Math.cos(phi);
	var z = 200 * Math.sin(phi) * Math.sin(theta);

	return {x: x, y: y, z: z};
}


function addCameraToWorld(runner) {

    var camera = new goo.Camera();

    var orbitCamOpetions = {
        domElement: runner.renderer.domElement,
        spherical: new goo.Vector3(25, Math.PI / 4, 0),
        drag: 5.0,
        releaseVelocity: true,
        interpolationSpeed: 7,
        dragButton: typeof dragButton === 'number' ? dragButton : -1
    };

    var orbitScript = new goo.OrbitCamControlScript(orbitCamOpetions);

    return runner.world.createEntity(camera, [0, 0, 3], orbitScript,
                                     'CameraEntity').addToWorld();
}
*/
