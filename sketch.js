

var car,wall;


var speed, weight; 


function setup() 
{
  createCanvas(1600, 400);


	speed=Math.round(random(55,90));
	weight=Math.round(random(400,1500));


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor="white";


  
  	wall=createSprite(1000,200, 60,200);
  	wall.shapeColor="white";
}


function draw() 
{
  background(0);

  console.log(speed);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=(0.5 * weight * speed* speed)/22500;
	if(deformation>180)
	{
		//car.shapeColor=color(255,0,0);//RED
		car.shapeColor="red";
	}

	if(deformation<180 && deformation>100)
	{
		//car.shapeColor=color(230,230,0);//YELLOW
		car.shapeColor="yellow";
	}

	if(deformation<100)
	{
		//car.shapeColor=color(0,255,0);//GREEN
		car.shapeColor="green";
	}
  }  
  
  drawSprites();
 
}


