//Christian Strack
//119149/4
//comisión 4
//tp1rec
//video: https://www.youtube.com/watch?v=6j7Ghs1JkP8&ab_channel=Cris

let tam = 23;
let cant = 25;
let tec = 0;
let num = 0;
let clicks = 0;

function preload() {
  imagen = loadImage("data/F_17.jpg");
}

function setup() {
  createCanvas(800, 400);
}

function keyPressed() {
  if (keyCode === ENTER) {
    tec++;
  }
}

function mouseClicked() {
  clicks++
}

function draw() {
  noStroke();
  
  if (clicks % 2 == 0) {
    if (teclaColor()) {
      background(0);
    } else {
      background(255);
    }
  }

  grilla();
  image(imagen, 0, 0, 400, 400);
}
