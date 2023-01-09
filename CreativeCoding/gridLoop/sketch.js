function setup() {//runs one time
createCanvas (720, 720); //720 pixels by 720 pixels
background (205, 240, 255); //background is light blue
}

function draw() { //runs in a loop
fill (250, 218, 221);
strokeWeight (1);

for (var y = 0; y < 720; y = y + 360) {// loop creates a row in the y direction

for (var x = 0; x < 720; x = x + 360) {// loop creates a row in the x direction
  quad(x, y,
    x +  360, y,
    x +  360, y + 360,
      x, y + 360);
}
}
}
