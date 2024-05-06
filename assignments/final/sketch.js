let matchImagePositions = [
  { x: 150, y: 300 },
  { x: 390, y: 300},
  { x: 650, y: 300 }
];

let wordTextTime;
let amountOfTries;



let nahuaSound = [
  './sounds/nahuaSound1.mp3', './sounds/nahuatSound2.mp3', './sounds/nahuatSound3.mp3'
];

let xincaSound = [
  './sounds/xinca1.mp4', './sounds/xinca2.mp4', './sounds/xinca3.mp4'
];

let poqomamSound = [
  './sounds/poqomam1.mp4', './sounds/poqomam2.mp4', './sounds/poqomam3.mp4'
];

let alaguilacSound = [
  './sounds/alaguilac1.mp4', './sounds/alaguilac2.mp4', './sounds/alaguilac3.mp4'
];

let chortiSound = [
  './sounds/chorti1.mp3', './sounds/chorti2.mp3', './sounds/chorti3.mp3'
];

let cacaoperaSound = [
  './sounds/cacaopera1.mp4', './sounds/cacaopera2.mp4', './sounds/cacaopera3.mp4'
];

let mangueSound = [
  './sounds/mangue1.mp4', './sounds/mangue2.mp4', './sounds/mangue3.mp4'
];

let mixeSound = [
  './sounds/mixe1.mp4', './sounds/mixe2.mp4', './sounds/mixe3.mp4'
];

let lencaSound = [
  './sounds/lenca1.mp4', './sounds/lenca2.mp4', './sounds/lenca3.mp4'
];


let nahuaWordImages = [
  './images/nahua1.jpg', './images/nahua2.jpg', './images/nahua3.jpg'
];

let xincaWordImages = [
  './images/xinca1.jpg', './images/xinca2.jpg', './images/xinca3.jpg'
];

let poqomamWordImages = [
  './images/poqomam1.jpg', './images/poqomam2.jpg', './images/poqomam3.jpg'
];

let alaguilacWordImages = [
  './images/alaguilac1.jpg', './images/chorti2.jpg', './images/alaguilac3.jpg'
];

let chortiWordImages = [
  './images/nahua1.jpg', './images/chorti2.jpg', './images/chorti3.jpg'
];

let cacaoperaWordImages = [
  './images/cacaopera1.jpg', './images/cacaopera2.jpg', './images/cacaopera3.jpg'
];

let mangueWordImages = [
  './images/nahua2.jpg', './images/xinca2.jpg', './images/mangue3.jpg'
];

let mixeWordImages = [
  './images/mangue3.jpg', './images/mixe2.jpg', './images/mixe3.jpg'
];

let lencaWordImages = [
  './images/lenca1.jpg', './images/lenca2.jpg', './images/lenca3.jpg'
];

let nahuaWord = [
  "inakayu", "kuwat", "nulenkuaj"

];

let xincaWord = [
  "tuhlu", "awa", "ura"

];

let poqomamWord = [
  "aaq", "ch’eqek", "chee'"

];

let alaguilacWord = [
  "achko", "inagas", "culut"
];

let chortiWord = [
  "chan", "chikin", "liklik"

];

let cacaoperaWord = [
  "a'mu", "ikila'", "uru"

];

let mangueWord = [
  "nyuri", "yu", "noji"

];

let mixeWord = [
  "toodyik", "choon", "mucz"

];

let lencaWord = [
  "zima", "daku", "upat"
];

let wordsBeingUsedList;
let imagesBeingUsedList;
let soundsBeingUsedList;
let submitButtonOn;
let submitButton;
let soundButton;
let wordText;
let userTextOn;
let userText;
let placeImages;
let rightWord;
let img;
let buttons= [];
let calendar;
let step = 0; // speed
let buttonPositions = [
  { x: 270, y: 400 },
  { x: 160, y: 395 },
  { x: 250, y: 248 },
  { x: 339, y: 274 },
  { x: 385, y: 203 },
  { x: 696, y: 410 },
  { x: 760, y: 490 },
  { x: 180, y: 322 },
  { x: 545, y: 515 },
];
let buttonsOn;
let imageOn;
let originalPositions;
let rightSound;

