let sunUpColor, sunDownColor;
var points = [];
var grass = [];
var across;
var up;
var wind;
var blow;
let peoples = [];
let people = [];
let bees=[];
let flowers=[];
let logs=[];
let firePitPos; 

// make bees 
// used grass blowing in wind code from grass by rosaK onb p5js editor

function setup() {
  sunUpColor = color('#5ec4e6');
  sunDownColor = color('#17183C');
  across = 900;
  up = 400;
  createCanvas(900, 400);
  for (var i = 0; i < 90; i++) {
    grass[i] = random(-5, 10);
  }
  wind = 0;
  blow = true;
  let logHeight = 20; 
  let numLogs = 5; 
  let logSpacing = 5; 
  let totalHeight = numLogs * (logHeight + logSpacing) - logSpacing-20;
  for (let i = 0; i < 5; i++) {
    logs.push({
      x: 10, 
      y: height - totalHeight + i * (logHeight - logSpacing),
      width: 100,
      height: 10
    });
  }
  for (let n = 0; n < 20; n++) {
    let x = random(width);
    let y = random(height);
    let speed = random(1, 2);
    let direction = random(TWO_PI);
    let b = new bee(x, y, speed);
    b.setTarget(random(600, 900), random(200, 400)); 
    bees.push(b);
  }
  for (let i = 0; i < 8; i++) {
    let x = random(width);
    let y = 370;
    let speed = random(1, 2);
    let direction = random(TWO_PI);
    people.push(new Person(x, y, speed, direction));
  }


  firePitPos = createVector(300, height - 40);
}

function draw() {
  let timeOfDay = cos(frameCount / 100);
  let colorOne;
  if (timeOfDay < 0) {
    colorOne = lerpColor(sunUpColor, sunDownColor, abs(timeOfDay));
  } else {
    colorOne = lerpColor(sunDownColor, sunUpColor, abs(timeOfDay));
  }

  background(colorOne);
  field();
  for (let person of people) {
    person.move();
    person.display();
  }
  for (let bee of bees) {
    bee.display();
    bee.move();
  }

  // fire
  drawFire(firePitPos.x, firePitPos.y);
  // tipi
  tipi(500 ,380, width/4, height/2);
}

function drawFire(x, y) {
  // bottom wood
  fill(139, 69, 19); 
  stroke(0);
  rect(x-40 , y+10, 80, 10); 


  let fireColors = ['#FF7F00', '#FFD700', '#FF6347', '#FF4500']; 
  let numLayers = 5; 
  let layerHeight = 10; 
  let jitterAmount = 3; 

  for (let i = 0; i < numLayers; i++) {
    fill(fireColors[i % fireColors.length]); 
    let jitterX = random(-jitterAmount, jitterAmount); 
    let jitterY = random(-jitterAmount, jitterAmount); 
    rect(x - 20 + jitterX, y - i * layerHeight + jitterY, 40, layerHeight);
  }
}




function tipi(x, y, width, height) {
  //base
  fill(232, 135, 100); 
  beginShape();
  vertex(x, y - height);
  vertex(x - width / 2, y);
  vertex(x + width / 2, y);
  endShape(CLOSE);

  // entrance
  fill(0); 
  beginShape();
  vertex(x - 40, y);
  vertex(x + 40, y);
  vertex(x, y - 90);
  endShape(CLOSE);

}
function field() {
  breeze();
  fill(6, 50, 11);
  for (var l = 20; l < width + 40; l = l + 40) { 
    ellipse(l, height - 20, 100, 60);
  }
  for(var p= 600; p<900; p= p+30){
    drawFlower(p,320);
  }
  var i = 0;
  var p = 0;
  for (var z = up - 50; z <= height + 30; z = z + 5) { 
    for (var k = -50; k < across + 50; k = k + 2) {
      stroke(6 + 2 * grass[i], 80 + 0.5 * grass[i + 5], 10 + 2 * grass[i + 10]);
      strokeWeight(2);
      line(k + p + 0.1, z, k + grass[i] + p + wind, z - 15 + constrain(grass[i], -5, 5) + wind / 10);
     //drawFlower(10,10);
      i++;
      if (i == 50) {
        i = 0;
      }

      }
    }
    p = p + 3;
//}
      //   dirt
  fill(139, 69, 19); 
  noStroke();
  rect(0, height - 20, width, 40); 
  for (let log of logs) {
    fill(139, 69, 19);
    rect(log.x, log.y, log.width, log.height);
    
    // wood texture
    stroke(0);
    line(log.x, log.y + log.height / 3, log.x + log.width, log.y + log.height / 3);
    line(log.x, log.y + log.height * 2 / 3, log.x + log.width, log.y + log.height * 2 / 3);
  }
  
  
}


