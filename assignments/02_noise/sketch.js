//make a class for lines made of moving circles
//takes in which direction


let stars = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 200; i++) {
    stars[i] = {
      x: random(width),
      y: random(height),
      xNoise: random(10),
      yNoise: random(10),
      colorNoise: random(10),
      size: 25,
      speedX: random(1, 3),
      speedY: random(1, 3)
    };
  }
}

function draw() {
  background(220);

  for (let i = 0; i < stars.length; i++) {
    // Update noise values
    stars[i].xNoise += 0.01 * stars[i].speedX;
    stars[i].yNoise += 0.01 * stars[i].speedY;
    stars[i].colorNoise += 0.01;

    // Move the star using noise
    stars[i].x = map(noise(stars[i].xNoise), 0, 1, 0, width - stars[i].size * 2);
    stars[i].y = map(noise(stars[i].yNoise), 0, 1, 0, height - stars[i].size * 5);

    // Generate color with noise
    let r = map(noise(stars[i].colorNoise), 0, 1, 0, 355);
    let g = map(noise(stars[i].colorNoise + 10), 0, 1, 0, 100);
    let b = map(noise(stars[i].colorNoise + 20), 0, 1, 0, 455);

    // Draw the shadow
    fill(0, 50);
    drawStar(stars[i].x + 5, stars[i].y + 5, stars[i].size, stars[i].size / 2, 5);

    // Draw the star with changing color
    fill(r, g, b);
    drawStar(stars[i].x, stars[i].y, stars[i].size, stars[i].size / 2, 5);
  }
}

// Function to draw a star
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2;
  beginShape();
  for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}