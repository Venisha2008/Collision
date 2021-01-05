var a, b;


function setup() {  
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(300,100,60,60);
  a.shapeColor = "blue";
  b.shapeColor = "blue";
  a.velocityY = 5;
  b.velocityY = -5;
  
}

function draw() {
  background(255,255,255);  
  

  console.log(a.x - b.x); 
  if(a.x - b.x<a.width/2 + b.width/2 && b.x-a.x<a.width/2 + b.width/2 ) {
  a.velocityX = a.velocityX * (-1);
  b.velocityX = b.velocityX * (-1);
  }

  if (a.y-b.y<a.height/2 + b.height/2 && b.y-a.y<a.height/2 + b.height/2) {
    a.velocityY = a.velocityY * (-1);
    b.velocityY = b.velocityY * (-1);
  }

  drawSprites();
}