var stype = false;
var atype = false;
var vtype = false;
var etype = false;
var utype = false;
var ztype = false;
var xtype = false;
var pressenter = true;
var enter = false;

let open = 0;

let img1, img2, img3, img4, img5;
let movie1, movie2, movie3;



function setup() {
  createCanvas(700, 700);
  img1 = loadImage("data/image1.jpg");
  img2 = loadImage("data/image2.jpg");
  img3 = loadImage("data/image4.jpg");
  img4 = loadImage("data/image6.jpg");
  img5 = loadImage("data/image7.jpg");
  movie1 = createVideo("data/image3_1.mp4");
  movie2 = createVideo("data/image5.mp4");
  movie3 = createVideo("data/image8.mp4");

  

}


function draw(){

  if (pressenter == true) {
  image(img1, 0, 0, 700, 700);
  }
  if (enter == true) {
    pressenter = false;
    background(255);
    image(img2, 0, 0, 700, 700);
  }
  if (stype == true){
    background(255);
    image(movie1, 0, 0, 700, 700);
    movie1.play();
}
if (atype == true){
  movie1.stop();
  background(255);
  image(img3, 0, 0, 700, 700);
}
if (vtype == true){
  background(255);
  image(movie2, 0, 0, 700, 700);
  movie2.play();
}
if (etype == true){
  movie2.stop();
  background(255);
  image(img4, 0, 0, 700, 700);
}
if (utype == true){
  background(255);
  image(img5, 0, 0, 700, 700);
}
if (ztype == true){
  background(255);
  image(movie3, 0, 0, 700, 700);
  movie3.play();
}
if (open === 1) {
  
  open = open + 1;
  movie3.stop();
  (window.open('https://xiasarchive.github.io/whytheheavyfeelingcallsyou/'));
  
}
}

function keyPressed(){
  if ((keyCode === ENTER) || (keyCode === RETURN)){
    enter = true;
}
if ((key == 's') || (key == 'S')){
  stype= true; 
}
if ((key == 'a') || (key =='A')){
  atype= true;
}
if ((key == 'v') || (key == 'V')){
  vtype= true;
}
if ((key =='e') || (key == 'E')){
  etype= true;
}
if ((key == 'u') || (key == 'U')){
  utype= true;
}
if ((key == 'z') || (key == 'Z')){
  ztype= true;
}

if ((key == 'x') || (key == 'X')){
  open = open + 1;
}
}
