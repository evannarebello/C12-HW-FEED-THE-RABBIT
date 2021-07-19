var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
var orangeLeaf,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png")
}

function setup(){
  createCanvas(400,400);
  
  // creating background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  }


function draw() {
  background(255);

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  
  
  createApple()
  createLeaf()
  createOrangeLeaf()

  drawSprites();
}

function createApple(){
  if(frameCount%60===0){
    //creating apple
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.velocityY = 4;
    apple.scale = 0.08;
    apple.x = Math.round(random(10,150));
    apple.depth = rabbit.depth;
    rabbit.depth+=1;

    
  }
}

function createLeaf(){

  if(frameCount%50===0){
    //creating leaf
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.velocityY = 2;
    leaf.scale = 0.08;
    leaf.x = Math.round(random(200,300));
    leaf.depth = rabbit.depth;
    rabbit.depth+=1;
  }
}

function createOrangeLeaf(){

  if(frameCount%80===0){
    //creating orangeLeaf
    orangeLeaf = createSprite(random(50,350),40,10,10);
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.velocityY = 3
    orangeLeaf.scale = 0.08;
    orangeLeaf.x = Math.round(random(300,400));
    orangeLeaf.depth = rabbit.depth;
    rabbit.depth+=1;
  }
}