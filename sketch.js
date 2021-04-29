//Create variables here
var dog, happyDog,sadDog, database, foodS, foodStock;
var database;

function preload()
{
	//load images here

  happyDog = loadImage("images/dogImg1.png");
  sadDog = loadImage("images/dogImg.png");

}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
 
 
  dog = createSprite(250,250, 10,10);
  dog.addImage(sadDog);
  dog.scale=0.2

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}


  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,400);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",150,10,290,20);


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

