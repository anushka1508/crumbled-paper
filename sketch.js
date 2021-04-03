
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundO,paperBall;	
var world;

function preload(){
	dustbinObj = loadImage("dustbingreen.png");
	paperBall = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperBall=new paper(200,450,70);
	groundO=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	

	
	var render = Render.create ({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:700,
			wireframes:false
		}
	});
  Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperBall.display();
  groundO.display();
  dustbinObj.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position ,{x:200,y:-145});
	}
}

