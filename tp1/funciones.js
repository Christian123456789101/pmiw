let num = 0;

function keyPressed() {
  if (keyCode === ENTER) {
    num++;
  }
}

function esPar() {
  return num % 2 === 0;
}

function teclaColor() {
  return esPar();
}

function grilla() {
  for (let x = 400; x < width; x +=cant) {
    for (let y = 0; y < width; y  +=cant) {
      let distancia = dist(mouseX, 0, x, 0);
      let tono = dist(width/50, height/5, 0, 0)/distancia*255;
      tam = dist(width, height/2, 0, 0)/distancia;
      if (tam >24) {
        tam=24;
      }
      if (tam<15) {
        tam=15;
      }
      if (clicks % 2 == 0) {
        if ( teclaColor() ) {
          fill (255, tono);
        } else {
          fill(0, tono);
        }
      }

      ellipse(x, y, tam, tam);
    }
  }
}
