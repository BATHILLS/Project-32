const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var turn = 0;

var gamestate = "play";

var ground1, ground2, ground3, sprite;
var divisionHeight = 300;
var score=0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);
  ground2 = new Ground(width, height/2, 20, height);
  ground3 = new Ground(0/width, height/2, 20, height);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 50; i <= width-30; i=i+50) {
	  plinkos.push(new Plinko(i, 100));
  }

  for (var i = 25; i <=width-10; i=i+50) {
	  plinkos.push(new Plinko(i, 150));
  }

  for (var i = 50; i <= width-30; i=i+50) {
    plinkos.push(new Plinko(i, 200));
  }

  for (var i = 25; i <=width-10; i=i+50) {
    plinkos.push(new Plinko(i, 250));
  }

  for (var i = 50; i <= width-30; i=i+50) {
    plinkos.push(new Plinko(i, 300));
  }

  for (var i = 25; i <=width-10; i=i+50) {
    plinkos.push(new Plinko(i, 350));
  }

  for (var i = 50; i <= width-30; i=i+50) {
    plinkos.push(new Plinko(i, 400));
  }

  for (var i = 25; i <=width-10; i=i+50) {
    plinkos.push(new Plinko(i, 450));
  }

}

function draw() {
  background(0);
  textSize(20);
  fill(28, 167, 115);
  text ("Turns : " + turn, width - 120, 30);
  text("Score : " + score,20,30);
  fill(255, 255, 0);
  rect(400, 500, width, 10);

  
  fill("yellow");
  //text("Score :" + score , 300,420);
  text("300",750,720);
  text("500",30,720);
  text("300",670,720);
  text("200",580,720);
  text("500",100,720);
  text("200",190,720);
  text("200",260,720);
  text("200",500,720);
  text("100",350,720);
  text("100",410,720);

  push();
  stroke("yellow");
  strokeWeight(5);
  //line(0,400,800,400);
  pop();
  

  if(turn===5)
  {

    gamestate="end";
  }

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();     
  }
    
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  //  particles[j].points();
  }

  if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>700)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                 // if ( turn>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                   // if ( turn>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                  // if ( turn>= 5)  gameState ="end";

              }      
              
        }
    }
  
  
  if (gamestate === "end") {
    textSize(60);
    fill(255);
    text("Game Over", 250, 250);
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}


function mousePressed() {
  if(gamestate === "play") {
    particles.push(new Particle(mouseX, 10));
    turn++;
  }
}