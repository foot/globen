
/**
	* Creates a random bright color
	* @returns {Array}
	*/
function getRandomColor() {
	var angle = Math.random() * Math.PI * 2;
	var color = [
		angle,
		angle + Math.PI * 2 / 3,
		angle + Math.PI * 4 / 3
	].map(function (v) {
		return Math.sin(v) / 2 + 0.5;
	});
	color.push(1);

	return color;
}

/**
	* Returns a material from the supplied colors or a random brightly colored material
	* @param r Red value
	* @param g Green value
	* @param b Blue value
	* @param a Alpha value
	* @returns {goo.renderer.Material}
	*/
var getColoredMaterial = function (r, g, b, a) {
	var material = new goo.Material(goo.ShaderLib.simpleLit);
	if (arguments.length === 0) {
		//material.materialState.diffuse = getRandomColor();
		material.uniforms.materialDiffuse = getRandomColor();
	} else {
		//material.materialState.diffuse = [r, g, b, a || 1];
		material.uniforms.materialDiffuse = [r, g, b, a || 1];
	}
	return material;
};
