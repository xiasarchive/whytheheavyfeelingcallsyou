
let fCount = 1;
//let fIndex = f + fCount;
let f1, f2, f3, f4, f5, f6, f7;

var newwin = true;

//var bgAudio;

function preload()
{
    f1 = loadImage("nov1.png");
    f2 = loadImage("nov2.png");
    f3 = loadImage("nov3.png");
    f4 = loadImage("nov4.png");
    f5 = loadImage("nov5.png");
    f6 = loadImage("nov6.png");
    f7 = loadImage("nov7.png"); 

    //soundFormats('mp3', 'wav');
    //bgAudio = loadSound('cFinal-bgAudio.mp3');
}


function setup(){
    createCanvas(1280, 720);
    //background(255);
    //image(f1, 0, 0, width, height);
    
    //bgAudio.play();
    //bgAudio.loop();
}

function draw(){

    if (fCount === 1)
        {
            image(f1, 0, 0, width, height);    
        }
    
    else if (fCount === 2)
            {
                image(f2, 0, 0, width, height);    
            }
    
    else if (fCount === 3)
            {
                image(f3, 0, 0, width, height);    
            }
    
    else if (fCount === 4)
            {
                image(f4, 0, 0, width, height);    
            }
    
    else if (fCount === 5)
            {
                image(f5, 0, 0, width, height);    
            }
    
    else if (fCount === 6)
            {
                image(f6, 0, 0, width, height);    
            }
    else if (fCount === 7)
            {
                image(f7, 0, 0, width, height);    
            }
    else if ((fCount === 8) && (newwin == true))
        {
            (window.open('https://xiasarchive.github.io/whytheheavyfeelingcallsyou/'));
            newwin = false;
        }
}

function mousePressed(){
    fCount = fCount + 1;
 

}
