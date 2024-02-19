const animals = [];
let trampoline;
let gravity;

function setup() {
  createCanvas(600, 400);
  trampoline = new Trampoline(width, height); // Trampoline with bouncing force
  gravity = createVector(0, 0.2); // Gravity force

  for (let i = 0; i < 25; i++) {
    const animalType = random() > 0.5 ? 'dog' : 'cat';
    const windForce = createVector(random(-0.05, 0.05), 0); // Adjust wind force as needed
    animals.push(new Animal(random(width), random(height), animalType, windForce));
  }
}

function draw() {
  background('#B0E57C'); // Light green background for the trampoline

  trampoline.update();
  trampoline.display();

  for (let animal of animals) {
    animal.move(trampoline);
  }

  for (let animal of animals) {
    animal.applyGravity(gravity);
    animal.display();
  }
}

class Animal {
  constructor(x, y, type, windForce) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.radius = random(20, 40);
    this.color = color(random(255), random(255), random(255));
    this.type = type;
    this.windForce = windForce; // New property for wind force
  }

  move(trampoline) {
    // Apply trampoline forces
    const trampolineForce = trampoline.calculateForce(this.position);
    this.acceleration.add(trampolineForce * 2);

    // Apply wind force
    this.acceleration.add(this.windForce);

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

    // Contain within canvas
    this.position.x = constrain(this.position.x, 0, width);
    this.position.y = constrain(this.position.y, 0, height);
  }

  applyGravity(gravity) {
    // Apply gravity force
    this.acceleration.add(gravity);
  }

  display() {
    fill(this.color);

    // Body
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);

    // Ears or round ears
    if (this.type === 'dog') {
      ellipse(this.position.x - this.radius * 0.5, this.position.y - this.radius * 0.8, this.radius * 0.5, this.radius * 0.5);
      ellipse(this.position.x + this.radius * 0.5, this.position.y - this.radius * 0.8, this.radius * 0.5, this.radius * 0.5);
    } else {
      triangle(
        this.position.x - this.radius * 0.7, this.position.y - this.radius * 0.5,
        this.position.x - this.radius * 0.2, this.position.y - this.radius * 1.2,
        this.position.x - this.radius * 0.4, this.position.y - this.radius * 0.5
      );
      triangle(
        this.position.x + this.radius * 0.7, this.position.y - this.radius * 0.5,
        this.position.x + this.radius * 0.2, this.position.y - this.radius * 1.2,
        this.position.x + this.radius * 0.4, this.position.y - this.radius * 0.5
      );
    }

    // Eyes
    fill(0);
    ellipse(this.position.x - this.radius * 0.3, this.position.y - this.radius * 0.2, this.radius * 0.2, this.radius * 0.2);
    ellipse(this.position.x + this.radius * 0.3, this.position.y - this.radius * 0.2, this.radius * 0.2, this.radius * 0.2);

    // Nose
    triangle(
      this.position.x, this.position.y - this.radius * 0.1,
      this.position.x - this.radius * 0.05, this.position.y + this.radius * 0.2,
      this.position.x + this.radius * 0.05, this.position.y + this.radius * 0.2
    );
  }
}

class Trampoline {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.bounceForce = 0.02;
    this.center = createVector(width / 2, height - 20);
    this.radius = width / 2;
  }

  calculateForce(position) {
    // Calculate trampoline force based on the distance from the center
    const distance = dist(position.x, position.y, this.center.x, this.center.y);
    const strength = this.bounceForce / (distance * 0.1 + 1);
    const direction = createVector(position.x - this.center.x, position.y - this.center.y);
    direction.normalize();
    direction.mult(strength);
    return direction;
  }

  update() {
    // ... (any update logic, currently empty)
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.center.x, this.center.y, this.radius * 2, 20);
  }
}
