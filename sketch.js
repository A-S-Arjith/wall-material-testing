var wall;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet = createSprite(50, 200, 30, 10);
  bullet.velocityX = speed;
  bullet.shapeColor=color("white")
  thickness=random(22,83)
  wall = createSprite(1400, 200, thickness, height/2);
  wall.shapeColor=color("grey")
}

function draw() {
  background("black");  
  if(wall.x-bullet.x < (wall.width+bullet.width)/2){
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if (damage>10){
    wall.shapeColor=color("red")
  }
  if (damage<10){
    wall.shapeColor=color("green")
  }
  }
  drawSprites();
}