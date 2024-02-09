//make a class for lines made of moving circles
//takes in which direction


let x, y; // Position of the square
let xNoise, yNoise; // Noise values for smoother movement
let colorNoise; // Noise value for color variation
let sideLength = 50; // Side length of the square

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  xNoise = random(10);
  yNoise = random(10);
  colorNoise = random(10);
}

function draw() {
  background(220);

  // Update noise values
  xNoise += 0.01;
  yNoise += 0.01;
  colorNoise += 0.01;

  // Move the square using noise
  x = map(noise(xNoise), 0, 1, 0, width - sideLength);
  y = map(noise(yNoise), 0, 1, 0, height - sideLength);

  // Generate color with noise
  let r = map(noise(colorNoise), 0, 1, 0, 255);
  let g = map(noise(colorNoise + 10), 0, 1, 0, 255);
  let b = map(noise(colorNoise + 20), 0, 1, 0, 255);

  // Draw the square with changing color
  fill(r, g, b);
  rect(x, y, sideLength, sideLength);
}

///
class circleLine {
  constructor(x, y,side,length,color,size) {
    //x is the drawings horizontal start
    //y is the drawing vertical start
    //side is whether it is horizontal or vertical
    // To define a variable, we need to make use of the 'this' keyword. 
    // 'this' refers to the instantiated object. 
    this.linelength= length;
    this.side= side;
    this.size= size;
    this.hue = 0;
    this.ballAmoount= 300;
    this.balls=[];
    this.xposition = x;
    this.yposition = y;
    this.color= color;
    this.velocity = createVector(random(-1, 1), random(-1, 1));
  }

  lineCreator(){
  
  }
  // To define a function inside of a class in javascript, you just
  // write the name you want to give it, write some paraentheses, and then
  // write the body of the function.
  update() {

  }
}

class ball {
  constructor(x, y,color,size) {
    // To define a variable, we need to make use of the 'this' keyword. 
    // 'this' refers to the instantiated object. 
    this.hue = 0;
    this.size= size;
    this.color= color;
    this.position = createVector(x, y);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
  }

  // To define a function inside of a class in javascript, you just
  // write the name you want to give it, write some paraentheses, and then
  // write the body of the function.
  update() {

  }
}