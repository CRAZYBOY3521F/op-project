
var wall, thickness;
var bullet,speed,weight

function setup() {
  createCanavas(1600,400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)





  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColour=colour(230,230,230)
  //wall.shapeColour=(80,80,80);
}




function draw() {
  background(0);
  //bullet.sprite.collided(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {

    bullet.velocityX=0;
    var damage=0.5* weight * speed* speed/(thickness *thickness *thickness)


    if(damage>10)
    {

      wall.shapeColour=colour("red");


    }





    if(damage<10)
    {

      wall.shapeColour=colour("blue");

    }



}

drawSprites();

}



function hasCollided(1bullet, wall) 
{

    bulletRightEdge-1bullet.x *1bullet.width;
    wallLeftEdge=1wall.x;
    if (bulletRightEdge>*wallLeftEdge)
    {

      return true

    }
        return false;
        
  }
