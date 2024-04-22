// code works but for some reason i have issues with the html file, it works fine on p5.js edtiro

//link:https://editor.p5js.org/sebmalv/full/EH9kvHsuP


let images = []; // mayan calendar
let eastButton;
let westButton;
let northButton;
let southButton;
let redTint= 255;


let eastCircle, westCircle, northCircle, southCircle;
let soundFiles = []; 

let soundFileNames = [
  'garifunaDrums.mp3',
  'deerSound.mp3',
  'mayanRitual1.mp3',
  'indigenousCeremony.mp3'
];
let imageNames = [
  './images/imix.jpg', './images/ik.jpg', './images/akbal.jpg', './images/kan.jpg', './images/chikchan.jpg', // daysigns of the Tzolk'in
  './images/kimi.jpg', './images/manik.jpg', './images/lamat.jpg', './images/muluk.jpg', './images/oc.jpg',
  './images/chuen.jpg', './images/eb.jpg', './images/ben.jpg', './images/ix.jpg', './images/men.jpg',
  './images/kib.jpg', './images/kaban.jpg', './images/etznab.jpg', './images/kawak.jpg', './images/ahua.jpg'
];


let fluteNotes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']; //flute notes
let fluteFreqs = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88]; // flute scale
let fluteIndex = 0; //  current flute note
let osc; //sound 
let modFreq = 5; 
let modDepth = 10; 

function preload() {
  // image load
  for (let i = 0; i < imageNames.length; i++) {
    images.push(loadImage(imageNames[i]));
  }
  for (let i = 0; i < soundFileNames.length; i++) {
    soundFiles.push(loadSound('./sounds/' + soundFileNames[i]));
  }
}


function setup() {


  createCanvas(400, 400);
  background(255);

  // buutton
  eastButton = createButton('east');
  // buutton
  northButton = createButton('north');
    // buutton
  southButton = createButton('south');
    // buutton
  westButton = createButton('west');

  eastButton.mousePressed(eastFunction);
  westButton.mousePressed(westFunction);
  northButton.mousePressed(northFunction);
  southButton.mousePressed(southFunction);



  let circleSize = 20; // size
  let spacing = 30; // spacing between circles
  let centerX = width / 2;
  let centerY = height / 2;

  // Assign circles to variables and draw them
  eastCircle = createCircle(centerX + spacing, centerY, circleSize, color(255, 255, 0), "East");
  westCircle = createCircle(centerX - spacing, centerY, circleSize, color(255, 0, 0), "West");
  northCircle = createCircle(centerX, centerY - spacing, circleSize, color(0), "North");
  southCircle = createCircle(centerX, centerY + spacing, circleSize, color(255), "South");

  // oscillator
  osc = new p5.Oscillator();
  osc.setType('sine'); // oscillator type
  osc.freq(fluteFreqs[0]); 
  osc.amp(0.5); // initial amplitude
  osc.start(); //  oscillator
}


function createCircle(x, y, size, c, label) {
  fill(c);
  ellipse(x, y, size, size);
  fill(0);
  text(label, x, y);
}

function draw() {
  // images around the border
  let imageSize = width / 6.5; // image size
  let padding = 8; // space between
  for (let i = 0; i < images.length; i++) {
    if (i < 5) {
      image(images[i], i * (imageSize + padding), 0, imageSize, imageSize); // top row
    } else if (i < 10) {
      image(images[i], (i - 4.5) * (imageSize + padding), height - imageSize, imageSize, imageSize); // Bottom row
    } else if (i < 15) {
      image(images[i], width - imageSize, (i - 10) * (imageSize + padding), imageSize, imageSize); // right side
    } else {
      image(images[i], 0, (i - 15) * (imageSize + padding), imageSize, imageSize); // left side
    }
  }
}

function playYourSound(soundIndex) {

  if (soundFiles[soundIndex].isPlaying()) {
    soundFiles[soundIndex].stop();
  }
  // Play the sound
  soundFiles[soundIndex].play();
}

function eastFunction() {
  // Yellow tint
  tint(255, 255, 0);
  for (let i = 0; i < images.length; i++) {
    image(images[3], 0, 0, width, height);
  }
  // Play sound
  playYourSound(0);
}

function westFunction() {
  // Red tint
  tint(255, 40, 0);
  for (let i = 0; i < images.length; i++) {
    image(images[6], 0, 0, width, height);
  }
  // Play sound
  playYourSound(1); 
}

function northFunction() {
  // Grey tint
  tint(100);
  for (let i = 0; i < images.length; i++) {
    image(images[15], 0, 0, width, height);
  }
  // Play sound
  playYourSound(2); 
}



function southFunction() {




  shuffle(images, true); // Shuffle the array in place

  // images around the border
  let imageSize = width / 6.5; // image size
  let padding = 8; // space between
  for (let i = 0; i < images.length; i++) {
    if (i < 5) {
      image(images[i], i * (imageSize + padding), 0, imageSize, imageSize); // top row
    } else if (i < 10) {
      image(images[i], (i - 4.5) * (imageSize + padding), height - imageSize, imageSize, imageSize); // Bottom row
    } else if (i < 15) {
      image(images[i], width - imageSize, (i - 10) * (imageSize + padding), imageSize, imageSize); // right side
    } else {
      image(images[i], 0, (i - 15) * (imageSize + padding), imageSize, imageSize); // left side
    }
  }

 
  tint(255, 165, 0); // Orange tint
  for (let i = 0; i < images.length; i++) {
    image(images[9], 0, 0, width, height);
  }


  // Play a sound
  playYourSound(3); 

}






// Function to play flute notes
function playFlute() {
  let note = random(fluteNotes); //random note
  let index = fluteNotes.indexOf(note);
  let freq = fluteFreqs[index];


  // frequency modulation
  let modFreqValue = map(sin(frameCount * modFreq), -1, 1, freq - modDepth, freq + modDepth);
  osc.freq(modFreqValue);

  // modulation
  let modAmpValue = map(sin(frameCount * modFreq), -1, 1, 0.3, 0.7);
  osc.amp(0.1); 
}

// times to play flute
setInterval(playFlute, 500); 
