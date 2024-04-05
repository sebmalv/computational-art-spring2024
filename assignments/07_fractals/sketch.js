let angle = 0;
let radius = 150; 
let eyeSize = 80; 
let numCircles = 40; 

let startColor;
let endColor;
let backgroundColorAlpha = 10; 



function setup() {
  createCanvas(400, 400);
  colorMode(RGB); // color mode
  startColor = color(252, 93, 115);
  endColor = color(133, 0, 18);
}

function draw() {
  // hue mapping
  let redc = map(sin(angle), -1, 1, red(startColor), red(endColor));
  let greenc = map(sin(angle), -1, 1, green(startColor), green(endColor));
  let bluec = map(sin(angle), -1, 1, blue(startColor), blue(endColor));
  background(redc, greenc, bluec, backgroundColorAlpha);
  

  
  translate(width / 2, height / 2); //put in middle
  
  //totation
  angle += 0.06;
  
  drawCircleOfEyes(0, 0, radius, eyeSize, numCircles);
}

function drawCircleOfEyes(x, y, radius, eyeSize, numEyes) {
  for (let i = 0; i < TWO_PI; i += TWO_PI / numEyes) {
    let newX = x + radius * cos(i + angle);
    let newY = y + radius * sin(i + angle);
    drawEye(newX, newY, eyeSize); 
  }
  
  // recursive
  if (numEyes > 1) {
    let newRadius = radius * .9 ; 
    let newEyeSize = eyeSize * 0.8; //size
    drawCircleOfEyes(x, y, newRadius, newEyeSize, numEyes - 1);
  }
}

function drawEye(x, y, eyeSize) {
  // eye white
  fill(255);
  stroke(0);
  ellipse(x, y, eyeSize, eyeSize * 0.75);
  
  // move irius w mouse
  let irisX = map(mouseX, 0, width, x - eyeSize * 0.25, x + eyeSize * 0.25);
  let irisY = map(mouseY, 0, height, y - eyeSize * 0.25, y + eyeSize * 0.25);
  
  // color maps
  let irisRed = map(sin(angle), -1, 1, red(startColor), red(endColor));
  let irisGreen = map(sin(angle), -1, 1, green(startColor), green(endColor));
  let irisBlue = map(sin(angle), -1, 1, blue(startColor), blue(endColor));
  
  // iris
  fill(irisRed, irisGreen, irisBlue);
  ellipse(irisX, irisY, eyeSize * 0.5, eyeSize * 0.5); 
  
  // pupil
  fill(0);
  ellipse(irisX, irisY, eyeSize * 0.25, eyeSize * 0.25); 
}