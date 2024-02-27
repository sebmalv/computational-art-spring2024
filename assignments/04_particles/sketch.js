let particles = [];
let rT = 1.8; 
let rToff = 3.9;
let noiseOffset = 1000;
let color1, color2;


function setup() {
  createCanvas(400, 400);
  
  // Initialize colors
  color1 = color((153, 221, 255));
  color2 = color(255, 221, 153);

  // Create an array of particles
  for (let i = 0; i < 2000; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}

function draw() {
  // Gradually change background colors over time
  color1 = lerpColor(color1, color(random(255), random(255), random(255)), 0.01);
  color2 = lerpColor(color2, color(random(255), random(255), random(255)), 0.01);

  // Use the setGradient function to create a changing background gradient
  setGradient(0, 0, width, height, color1, color2, "XY");

  // Update and display particles within the moon circle
  for (let particle of particles) {
    let gravity = createVector(0, 0.1); // Gravity pointing down
    let drag = particle.velocity.copy();
    drag.mult(-0.05); // Adjust drag strength

    particle.applyForce(gravity);
    particle.applyForce(drag);
    
    particle.update();
    particle.display();
    particle.bounce();
  }
  sunRing();
}

function sunRing(){
  translate(width/2, height/2); // CENTERED
  stroke("red");
  fill(100,50);
  let t = 0
  beginShape();
  for(let a = 0; a < TWO_PI; a += 0.1){
    let r = random(50, 100);
    let x = r * cos(a) * rT;
    let y = r * sin(a) * rT;      
    vertex(x, y);
    t += -0.05;
  }
  endShape(CLOSE);
  loop();
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.acceleration = createVector(0, 0);
    this.color = color(random(255), random(255), random(255));
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0); // Reset acceleration
    
    // Change color over time
    this.color.levels[0] = (this.color.levels[0] + 1) % 256;
    this.color.levels[1] = (this.color.levels[1] + 1) % 256;
    this.color.levels[2] = (this.color.levels[2] + 1) % 256;
  }

  display() {
    // Draw the particle with its current color
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, 10, 10); // Particle size
  }

  bounce() {
    // Check if the particle is outside the noise and adjust velocity for bouncing
    let d = dist(this.position.x, this.position.y, 200, 200);
    if (d > 75) { // movement
      let dir = createVector(200, 200).sub(this.position).normalize();
      let bounce = this.velocity.copy().reflect(dir);
      this.velocity.set(bounce);
    }
 }
}