let communityNames = [
  "Nahua",
  "Xinca",
  "Poqomam",
  "Alaguilac",
  "Chorti",
  "Cacaopera",
  "Mangue",
  "Mixe",
  "Lenca",
];

let mapColors = [
  ' blue',
  "brown",
  '#425733',
  "#714423",
  "#BCE261",
  "orange",
  "#003A8C",
  "teal",
  "yellow"
];
let sizes = [
  { w: 240, h: 70 },
  { w: 80, h: 25 },
  { w: 90, h: 50 },
  { w: 80, h: 40 },
  { w: 80, h: 40 },
  { w: 80, h: 40 },
  { w: 80, h: 40 },
  { w: 80, h: 45 },
  { w: 220, h: 65 },
];

let fontSize = [
  '30px', '20px', '15px', '15px', '18PX', '14PX', '18PX', '20px', '40px'

];


let communityActions = [
  nahuaAction,
  xincaAction,
  poqomamAction,
  alaguilacAction,
  chortiAction,
  cacaoperaAction,
  mangueAction,
  mixeAction,
  lencaAction
];

let webcamOn = false; //  track if webcam is on or off
let filterTexture;

let lastWebcamTime = 0; //  store the time when webcam was turned on
let helpfulTips;
let currentIndex= 0;
let allCommunityImages = [];
let allCommunitySounds = [];
let tries=1;
function preload() {
  img = loadImage('./images/nativeMap.png');
  filterTexture = loadImage('./images/mayanPatterns.jpg'); // Load filter texture

  // Arrays to store all community sounds and images
      // all community images
      let communityImages = [
        nahuaWordImages,
        xincaWordImages,
        poqomamWordImages,
        alaguilacWordImages,
        chortiWordImages,
        cacaoperaWordImages,
        mangueWordImages,
        mixeWordImages,
        lencaWordImages
      ];
      
      let communitySounds = [
        nahuaSound,
        xincaSound,
        poqomamSound,
        alaguilacSound,
        chortiSound,
        cacaoperaSound,
        mangueSound,
        mixeSound,
        lencaSound
      ];
  for (let i = 0; i < communityImages.length; i++) {
      let imagesList = [];
      for (let j = 0; j < communityImages[i].length; j++) {
          let imgPath = communityImages[i][j];
          let loadedImg = loadImage(imgPath);
          imagesList.push(loadedImg);
                      console.log(imagesList);
      }
      allCommunityImages.push(imagesList);
  }
  for (let i = 0; i < communitySounds.length; i++) {
      let soundsList = [];
      for (let j = 0; j < communitySounds[i].length; j++) {
          let soundPath = communitySounds[i][j];
          let loadedsound = loadSound(soundPath);
          soundsList.push(loadedsound);
          console.log(soundsList);
      }
      allCommunitySounds.push(soundsList);
  }

}

function buttonPressed() {
// Loop through the list of buttons and hide each one
for (let i = 0; i < buttons.length; i++) {
  buttons[i].hide();
}
}

let backgroundColors = []; 

