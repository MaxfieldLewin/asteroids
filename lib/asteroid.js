(function(){
	if (window.Asteroids === undefined) {
		window.Asteroids = {};
	};

	Asteroid = function(pos) {

		var vel = [Math.random() * 10, Math.random() * 10];
		Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
	};

	Asteroid.COLOR = "FFFFFF";
	Asteroid.RADIUS = 30;

	Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);
	Asteroids.Asteroid = Asteroid;
})();