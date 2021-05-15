//Namespacing

const Engine =  Matter.Engine;
const World =  Matter.World;
const Bodies =  Matter.Bodies;


var engine, world;

var ground;

var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



  var option ={
    isStatic:true
  } 


  ground = Bodies.rectangle(400,380,800,15,option);

  console.log(ground);

  World.add(world,ground);

  var option1  ={
    restitution:0.8
  } 







  ball=Bodies.circle(200,200,50,option1)
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 800,15);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50)





}