function breeze() {
  if (wind == 0) {
    blow = true;
  }
  if (wind < 10 && blow == true) {
    wind = wind + .5;
  }
  if (wind == 7) {
    blow = false;
  }
  if (wind > 0 && blow == false) {
    wind = wind - .5;
  }
}


function drawFlower(x, y) {
  var flowerColors = ['#6b4091', '#d15cac', '#f55167','#f59551','#2b25e6']; 
  var colorIndex = 0; 
  // stem shape 
  fill(0, 188, 0);
  rect(x - 1, y, 2, 30);

  // petal shape
  for (var i = 0; i < flowerColors.length; i++) {
    fill(flowerColors[(colorIndex + i) % flowerColors.length]); 
    ellipse(x + cos(TWO_PI * i / flowerColors.length) * 10,
            y + sin(TWO_PI * i / flowerColors.length) * 10,
            15, 15);
  }

  colorIndex = (colorIndex + 1) % flowerColors.length;


  fill('#e8d741');
  ellipse(x, y, 10, 10);
}
class bee {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = 20;
    this.targetX = 0;
    this.targetY = 0;
  }
  
  setTarget(x, y) {
    this.targetX = x;
    this.targetY = y;
  }
  
  move() {
    // calculating direction
    let dx = this.targetX - this.x;
    let dy = this.targetY - this.y;
    

    let distance = sqrt(dx*dx + dy*dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    
    // moving
    this.x += dx * this.speed;
    this.y += dy * this.speed;
    
    // is bee close to target
    if (distance < 5) {
      // random position of one of the flowers
      this.setTarget(random(600, 900), random(200, 400));
    }
  }
  
  display(){
    // bee body and color
    fill(255, 255, 0); 
    ellipse(this.x, this.y,this.size); 
    
    // bee stripe color and thickness
    stroke(0); 
    strokeWeight(3); 
    for (let i = this.y-5; i < this.y+10; i += 5) {
        line(this.x-4, i, this.x+4, i);
    }
  
    // bee wings
    fill(255); 
    noStroke();
    ellipse(this.x-10, this.y,10,this.size); // left w
    ellipse(this.x+10, this.y,10,this.size); //right w
  }
}


class Person {
  constructor(x, y, speed, angle) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.size = 20;
    this.hasLog = false; 
  }

  move() {
    let targetX, targetY;
    if (!this.hasLog) {
        // no log
        targetX = logs[4].x;
        targetY = logs[4].y;
    } else {
        // yes log
        targetX = firePitPos.x;
        targetY = firePitPos.y;
    }

    // direction towards the target
    let dx = targetX - this.x;
    let dy = targetY - this.y;

    let distance = sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
        dx /= distance;
        dy /= distance;
    }

    // movement
    this.x += dx * this.speed;
    this.y += dy * this.speed;

    // target reached
    if (dist(this.x, this.y, targetX, targetY) < 5) {
        
        this.hasLog = !this.hasLog;
    }
}
  display() {
    //  person
    fill(255);
    ellipse(this.x, this.y - this.size / 3, this.size * 0.7);
    stroke(0);
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y + this.size * 0.8);
    line(this.x - this.size * 0.3, this.y + this.size * 0.4, this.x + this.size * 0.3, this.y + this.size * 0.4);
    line(this.x, this.y + this.size * 0.8, this.x - this.size * 0.3, this.y + this.size * 1.2);
    line(this.x, this.y + this.size * 0.8, this.x + this.size * 0.3, this.y + this.size * 1.2);

    // log
    if (this.hasLog) {
      fill(139, 69, 19);
      rect(this.x - 5, this.y - 15, 10, 30); 
      stroke(0);
      line(this.x - 5, this.y - 15, this.x + 5, this.y - 15); 
      line(this.x - 5, this.y, this.x + 5, this.y); 
      line(this.x - 5, this.y + 15, this.x + 5, this.y + 15); 
    }
  }
}