var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var cloud,cloud2,cloud3,cloud4,cloudImg
function preload(){
bgImg = loadImage("bg.png");
cloudImg = loadImage("cloud.png");

balloonImg = loadAnimation("balloon1.png","balloon2.png","balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

cloud = createSprite(250,80,50,50);
cloud.addImage(cloudImg);
cloud.scale = 0.1;
cloud.velocityX = -0.6;

cloud2 = createSprite(50,60,50,50);
cloud2.addImage(cloudImg);
cloud2.scale = 0.1;
cloud2.velocityX = -0.6;

cloud3 = createSprite(150,120,50,50);
cloud3.addImage(cloudImg);
cloud3.scale = 0.1;
cloud3.velocityX = -0.6;

cloud4 = createSprite(350,100,50,50);
cloud4.addImage(cloudImg);
cloud4.scale = 0.1;
cloud4.velocityX = -0.6;




}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
           if(keyDown("LEFT_ARROW")){
            balloon.velocityX = -6;
           }
           if(keyDown("RIGHT_ARROW")){
            balloon.velocityX = 6;
           }

        drawSprites();

        
}