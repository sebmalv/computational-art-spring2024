//make a class for lines made of moving circles
//takes in which direction


let thing
let rightdown;
// p5 calls this function when the webpage is loaded. Think of this
// function as the place you initialize the sketch.
function setup() {
  // This p5 function will add a canvas to the webpage
  createCanvas(400, 300);

  // https://p5js.org/reference/#/p5/colorMode
  colorMode(HSB);

    // This will instantiate an instance of the Thing class defined below
  thing = new circleLine(46,36,"h",15,"white",20);
  leftdown= new circleLine(46,36,"v",12,"black",20);
  rightdown= new circleLine(280,36,"v",12,"red",20);
  acrossdown= new circleLine(46,210,"h",15,"yellow",20);
  l1= new circleLine(65,210,"v",4,"black",20);
  l2= new circleLine(65,270,"h",4,"black",20);
  l3= new circleLine(125,210,"v",4,"black",20);
  l4= new circleLine(125,270,"h",6,"black",20);
  l5= new circleLine(210,210,"v",4,"black",20);
  l6= new circleLine(210,270,"h",4,"black",20);
  l7= new circleLine(265,210,"v",4,"black",20);
  l8= new circleLine(170,210,"v",3,"green",8);
  l9= new circleLine(135,250,"h",4,"green",8);
  l10= new circleLine(80,160,"h",1,"red",80);
  l11= new circleLine(75,170,"h",1,"yellow",40);
  l12= new circleLine(200,90,"h",5,"yellow",20);
  l13= new circleLine(200,120,"h",5,"orange",20);
  l14= new circleLine(200,150,"h",5,"yellow",20);
  l15 = new circleLine(5,6,"h",50,"yellow",30);
  l16 = new circleLine(5,300,"h",50,"white",30);
  l17 = new circleLine(5,6,"v",50,"red",30);
  l18 = new circleLine(390,6,"v",50,"black",30);
  l19 = new circleLine(80,250,"h",2,"blue",15);
  l20 = new circleLine(220,250,"h",2,"purple",15);
}

function draw() {
  // put drawing code here
  background(0, 0, 100);
  thing.lineCreator();
  thing.update();
  leftdown.lineCreator();
  leftdown.update();
  rightdown.lineCreator();
  rightdown.update();
  acrossdown.lineCreator();
  acrossdown.update();
  l1.lineCreator();
  l1.update();
  l2.lineCreator();
  l2.update();
  l3.lineCreator();
  l3.update();
  l4.lineCreator();
  l4.update();
  l5.lineCreator();
  l5.update();
  l6.lineCreator();
  l6.update();
  l7.lineCreator();
  l7.update();
  l8.lineCreator();
  l8.update();
  l9.lineCreator();
  l9.update();
  l10.lineCreator();
  l10.update();
  l11.lineCreator();
  l11.update();
  l12.lineCreator();
  l12.update();
  l13.lineCreator();
  l13.update();
  l14.lineCreator();
  l14.update();
  l15.lineCreator();
  l15.update();
  l16.lineCreator();
  l16.update();
  l17.lineCreator();
  l17.update();
  l18.lineCreator();
  l18.update();
  l19.lineCreator();
  l19.update();
  l20.lineCreator();
  l20.update();
}

///
class circleLine {
  constructor(x, y,side,length,color,size) {
    //x is the drawings horizontal start
    //y is the drawing vertical start
    //side is whether it is horizontal or vertical
    // To define a variable, we need to make use of the 'this' keyword. 
    // 'this' refers to the instantiated object. 
    this.linelength= length;
    this.side= side;
    this.size= size;
    this.hue = 0;
    this.ballAmoount= 300;
    this.balls=[];
    this.xposition = x;
    this.yposition = y;
    this.color= color;
    this.velocity = createVector(random(-1, 1), random(-1, 1));
  }

  lineCreator(){
    let horl;
    let importantPosition;
    horl= this.side;
    if(horl=="h"){
      importantPosition= this.xposition;
      for (let i = 0; i < this.linelength; i++) {
        this.balls[i]= new ball(importantPosition+i*15+10,this.yposition,this.color,this.size); 
        print(this.balls[i].position.x);
      }
    }
    if(horl=="v"){
      importantPosition= this.yposition;
      for (let i = 0; i < this.linelength; i++) {
        this.balls[i]= new ball(this.xposition,importantPosition+i*15+10,this.color,this.size); 
      }
    }   
  }
  // To define a function inside of a class in javascript, you just
  // write the name you want to give it, write some paraentheses, and then
  // write the body of the function.
  update() {
    for (let i = 0; i < this.linelength; i++) {
      this.balls[i].update();
    }
  }
}

class ball {
  constructor(x, y,color,size) {
    // To define a variable, we need to make use of the 'this' keyword. 
    // 'this' refers to the instantiated object. 
    this.hue = 0;
    this.size= size;
    this.color= color;
    this.position = createVector(x, y);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
  }

  // To define a function inside of a class in javascript, you just
  // write the name you want to give it, write some paraentheses, and then
  // write the body of the function.
  update() {
    this.position.add(random(-2, 2));
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -2;
    }
  
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -2;
    }
    fill(this.color);
    circle(this.position.x, this.position.y, this.size);
  }
}