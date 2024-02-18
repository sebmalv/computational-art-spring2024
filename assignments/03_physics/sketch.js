const animals = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    animals.push(new Animal(random(width), random(height)));
  }
}

function draw() {
  background('#B0E57C'); // Light green background for the soup

  for (let animal of animals) {
    animal.move();
    animal.display();
  }
}

class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(20, 40);
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

    // Body
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

    // Ears
    triangle(
      this.x - this.radius * 0.7, this.y - this.radius * 0.5,
      this.x - this.radius * 0.2, this.y - this.radius * 1.2,
      this.x - this.radius * 0.4, this.y - this.radius * 0.5
    );
    triangle(
      this.x + this.radius * 0.7, this.y - this.radius * 0.5,
      this.x + this.radius * 0.2, this.y - this.radius * 1.2,
      this.x + this.radius * 0.4, this.y - this.radius * 0.5
    );

    // Eyes
    fill(0);
    ellipse(this.x - this.radius * 0.3, this.y - this.radius * 0.2, this.radius * 0.2, this.radius * 0.2);
    ellipse(this.x + this.radius * 0.3, this.y - this.radius * 0.2, this.radius * 0.2, this.radius * 0.2);

    // Nose
    triangle(
      this.x, this.y - this.radius * 0.1,
      this.x - this.radius * 0.05, this.y + this.radius * 0.2,
      this.x + this.radius * 0.05, this.y + this.radius * 0.2
    );
  }
}