function setup() {
  createCanvas(1000, 800);
  frameRate(5);


  let red = color(255, 83, 123); 
  let yellow = color(255, 200, 140); 
  let blue= color(143,160,252); 
  let purple = color(172,60,134); 

  for (let i = 0; i < 1000; i++) {
    let col1 = lerpColor(red, yellow, i / 300);
    let col2 = lerpColor(purple,blue, i / 300);
    let col3 = lerpColor(blue, red, i / 300);
    backgroundColors.push(col1, col2,col3);
  }
  buttonsOn = true;
  imageOn= true;
  submitButtonOn= false;
  amountOfTries=0;
  userTextOn= false;
  for (let m = 0; m < communityNames.length; m++) {
            let buttonVar= drawButton(buttonPositions[m].x, buttonPositions[m].y, communityNames[m], sizes[m].w, sizes[m].h, mapColors[m], fontSize[m], communityActions[m]);
            buttons.push(buttonVar); 
      }
  buttonPressed();
  // Initialize the submit button
  submitButton = drawButton(450, 500, 'Submit', 70, 30, '#FFB6C1 ', '15xp', checkIfWin);
  // Initialize the submit button
  soundButton = drawButton(220, 500, 'Play Word', 50, 40, '#FFB6C1', '10xp', playSound);
  soundButton.hide(); // Hide the soundButton initially
  // Calculate the position for the userInput input box
  let submitButtonX = submitButton.position().x;
  let submitButtonY = submitButton.position().y;
  let userInputX = submitButtonX-40;
  let userInputY = submitButtonY + submitButton.height + 10; // Add some padding
  // Initialize the userInput input box
  userInput = createInput();
  userInput.position(userInputX, userInputY); // Set position directly below submitButton
  userInput.value('Type Here!')
  userInput.style('background-image', 'linear-gradient(to right, #FFB6C1 50%, #FFFF99 50%)');
  userInput.hide(); // Hide the userInput input box
  // Initialize the text box
  wordText = createInput();
  wordText.position(260, 200);
  wordText.style('font-size', '40px'); // Set font size
  wordText.style('background-image', 'url("./images/mayanPatterns.jpg")'); // Set background image
  wordText.style('background-size', 'cover'); // Ensure the background image covers the entire text box
  wordText.style('text-align', 'center'); // Center-align the text
  wordText.style('font-weight', 'bold'); // Make the text bold
  wordText.hide(); // Hide the text box initially

// Initialize the text box
helpfulTips = createInput();
helpfulTips.position(190, 600);
helpfulTips.style('font-size', '10px'); // Set font size

// Apply background gradient
// Apply background gradient with pastel colors
helpfulTips.style('background-image', 'linear-gradient(to right, #FFB6C1 50%, #FFFF99 50%)');
// Set width and height
helpfulTips.size(60, 50);
helpfulTips.style('font-size', '10px'); // Set font size to 12 pixels
helpfulTips.style('text-align', 'center'); 
helpfulTips.style('width', '40%'); 

helpfulTips.style('font-weight', 'bold'); // Make the text bold
helpfulTips.hide(); // Hide the text box initially

  // Hide the submit button
  submitButton.hide();
  


  cursor('pointer'); // Set custom cursor image

  img.resize(700, 500);

  // 
  let mainImgX = (width - img.width) / 2;
  let mainImgY = (height - img.height) / 2;

  // the main image
  image(img, mainImgX, mainImgY);


  calendar = new Calendar();
  calendar.calendarPositions();
  originalPositions = calendar.positions;

  // Initialize webcam
  webcam = createCapture(VIDEO);
  webcam.hide(); 
}



function buttonShowing() {
// Loop through the list of buttons and hide each one
for (let i = 0; i < buttons.length; i++) {
  buttons[i].show();
}
}
class Calendar {
  constructor() {
      this.images = [];
      this.imageNames = [
        './images/imix.jpg', './images/ik.jpg', './images/akbal.jpg', './images/kan.jpg', './images/chikchan.jpg', // daysigns of the Tzolk'in
        './images/kimi.jpg', './images/manik.jpg', './images/lamat.jpg', './images/muluk.jpg', './images/oc.jpg',
        './images/chuen.jpg', './images/eb.jpg', './images/ben.jpg', './images/ix.jpg', './images/men.jpg',
        './images/kib.jpg', './images/kaban.jpg', './images/etznab.jpg', './images/kawak.jpg', './images/ahua.jpg'
      ];
      this.spacing = 100;
      this.imgWidth = 100;
      this.imgHeight = 100;
      this.numRows = 5;
      this.numCols = 4;
      this.positions = [];

      // Load calendar images
      for (let i = 0; i < this.imageNames.length; i++) {
          this.images.push(loadImage(this.imageNames[i]));
      }
  }

  calendarPositions() {

      // Calculate positions for top row
      for (let i = 0; i < this.numCols; i++) {
          let x = 150 + i * (this.imgWidth + this.spacing + 20);
          let y = 0;
          this.positions.push({ x, y });
      }

      // Calculate positions for bottom row
      for (let i = 0; i < this.numCols; i++) {
          let x = 130 + i * (this.imgWidth + this.spacing + 20);
          let y = 800 - this.imgHeight; // Adjust y position for bottom row
          this.positions.push({ x, y });
      }

      // Calculate positions for left column
      for (let i = 1; i < this.numRows - 1; i++) {
          let x = 0;
          let y = i * (this.imgHeight + this.spacing);
          this.positions.push({ x, y });
      }

      // Calculate positions for right column
      for (let i = 1; i < this.numRows - 1; i++) {
          let x = 1000 - this.imgWidth; // Adjust x position for right column
          let y = i * (this.imgHeight + this.spacing);
          this.positions.push({ x, y });
      }
  }

