// ponedeljek 3.11.2014: zacetek, spoznavanje, oblikovanje ideje, zacetek izdelave igrice "kovancki", premikanje enega kovancka (angle, power, velocity() collision detection
// torek 4.11.2014: odbijanje od stene/od ostalih krogcev, mouse select


var WIDTH = 800;
var HEIGHT = 800;
var frames = 0;
var SELECTED;
var FPS = 60;
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
    dragging = false,
    lastX = 0,
    translated = 0;
canvas.width = WIDTH;
canvas.height = HEIGHT;


canvas.onmousedown = function(e){
  var evt = e || event;
  dragging = true;
  lastX = evt.offsetX;
}

window.onmousemove = function(e){
  var evt = e || event;
  if (dragging){
    var delta = evt.offsetX - lastX;
    translated += delta;
    ctx.translate(delta, 0);
    lastX = evt.offsetX;
    izris();
  }
}

window.onmouseup = function(){
  dragging = false;
}


canvas.addEventListener("mousedown", doMouseDown, false);

var mouse = {
	x: null,
	y: null
};

var krog1 = {
	r: Math.floor((Math.random() * 25) + 15),
	x: Math.floor((Math.random() * (WIDTH - 200)) + 100),
	y: Math.floor((Math.random() * (HEIGHT - 200)) + 100),
	power: 0,
	angle: 0,
	velocity: 0,
	friction: 0.05,
	izris: function () {
		ctx.beginPath();
		ctx.arc(krog1.x, krog1.y, krog1.r, 0, 2 * Math.PI);
		ctx.fillStyle = "#133edc";
		ctx.fill();
		ctx.strokeStyle = "#133edc";
		ctx.stroke();
		ctx.closePath();

	},
	update: function () {
		this.x += this.velocity * Math.cos(this.angle / -180 * Math.PI);
		this.y += this.velocity * Math.sin(this.angle / -180 * Math.PI);
		if (this.velocity > 0.1) {
			this.velocity -= this.velocity * this.friction;
		} else {
			this.velocity = 0;
		}
		if (this.angle > 360)
			this.agnle -= 360;

	},
	reflect: function (angle, velocity) {

		if (angle === 0)
			angle = 360;
		this.angle = angle * 2 + this.angle;
		this.velocity = velocity * 0.8;
		if (this.angle > 360) {
			this.angle -= 360;
		}
	}
};



var krog2 = {
	r: Math.floor((Math.random() * 25) + 15),
	x: Math.floor((Math.random() * (WIDTH - 200)) + 100),
	y: Math.floor((Math.random() * (HEIGHT - 200)) + 100),
	power: 0,
	angle: 0,
	velocity: 0,
	friction: 0.05,
	izris: function () {
		ctx.beginPath();
		ctx.arc(krog2.x, krog2.y, krog2.r, 0, 2 * Math.PI);
		ctx.fillStyle = "#c90c0c";
		ctx.fill();
		ctx.strokeStyle = "#c90c0c";
		ctx.stroke();
		ctx.closePath();

	},
	update: function () {
		this.x += this.velocity * Math.cos(this.angle / -180 * Math.PI);
		this.y += this.velocity * Math.sin(this.angle / -180 * Math.PI);
		if (this.velocity > 0.1) {
			this.velocity -= this.velocity * this.friction;
		} else {
			this.velocity = 0;
		}
		if (this.angle > 360)
			this.agnle -= 360;

	},
	reflect: function (angle, velocity) {

		if (angle === 0)
			angle = 360;
		this.angle = angle * 2 + this.angle;
		this.velocity = velocity * 0.8;
		if (this.angle > 360) {
			this.angle -= 360;
		}
	}
};

var krog3 = {
	r: Math.floor((Math.random() * 25) + 15),
	x: Math.floor((Math.random() * (WIDTH - 200)) + 100),
	y: Math.floor((Math.random() * (HEIGHT - 200)) + 100),
	power: 0,
	angle: 0,
	velocity: 0,
	friction: 0.05,
	izris: function () {
		ctx.beginPath();
		ctx.arc(krog3.x, krog3.y, krog3.r, 0, 2 * Math.PI);
		ctx.fillStyle = "#95f34d";
		ctx.fill();
		ctx.strokeStyle = "#95f34d";
		ctx.stroke();
		ctx.closePath();

	},
	update: function () {
		this.x += this.velocity * Math.cos(this.angle / -180 * Math.PI);
		this.y += this.velocity * Math.sin(this.angle / -180 * Math.PI);
		if (this.velocity > 0.1) {
			this.velocity -= this.velocity * this.friction;
		} else {
			this.velocity = 0;
		}
		if (this.angle > 360)
			this.agnle -= 360;

	},
	reflect: function (angle, velocity) {

		if (angle === 0)
			angle = 360;
		this.angle = angle * 2 + this.angle;
		this.velocity = velocity * 0.8;
		if (this.angle > 360) {
			this.angle -= 360;
		}
	}

};

function doMouseDown(event) {
	var mouse_x = event.pageX;
	var mouse_y = event.pageY;
	mouse.x = mouse_x - translated;
	mouse.y = mouse_y;
}

