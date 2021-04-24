var tom , tom_sitting , tom_walking , tom_lean , tom_standing;
var jerry , jerry_happy , jerry_stand , jerry_tease , jerry_teasing;
var bg , bgImg;

function preload() {
    //load the images here
    tom_sitting = loadImage("cat1.png");
    tom_walking = loadImage("cat2.png");
    tom_lean = loadImage("cat3.png");
    tom_standing = loadImage("cat4.png");

    jerry_happy = loadImage("mouse1.png");
    jerry_stand = loadImage("mouse2.png");
    jerry_tease = loadImage("mouse3.png");
    jerry_teasing = loadImage("mouse4.png");

    bgImg = loadImage("garden.png");

}

function setup(){
     var canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
     
    tom = createSprite(800,600,50,80);
    tom.addAnimation("tom_sitting" , tom_sitting);
    tom.scale = 0.15;

    jerry = createSprite(800,200,80,50);
    jerry.addAnimation("jerry_stand" , jerry_stand);
    tom.scale = 0.15;


   // create background
    bg = createSprite(800,400);
    bg.addImage("bgImg" , bgImg);
}

function draw() {

    background(bg);
    
    //Write condition here to evalute if tom and jerry collide
  if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.addAnimation("tom_standing", tom_standing);
    tom.changeAnimation("tom_standing");
    tom.velocityX = 0;
    jerry.addAnimation("jerry_happy", jerry_happy);
    jerry.changeAnimation("jerry_happy");
  }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
if(keyCode == LEFT_ARROW ){
   jerry.addAnimation("jerry_tease", jerry_tease);
   jerry.changeAnimation("jerry_tease");
   jerry.frameDelay = 25;
}

if(keyCode == RIGHT_ARROW){
    tom.addAnimation("tom_walking" , tom_walking);
    tom.changeAnimation("tom_walking" );
    tom.velocityX = -4;
    
}
}
