var ball;
var groundObj;
var leftSide;
var rightSide;

let engine;
let world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 480);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	fill(200);
	groundObj = new Ground(width/2,480,width,40);
	leftSide = new Ground(610,400,20,120);
	rightSide = new Ground(710,240,40,440);
	topSide = new Ground(width/2,-10,width,60);
	boundarySide = new Ground(10,240,60,440);

	ball = Bodies.circle(100,30,20);
	World.add(world,ball);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  

	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  background(0);

text("I had some difficulty with the ball, it goes way TOO crazy!",50,40);

  groundObj.show();
  leftSide.show();
  rightSide.show();
  topSide.show();
  boundarySide.show();

ellipse(ball.position.x,ball.position.y,20);

keyPressed();

Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0001,y:-0.002});

	}
}



