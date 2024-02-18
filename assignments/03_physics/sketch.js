const animals = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    animals.push(new Animal(random(width), random(height)));
  }
}

function draw() {
  background(255); // White background for the soup
  
  for (let animal of animals) {
    animal.move();
    animal.display();
  }
}

class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(10, 30);
    this.speed = random(1, 3);
    this.color = color(random(255), random(255), random(255));
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    // Wrap around the canvas
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}