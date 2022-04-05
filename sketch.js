let me, mee, bg;
let t = 0;

function preload() {
  me = loadImage("me.png");
  mee = loadImage("me1.png");
  bg = loadImage("back.jpeg");
  pic = loadImage("b.jpeg");
  bg2 = loadImage("bg.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noStroke();
  fill("red");
}

function draw() {
  background(34, 442, 303);
  
   imageMode(CORNER);
 image(bg, 0, 0, width - 0 ,height - 0);
  imageMode(CENTER);
image(pic, 600, 215, 850, 280);
  image(bg2, 600, 433, 1050, 180);
  image(mee, 410, 300, -480, -610);
  image(me, 780, 300, -405, -450);
  
  

for (let x = 0; x <= width; x = x + 40) {
    for (let y = 3; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -5 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 5 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 60 * cos(3 * PI * t + angle);
      const myY = y + 60 * sin(2 * PI * t + angle);

      rect(myX, myY, 15); // draw particle
    }
  }

  t = t + 0.01; // update time
  
  
}

