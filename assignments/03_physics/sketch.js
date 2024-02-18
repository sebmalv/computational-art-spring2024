const symbols = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    symbols.push(new MayanSymbol(random(width), random(height)));
  }
}

function draw() {
  background('#2E2E2E'); // Dark Gray background for the canvas

  for (let symbol of symbols) {
    symbol.display();
  }
}

class MayanSymbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(30, 60);
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    noStroke();

    // Simple geometric shape resembling a Mayan symbol
    beginShape();
    vertex(this.x, this.y - this.size);
    vertex(this.x + this.size, this.y);
    vertex(this.x, this.y + this.size);
    vertex(this.x - this.size, this.y);
    endShape(CLOSE);
  }
}