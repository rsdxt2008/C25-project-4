
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 550);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin (770, 490, 160, 160);
	
	dustbin2 = new Dustbin (860, 490, 20, 80);
	
	dustbin3 = new Dustbin (680, 490, 20, 80);
	
	paperObject= new Paper (120, 520,19);
	
	ground = new Dustbin(500, 540, 1000, 10);
	

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  dustbin1.display();
ground.display();
paperObject.display();

  
  
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-50});

    }

}

