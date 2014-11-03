       var WIDTH = 800;
       var HEIGHT = 800;

       function init() {
           var canvas = document.getElementById("canvas");
           var ctx = canvas.getContext("2d");
           canvas.height = HEIGHT;
           canvas.width = WIDTH;
           ctx.clearRect(0, 0, WIDTH, HEIGHT);
       }

       var krog1 = {
           r: Math.floor((Math.random() * 25) + 15),
           x: Math.floor((Math.random() * WIDTH) + 1),
           y: Math.floor((Math.random() * HEIGHT) + 1),
           power: 0,
           angle: 70,
           izris: function () {
               var canvas = document.getElementById("canvas");
               var ctx = canvas.getContext("2d");
               ctx.beginPath();
               ctx.arc(krog1.x, krog1.y, krog1.r, 0, 2 * Math.PI);
               ctx.fillStyle = "#133edc";
               ctx.fill();
               ctx.strokeStyle = "#133edc";
               ctx.stroke();
               ctx.closePath();
               ctx.fillText("angle: " + this.angle, 10, 10);
               ctx.fillText("power: " + this.power, 10, 25);
           },
           update: function () {
               this.x += this.power * Math.cos(this.angle / -180 * Math.PI);
               this.y += this.power * Math.sin(this.angle / -180 * Math.PI);
               if(this.power > 0)
                   this.power = this.power - 0.02;
               else
                   this.power = 0;
           }
       };



       var krog2 = {
           r: Math.floor((Math.random() * 25) + 15),
           x: Math.floor((Math.random() * 800) + 1),
           y: Math.floor((Math.random() * 800) + 1),
           power: 0,
           angle: 0,
           izris: function () {
               var canvas = document.getElementById("canvas");
               var ctx = canvas.getContext("2d");
               ctx.beginPath();
               ctx.arc(krog2.x, krog2.y, krog2.r, 0, 2 * Math.PI);
               ctx.fillStyle = "#c90c0c";
               ctx.fill();
               ctx.strokeStyle = "#c90c0c";
               ctx.stroke();
               ctx.closePath();
           },
           update: function () {
               this.x += this.power * Math.cos(this.angle / -180 * Math.PI);
               this.y += this.power * Math.sin(this.angle / -180 * Math.PI);
               if(this.power > 0)
                   this.power = this.power - 0.2;
                else
                   this.power = 0;
           }
       };

       var krog3 = {
           r: Math.floor((Math.random() * 25) + 15),
           x: Math.floor((Math.random() * 800) + 1),
           y: Math.floor((Math.random() * 800) + 1),
           power: 0,
           angle: 0,
           izris: function () {
               var canvas = document.getElementById("canvas");
               var ctx = canvas.getContext("2d");
               ctx.beginPath();
               ctx.arc(krog3.x, krog3.y, krog3.r, 0, 2 * Math.PI);
               ctx.fillStyle = "#95f34d";
               ctx.fill();
               ctx.strokeStyle = "#95f34d";
               ctx.stroke();
               ctx.closePath();
           },
           update: function () {
               this.x += this.power * Math.cos(this.angle / -180 * Math.PI);
               this.y += this.power * Math.sin(this.angle / -180 * Math.PI);
               if(this.power > 0)
                   this.power = this.power - 0.2;
                else
                   this.power = 0;
           }

       };

       function animate(selektor) {
           var requestID = window.requestAnimationFrame(animate);
               krog1.update();
           if (collision() == 1)
               window.cancelAnimationFrame(requestID);
           izris();

       }

       function collision() {
           if ( //preverja robove krog1
               krog1.x > WIDTH-krog1.r || krog1.x < 0+krog1.r ||
               krog1.y > HEIGHT-krog1.r || krog1.y < 0+krog1.r)
               return 1;
           if ( //preverja robove krog2
               krog2.x > WIDTH || krog2.x < 0 ||
               krog2.y > HEIGHT || krog2.y < 0)
               return 1;
           if ( //preverja robove krog2
               krog3.x > WIDTH || krog3.x < 0 ||
               krog3.y > HEIGHT || krog3.y < 0)
               return 1;
           //primerja krog1 in krog2
           var dx = krog1.x - krog2.x;
           var dy = krog1.y - krog2.y;
           var radii = krog1.r + krog2.r;
           if ((dx * dx) + (dy * dy) < radii * radii) {
               return 1;
           }
           //primerja krog1 in krog3
           var dx = krog1.x - krog3.x;
           var dy = krog1.y - krog3.y;
           var radii = krog1.r + krog3.r;
           if ((dx * dx) + (dy * dy) < radii * radii) {
               return 1;
           }
           //primerja krog2 in krog3
           var dx = krog2.x - krog3.x;
           var dy = krog2.y - krog3.y;
           var radii = krog2.r + krog3.r;
           if ((dx * dx) + (dy * dy) < radii * radii) {
               return 1;
           }

       }

       function izris() {
           init();
           krog1.izris(); //krog1 izris
           krog2.izris(); //krog2 izris
           krog3.izris(); //krog3 izris
       }

       function main() {
           init();
           izris();
           document.addEventListener('keydown', function (event) {
               if (event.keyCode == 68) {
                   console.log("68");
                   animate(1);
               }
               if (event.keyCode == 87) {
                   animate(1);
               }
               if (event.keyCode == 65) {
                   animate(1);
               }
               if (event.keyCode == 83) {
                   animate(1);
               }
               if (event.keyCode == 38) {
                   krog1.angle += 1;
                   if (krog1.angle > 360)
                       krog1.angle = 0;
                   izris();
               }
               if (event.keyCode == 39) {
                   krog1.power += 0.5;
                   izris();
               }
           });
       }

       main();