  moveAlongBorder() {
      for (let i = 0; i < this.positions.length; i++) {
          let pos = this.positions[i];
          let moveDirection = this.calculateMoveDirection(pos);

          // Update position based on move direction
          switch (moveDirection) {
              case 'right':
                  pos.x = min(pos.x + step, width - this.imgWidth);
                  break;
              case 'down':
                  pos.y = min(pos.y + step, height - this.imgHeight);
                  break;
              case 'left':
                  pos.x = max(pos.x - step, 0);
                  break;
              case 'up':
                  pos.y = max(pos.y - step, 0);
                  break;
          }
      }
  }

  calculateMoveDirection(pos) {
      if (pos.y === 0 && pos.x < width - this.imgWidth) {
          return 'right';
      } else if (pos.x === width - this.imgWidth && pos.y < height - this.imgHeight) {
          return 'down';
      } else if (pos.y === height - this.imgHeight && pos.x > 0) {
          return 'left';
      } else if (pos.x === 0 && pos.y > 0) {
          return 'up';
      }
  }

  display() {

      for (let i = 0; i < this.positions.length; i++) {
          let imgIndex = i % this.images.length;

          image(this.images[imgIndex], this.positions[i].x, this.positions[i].y, this.imgWidth, this.imgHeight);
      }
      this.moveAlongBorder();
  }
}

function drawButton(x, y, label, sizeOfx, sizeOfy, colors, fontsize, action) {
  let button = createButton(label);
  button.position(x, y);
  button.size(sizeOfx, sizeOfy)
  button.style('background-color', colors);
  button.style('font-size', fontsize);
  button.style('border-radius', '8px'); 
  button.mousePressed(action); 
  return button
}

let colorIndex = 0;
function draw() {
 // Index to track current background color
  // Set background color based on frame count
  colorIndex = (colorIndex + 1) % backgroundColors.length;
  background(backgroundColors[colorIndex]);

  let mainImgX = (width - img.width) / 2;
  let mainImgY = (height - img.height) / 2;
  if (imageOn) {
      image(img, mainImgX, mainImgY); // Redraw the original image in the middle
  }
  if (!imageOn) { // Redraw the original image in the middle
  }
  calendar.display();
  
  // Hide buttons if not enabled
  if (!buttonsOn) {
      buttonPressed();
  }

  // Draw buttons if enabled
  if (buttonsOn) {
      buttonShowing();
  }
 if (webcamOn) {
        // Place webcam feed at each original position
        for (let i = 0; i < originalPositions.length; i++) {
            let pos = originalPositions[i];
            // Draw the webcam feed
            image(webcam, pos.x, pos.y, calendar.imgWidth, calendar.imgHeight);
            // Apply the filter texture
            tint(255, 100); // Adjust transparency as needed
            image(filterTexture, pos.x, pos.y, calendar.imgWidth, calendar.imgHeight);
            noTint(); // Reset tint
            buttonsOn= false;
            imageOn= false;
            placeImages= true;
            submitButtonOn= true;
        }
        
        // Check if 1 minute has passed since webcam was turned on
        if (millis() - lastWebcamTime > 5000) {
            webcamOn = false; // Turn off the webcam
            lastWebcamTime = 0; // Reset lastWebcamTime
            
        }
    }
  
  // Check if images need to be placed
  if (placeImages) {
      for (let i = 0; i < 3; i++) {
          let imgIndex = i;
          let positionIndex = i;
          let pos = matchImagePositions[positionIndex];
          let img = imagesBeingUsedList[i];

          // Place the image at the specified position
          image(img, pos.x, pos.y, 200, 200);
      }
      
      // Show necessary elements for input
      soundButton.show();
      submitButton.show();
      userInput.show();
      wordText.show();
      helpfulTips.show();
      helpfulTips.value("Memorize the word, submit it and see if you're right! Play the word if you need help.");
      
      // Hide the wordText after 6 seconds
      if (millis() - wordTextTime > 6000) {
          wordText.hide();
      }
  } else {
      // Hide unnecessary elements for input
      submitButton.hide();
      userInput.hide();
      soundButton.hide();
      helpfulTips.hide();
      wordText.hide();
      
      // Reset tries and currentIndex
      tries = 1;
      currentIndex = 0;
  }
}