function animate() {
	setTimeout(function () {
		frames++;
		window.requestAnimationFrame(animate);
		krog1.update();
		krog2.update();
		krog3.update();
		collision();
		izris();
	}, 1000 / FPS);

}
function reset_likov(){
	krog1.power = 0;
	krog1.angle = 0;
	krog2.power = 0;
	krog2.angle = 0;
	krog3.power = 0;
	krog3.angle = 0;
}
function collision() {
	var dx, dy, radii;
	if ( //preverja robove krog1
		krog1.y > HEIGHT - krog1.r || krog1.y < 0 + krog1.r) {
		krog1.reflect(krog1.angle, krog1.velocity);
	}
	if ( //preverja robove krog2
		krog2.y > HEIGHT - krog2.r || krog2.y < 0 + krog2.r) {
		krog2.reflect(krog2.angle, krog2.velocity);
	}
	if ( //preverja robove krog3
		krog3.y > HEIGHT - krog3.r || krog3.y < 0 + krog3.r) {
		krog3.reflect(krog3.angle, krog3.velocity);
	}
	//primerja krog1 in krog2 če je krog1 premikajoči
	if (SELECTED == 1) {
		var dx = krog1.x - krog2.x;
		var dy = krog1.y - krog2.y;
		var radii = krog1.r + krog2.r;
		if ((dx * dx) + (dy * dy) < radii * radii) {
			krog1.reflect(krog1.angle, krog1.velocity);
			krog2.reflect(krog1.angle + 180, krog1.velocity);
		}
	}
	//primerja krog 1 in krog2 če je krog2 premikajoči
	if (SELECTED == 2) {
		var dx = krog1.x - krog2.x;
		var dy = krog1.y - krog2.y;
		var radii = krog1.r + krog2.r;
		if ((dx * dx) + (dy * dy) < radii * radii) {
			krog2.reflect(krog2.angle, krog2.velocity);
			krog1.reflect(krog2.angle + 180, krog2.velocity);
		}
	}


	//primerja krog1 in krog3
	dx = krog1.x - krog3.x;
	dy = krog1.y - krog3.y;
	radii = krog1.r + krog3.r;
	if ((dx * dx) + (dy * dy) < radii * radii) {
		krog1.reflect(krog1.angle, krog1.velocity);
		krog3.reflect(krog1.angle + 180, krog1.velocity);
	}
	//primerja krog2 in krog3
	dx = krog2.x - krog3.x;
	dy = krog2.y - krog3.y;
	radii = krog2.r + krog3.r;
	if ((dx * dx) + (dy * dy) < (radii * radii)) {
		krog2.reflect(krog2.angle, krog2.velocity);
		krog3.reflect(krog2.angle + 180, krog2.velocity);
	}

}

function izris() {
	ctx.clearRect(-translated,0,HEIGHT,WIDTH);
	krog1.izris(); //krog1 izris
	krog2.izris(); //krog2 izris
	krog3.izris(); //krog3 izris
	switch (SELECTED) {
	case 1:
		ctx.fillText("angle: " + krog1.angle, 10-translated, 10);
		ctx.fillText("power: " + krog1.power, 10-translated, 25);
		break;
	case 2:
		ctx.fillText("angle: " + krog2.angle, 10-translated, 10);
		ctx.fillText("power: " + krog2.power, 10-translated, 25);
		break;
	case 3:
		ctx.fillText("angle: " + krog3.angle, 10-translated, 10);
		ctx.fillText("power: " + krog3.power, 10-translated, 25);
		break;
	}
}

function krogselect() {
	reset_likov();
	console.log("krog pos" + krog1.x + "  " + krog1.y);
	if (mouse.x > krog1.x - krog1.r &&
		mouse.x < krog1.x + krog1.r &&
		mouse.y > krog1.y - krog1.r &&
		mouse.y < krog1.y + krog1.r)
		return 1;
	if (mouse.x > krog2.x - krog2.r &&
		mouse.x < krog2.x + krog2.r &&
		mouse.y > krog2.y - krog2.r &&
		mouse.y < krog2.y + krog2.r)
		return 2;
	if (mouse.x > krog3.x - krog3.r &&
		mouse.x < krog3.x + krog3.r &&
		mouse.y > krog3.y - krog3.r &&
		mouse.y < krog3.y + krog3.r)
		return 3;
	else
		return 0;
}

function main() {
	console.log ("TRIKOTNIK 1 x: " + krog1.x + "y: " + krog1.y);
	console.log ("TRIKOTNIK 2 x: " + krog2.x + "y: " + krog2.y);
	console.log ("TRIKOTNIK 3 x: " + krog3.x + "y: " + krog3.y);
	
	izris();
	document.addEventListener('mousedown', function (event) {
		animate();
		console.log("mouse pos x:" + mouse.x + " y: " + mouse.y);
		SELECTED = krogselect();
		console.log(SELECTED);

	});

	document.addEventListener('keydown', function (event) {
		switch (SELECTED) {
		case 1:
			if (event.keyCode == 88) {
				krog1.velocity = krog1.power;
				krog1.power = 0;
				animate();
			}
			if (event.keyCode == 38) {
				krog1.angle += 5;
				if (krog1.angle > 360)
					krog1.angle = 0;

				izris();
			}
			if (event.keyCode == 39) {
				if(krog1.power< 41)
				krog1.power += 2;
				else
					krog1.power = 0;
				izris();
			}
			break;
		case 2:

			if (event.keyCode == 88) {
				krog2.velocity = krog2.power;
				krog2.power = 0;
				animate();
			}
			if (event.keyCode == 38) {
				krog2.angle += 5;
				if (krog2.angle > 360)
					krog2.angle = 0;

				izris();
			}
			if (event.keyCode == 39) {
				if(krog2.power< 41)
				krog2.power += 2;
				else
					krog2.power = 0;
				izris();
			}
			break;
		case 3:

			if (event.keyCode == 88) {
				krog3.velocity = krog3.power;
				krog3.power = 0;
				animate();
			}
			if (event.keyCode == 38) {
				krog3.angle += 5;
				if (krog3.angle > 360)
					krog3.angle = 0;

				izris();
			}
			if (event.keyCode == 39) {
				if(krog3.power< 41)
				krog3.power += 2;
				else
					krog3.power = 0;
				izris();
			}
			break;

		}

	});

}

main();