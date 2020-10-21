var fixedRect, movingRect,o1,o2;
var edges







function setup() {
  createCanvas(800,800);
  edges = createEdgeSprites();
  fixedRect = createSprite(100, 400, 50, 50);
  movingRect = createSprite(700,400,50,50);
  o1 = createSprite(400,100,50,50)
  o2 = createSprite(400,700,50,50)
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
  o1.shapeColor = "green"
  o2.shapeColor = "magenta"
  movingRect.velocityX = -3
  fixedRect.velocityX = 3
  o1.velocityY = 4
  o2.velocityY = -4
}

function draw() {
  background(0);



  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "crimson";
  }

  else{
    fixedRect.shapeColor = "aqua";
    movingRect.shapeColor = "blue";
  }


  if(isTouching(o1,o2)){
    o1.velocityY+=3
    o2.velocityY+=(-3) 
  }

  bounceOff(fixedRect,movingRect);
  bounceOff(o1,o2)

  

  
  

  drawSprites();
}