function setImagesAndWordsList(number) {
  switch (number) {
      case 0:
          imagesBeingUsedList = allCommunityImages[0];
          wordsBeingUsedList = nahuaWord;
          soundsBeingUsedList = allCommunitySounds[0]; // Load Nahuasounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 1:
          imagesBeingUsedList = allCommunityImages[1];
          wordsBeingUsedList = xincaWord;
          soundsBeingUsedList = allCommunitySounds[1]; // Load Xinca sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 2:
          imagesBeingUsedList = allCommunityImages[2];
          wordsBeingUsedList = poqomamWord;
          soundsBeingUsedList = allCommunitySounds[2]; // Load Poqomam sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 3:
          imagesBeingUsedList = allCommunityImages[3];
          wordsBeingUsedList = alaguilacWord;
          soundsBeingUsedList = allCommunitySounds[3]; // Load Alaguilac sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 4:
          imagesBeingUsedList = allCommunityImages[4];
          wordsBeingUsedList = chortiWord;
          soundsBeingUsedList = allCommunitySounds[4]; // Load Chorti sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 5:
          imagesBeingUsedList = allCommunityImages[5];
          wordsBeingUsedList = cacaoperaWord;
          soundsBeingUsedList = allCommunitySounds[5]; // Load Cacaopera sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 6:
          imagesBeingUsedList = allCommunityImages[6];
          wordsBeingUsedList = mangueWord;
          soundsBeingUsedList = allCommunitySounds[6]; // Load Mangue sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 7:
          imagesBeingUsedList = allCommunityImages[7];
          wordsBeingUsedList = mixeWord;
          soundsBeingUsedList = allCommunitySounds[7]; // Load Mixe sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      case 8:
          imagesBeingUsedList = allCommunityImages[8];
          wordsBeingUsedList = lencaWord;
          soundsBeingUsedList = allCommunitySounds[8]; // Load Lenca sounds
          rightWord = wordsBeingUsedList[0];
          wordText.value(rightWord);
          rightSound = soundsBeingUsedList[0]; // Assign the corresponding sound
          break;
      default:
          console.log("Invalid number input.");
          return;
  }
}


function checkIfWin(){


  // Compare the user input to the right word
  if (userInput.value() === rightWord) {
      // If the input is correct, add 0.5 to the step
      step += 15;
      helpfulTips.value("Great job! You got it right! Moving on to the next word.");
  } else {
      // If the input is incorrect and step is greater than 0, subtract 0.5 from the step
      if (step > 0) {
          step -= 1;
      }
      if (step > 10) {
        step -= 10;
    }
      helpfulTips.value("Oops! That's wrong. Let's try the next one!");
  }
      userInput.value("Type Here!");
      currentIndex++;
      rightWord = wordsBeingUsedList[currentIndex];
      rightSound = soundsBeingUsedList[currentIndex];
  // Check if rightWord is undefined
  if (rightWord === undefined) {
      // Update flags accordingly
      console.log(rightWord);
      buttonsOn = true;
      placeImages = false;
      submitButtonOn = false;
      imageOn = true;
      wordText.hide();
  } else {
      // Increment currentIndex and update rightWord and rightSound
      
      // Show the wordText with the new rightWord
      wordText.value(rightWord);
      wordText.show(); // Show the wordText
      // Hide the wordText after 10 seconds
      wordTextTime = millis();
  }
}


function nahuaAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(0);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function xincaAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(1);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function poqomamAction() {

  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(2);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function alaguilacAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(3);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function chortiAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(4);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function cacaoperaAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(5);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function mangueAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(6);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function mixeAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(7);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}

function lencaAction() {
  placeImages= true;
  imageOn= false;
  buttonsOn= false;
  setImagesAndWordsList(8);
  webcamOn = true;
  lastWebcamTime = millis();
  wordTextTime= millis(); 
}


function playSound() {
let sound = rightSound;
sound.play();
}