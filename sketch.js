var fixedRect , movingRect

function setup() {
  createCanvas(1200,1200);
  fixedRect = createSprite(600,300,50,80);
  fixedRect.shapeColor = "yellow";

  movingRect = createSprite(120,140,80,50);
  movingRect.shapeColor = "orange";
}

function draw() {
  background("black"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  console.log(movingRect.x - fixedRect.x);

// when one sprite touches another one then :- 
// if it is touching from the left or right side, distance between their x positions is less than equal to addition of half of their widths
// {considering you keep the right rectangles x position first, so that you don't get a negative number when you subtact them} 
// if it is touching from the top or bottom side, distance between their y positions is less than equal to additition of half of their heights 
// {considering you keep the bottom rectangles y position first, so that you don't get a negative number when you subtact them} 
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "teal";
  }
  else{
    fixedRect.shapeColor = "yellow";
  }


  drawSprites();
}