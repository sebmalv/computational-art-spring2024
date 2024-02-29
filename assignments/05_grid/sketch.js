let numCellsWidth = 40;
let numCellsHeight = 40;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  cellWidth = width / numCellsWidth;
  cellHeight = height / numCellsHeight;
}

function draw() {
  background(0, 0, 100);
  drawGrid();
}

function drawGrid() {
  for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
    for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
      let x = cellWidth * xIndex;
      let y = cellHeight * yIndex;

      drawCell(x, y, xIndex, yIndex);
    }
  }
}

function drawCell(x, y, xIndex, yIndex) {
  push();
  translate(x, y);

  let hue = map(noise(xIndex * 0.90, yIndex * 0.40), 0, 1, 0, 360);
  fill(hue, 70, 100);
  
  // Draw rotated square to create a diamond
  rotate(radians(45));
  rect(0, 0, cellWidth * sqrt(2), cellHeight * sqrt(2));

  let sineWave = sin(frameCount * 0.05); // Adjust the frequency by changing the multiplier
  let hue2 = (hue + sineWave * 50) % 360; // Add sine wave variation to hue
  drawEllipse(hue2, 780, 50, cellWidth, cellHeight);
  
  pop();
}

function drawEllipse(hue, offset, saturation, ellipseWidth, ellipseHeight) {
  let sineWave = sin(frameCount * 0.03); // Adjust the frequency by changing the multiplier
  let hue2 = (hue + sineWave * 800) % 60; // Add sine wave variation to hue
  
  fill(hue2, saturation, 100);
  noStroke();
  ellipse(cellWidth / 2, cellHeight / 2, ellipseWidth, ellipseHeight);
}
