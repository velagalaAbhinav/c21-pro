 var sun;
 var mercury;
 var venus; 
 var earth;
 var mars;
 var jupiter;
 var saturn;
 var uranus;
 var neptune;
 var sunimg;
 var mercuryimg;
 var venusimg;
var earthimg;
var marsimg;
var jupiterimg;
var neptuneimg

function preload(){
 sunimg = loadImage("sun.jpeg");
 mercuryimg = loadImage("mercury.jpg");
 venusimg = loadImage("venus.jpg");
 earthimg = loadImage("earth.jpeg");
 marsimg = loadImage("mars.jpeg");
 jupiterimg = loadImage("jupiter.jpeg");
uranusimg = loadImage("uranus.png");
neptuneimg = loadImage("neptune.jpeg");

}

 function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);
  var sun = createSprite(800,400,100,100);
  sun.addImage("sunimage",sunimg);
  var mercury = createSprite(900,400,30,30);
  mercury.addImage("mercuryimage",mercuryimg);
  var venus = createSprite(650,400,40,40);
  venus.addImage("venusimage",venusimg);
  var earth = createSprite(700,250,50,50);
  earth.addImage("venusimage",earthimg)
  var mars = createSprite(700,650,60,60);
  mars.addImage("marsimage",marsimg);
  var jupiter = createSprite(1100,400,80,80);
  jupiter.addImage("jupiterimage",jupiterimg);
  var uranus = createSprite(250,400,70,70);
  uranus.addImage("uranus",uranusimg);
  var neptune = createSprite(700,100,60,60);
  neptune.addImage("neptuneimage",neptuneimg);
  mercury.scale = 0.1;
  venus.scale = 0.1;
  earth.scale = 0.2;
  mars.scale = 0.3;
  jupiter.scale = 0.7;
  uranus.scale = 0.4;
  neptune.scale = 0.5
}


function draw() {
  background(255,255,255);  
  if(World.frameCount % 50 === 0){
    sun.scale = 1;

  }
  drawSprites();
}