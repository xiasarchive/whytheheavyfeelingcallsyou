let bg, handO, handC, Title, Light, titlePress, backgroundGif, CD;
var isTheMousePressed = false;
var titleClick = false;
var playButton = false;
var cd = false;
var a = 0;
var titleClickB = false;
var cdopen = false;
var canPress = true;

function setup() {
  
  createCanvas(700, 700);
  bg = loadImage("Assets/wee.png")
  handO = loadImage("Assets/HandOpen.png")
  handC = loadImage("Assets/HandClose.png")
  Title = loadImage("Assets/GroundsTitle.png");
  titlePress = loadImage("Assets/TitlePressed.png");
  backgroundGif = loadImage("Assets/SpiralGif.gif");
  CD = loadImage("Assets/CD.png");


  noCursor()
  ellipseMode(CENTER);
  noStroke();
  
  
}

function draw() {
  
  image(bg, 0, 0, 700, 700);

  if (a < 1) {
  startup();
  }

  if (a > 0) {
    search();
  }

  if (isTheMousePressed == true ) {
    image(handC, mouseX, mouseY, 100, 100);
  } else {
  image(handO, mouseX, mouseY, 100, 100);
  }
}

function startup() {
  image(backgroundGif, 0, 0, 700, 700);
  if ((mouseX > 200 && mouseX < 290) && (mouseY > 60 && mouseY < 110)) {
  image(titlePress,0,0,700,700);
  backgroundGif.pause();
  titleClickB = true;
  } else {
    image(Title, 0, 0, 700, 700);
  }
}

function search() {
if (isTheMousePressed == true){
  erase();
  fill(0,255,255);
  ellipse(mouseX,mouseY,80,80);
  noErase();
  
}

if (((mouseX > 510 && mouseX < 580) && (mouseY > 475 && mouseY < 550)) && (isTheMousePressed == true)) {
  endScreen();
  cdopen = true;
}
if (cdopen == true) {
  endScreen();
}
}

function mousePressed() {
  isTheMousePressed = true;
  if (titleClickB == true){
  a++;
  }
}

function mouseReleased() {
  isTheMousePressed = false;
}

function endScreen(){
  image(CD, 0, 0, 700, 700);
  if ((isTheMousePressed == false) && (canPress == true)) {
    (window.open('https://xiasarchive.github.io/whytheheavyfeelingcallsyou/'))
    canPress = false;
  }
}