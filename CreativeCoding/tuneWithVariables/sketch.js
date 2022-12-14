//create a program that can customize the number of squares in a grid
function setup() {//runs one time
createCanvas (windowWidth, windowWidth); //720 pixels by 720 pixels
background (205, 240, 255); //background is light blue
}

function draw() { //runs in a loop
fill (250, 218, 221);
strokeWeight (1);


var num = 2; //number of squares in my array
var sideLen = windowWidth/num; //side length

for (var y = 0; y < windowWidth; y = y + sideLen) {// loop creates a row in the y direction
for (var x = 0; x < windowWidth; x = x + sideLen) {// loop creates a row in the x direction
  quad(x, y,
    x +  sideLen, y,
    x +  sideLen, y + sideLen,
      x, y + sideLen);
}
}
}
