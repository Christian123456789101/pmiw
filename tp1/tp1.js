//Christian Strack
//119149/4
//comisión 4
//tp1
// https://youtu.be/dJpclsPD1lw?si=_svaO6daH4blzaJn

let imagen;
let tam = 23;
let cant = 25;
let tecla;
let clicks=0;

function preload() {
  imagen = loadImage("data/F_17.jpg");
}

function setup() {
  createCanvas (800, 400);
}

function mouseClicked() {
  clicks++;
}

function mousePressed() {
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
  image (imagen, 0, 0, 400, 400);

  grilla();
}
