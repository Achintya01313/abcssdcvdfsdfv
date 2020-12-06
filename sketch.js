//Create variables here

var dog, happyDog,database, foodStock ;
var dogImage,happyDogImage;

function preload()
{
  dogImage = loadImage(a,"images/dogimg.png");
  happyDogImage = loadImage(b,"images/dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
 
} 

function draw() {  
  
  //add styles
  dog = createSprite(202,220,13,13);
  dog.addImage(dogImage)  ;

  if(keyWentDown("UP_ARROW")){
    foodStock-=foodStock;
    dog.addImage(happyDogImage);
    drawSprites();
  }
 }
