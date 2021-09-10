
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var radius=70;

function preload(){
    
	trashimg= loadImage("paper.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

 
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
 
	var ball_options={ isStatic:false, restitution:0.3, friction: 0, density:1.2 }
	 ball = Bodies.circle(310,100,radius/2.6,ball_options); World.add(world,ball);

	Engine.run(engine);
      
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
   

imageMode(CENTER)

 image(trashimg,ball.position.x,ball.position.y,radius,radius);
image(dustbinimg,1185,570,200,200);
}

