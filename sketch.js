
var dog;  
var database;
var foodS;
var  foodStock;
 var img1,img2,img3,img4,img5,img6;
 var bowl,bowl1;
function preload()
{
img1 = loadImage("1.png");
img2 = loadImage("11.png");
img3 = loadImage("111.png");

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(400,330);
  dog.addImage(img1);
  dog.scale = 0.3;
  bowl= createSprite(230,400);
 bowl.addImage(img3);
 bowl.scale = 0.1;
 bowl1= createSprite(150,400);
 bowl1.addImage(img3);
 bowl1.scale = 0.1;
 database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readSt,displayerror);
}

function draw() {  
  background("turquoise")
if(keyWentDown(UP_ARROW))
{
  writeSt(foodS);
  dog.addImage(img2)
}
  drawSprites();
  textFont("noteworthy");
  fill(0);
  stroke("black");
  textSize(23);
  text("DEXTER",350,200)
  text("↧",370,235)
  text("food",210,360)
  text("water",130,360)
 
  fill("aquamarine");
  stroke("blue");
  strokeWeight(5);
  textSize(24);
 
  text("Remaining Water and Food Left = " + foodS,10,480);
  text("NOTE : Press UP_ARROW Key To Feed DEXTER :)", 5,50 );
  
}
function displayerror()
{
  console.log("error alert!!")
}

function  readSt(data)
{
foodS = data.val();
}
function writeSt(x)
{
   if(x<=0)
   {
     x = 0
   }
   else
   {
     x = x-1
   }
  database.ref("/").update
  (
    {
      food:x
    }
  )
}