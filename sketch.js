var cat;
var mouse;
var bg;

var bgImg;
var catImg1;
var catImg2
var mouseImg1;
var mouseImg2;

var catRunning;
var mouseTeasing;




function preload() {
    //load the images here

    bgImg= loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(870,600);
    cat.addAnimation("catsleeping",catImg1);
    cat.scale=0.2;
    
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.15;

    
}

function draw() {



    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
     cat.velocityX=0;
     cat.addAnimation("catLastImg",catImg3);
     cat.x=300;
     cat.scale=0.2;
     cat.changeAnimation("catLastImg");
     mouse.addAnimation("mouseLastImg",mouseImg3);
     mouse.scale=0.15;
     mouse.changeAnimation("mouseLastImg");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW) {

        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
        
    }

    // if (keyCode === RIGHT_ARROW) {
    //     mouse.addAnimation("mouseTeasing",mouseImg2);
    //     mouse.chaneAnimation("mouseTeasing");
    //     mouse.frameDelay = 25;
    // }


}
