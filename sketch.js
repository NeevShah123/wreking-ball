const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ball,rope,box1,box2;



function setup() {
  createCanvas(3000,800);
engine = Engine.create();
world = engine.world;
ground = new Ground (600,600,1200,20);
ball = new Ball (200,200,80,80);
rope = new Rope (ball.body,{x:500,y:50});
box1 = new Box (900,100,70,70);
//box1 - box6 = x = 900
//box 7 - box12 = x = 800
//remaining boxex = x = 700





  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
Engine.update (engine);
ground.display();

  drawSprites();
}
//mouse dragged