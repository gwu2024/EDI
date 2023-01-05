function setup() {//runs one time
createCanvas (720, 720); //720 pixels by 720 pixels
background (205, 240, 255); //background is light blue
}

function draw() { //runs in a loop
fill (250, 218, 221);
strokeWeight (8);
translate (60, 60);
quad(0, 0,
    300, 0,
    300, 300,
    0, 300);

quad(300, 0,
    600, 0,
    600, 300,
    300, 300); //move quad 300 pixels in the x direction

quad(0, 300,
    300, 300,
    300, 600,
    0, 600);

quad(300, 300,
      600, 300,
      600, 600,
      300, 600);
}
