const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
  var canva = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
var ground_options = {
  isStatic:true
}
ground = Bodies.rectangle(width/2,height-10,width,20,ground_options);
World.add(world,ground);

var ball_options={
restitution: 2.0

}
ball=Bodies.circle(400,100,50,ball_options);
World.add(world,ball);

}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  

}





