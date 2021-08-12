const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var H_button,V_button

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  H_button = createImg("right.png")
  H_button.position(220,50)
  H_button.size(50,50)
  H_button.mouseClicked(H_force)
  V_button = createImg("up.png")
  V_button.position(30,50)
  V_button.size(50,50)
  V_button.mouseClicked(V_force)


  ground =new Ground(200,380,400,40);
  right = new Ground(380,200,40,400);
  left = new Ground(20,200,40,400);
  top_wall = new Ground(200,20,400,40);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options = {
    restitution:0.8
  }
  ball = Bodies.circle(200,100,30,ball_options);
  World.add(world,ball)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  fill ("green")
  ellipse(ball.position.x,ball.position.y,30,30);
}
function H_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.25,y:0})
}
function V_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
