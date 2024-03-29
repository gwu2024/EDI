//create a program that can customize the number of squares in a grid

let img; // img for stattic image
function preload(){
  img = loadImage('../assets/BG_Graphic.png'); //preload my image
}

function setup() {//runs one time
createCanvas (windowWidth, windowWidth); //720 pixels by 720 pixels
background (205, 240, 255); //background is light blue
}

function draw() { //runs in a loop
fill (250, 218, 221);
strokeWeight (1);


var num = 2; //number of squares in my array
var sideLen = windowWidth/num; //side length

translate (-150, -150);// this will give your design bleed effect


for (var y = 0; y < 2 * windowWidth; y = y + sideLen) {// loop creates a row in the y direction
for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {// loop creates a row in the x direction

      image (img, x, y, windowWidth/num, windowWidth/num);
}
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);//this resizes and refreshes your design with the browser
}
}
