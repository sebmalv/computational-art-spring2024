const animals = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    const animalType = random() > 0.5 ? 'dog' : 'cat';
    animals.push(new Animal(random(width), random(height), animalType));
  }
}

function draw() {
  background('#87CEEB'); // Sky Blue background for the canvas

  for (let animal of animals) {
    animal.update();
    animal.display();
  }
}

class Animal {
  constructor(x, y, type) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.size = random(30, 60);
    this.color = color(random(255), random(255), random(255));
    this.type = type;
  }

  update() {
    // Apply physics simulation
    const drag = createVector(this.velocity.x, this.velocity.y);
    drag.mult(-0.05);
    this.acceleration.add(drag);

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    // Reset acceleration
    this.acceleration.mult(0.2);

    // Bounce off walls
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();

    if (this.type === 'dog') {
      ellipse(this.position.x, this.position.y, this.size, this.size * 0.8);
      ellipse(this.position.x - this.size * 0.3, this.position.y - this.size * 0.4, this.size * 0.3, this.size * 0.3);
      ellipse(this.position.x + this.size * 0.3, this.position.y - this.size * 0.4, this.size * 0.3, this.size * 0.3);
    } else {
      ellipse(this.position.x, this.position.y, this.size, this.size * 0.8);
      triangle(
        this.position.x - this.size * 0.4, this.position.y - this.size * 0.4,
        this.position.x, this.position.y - this.size * 0.8,
        this.position.x + this.size * 0.4, this.position.y - this.size * 0.4
      );
    }
  }
}