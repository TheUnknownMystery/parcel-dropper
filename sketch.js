var ground,ball;
const Engine=Matter.Engine;
const World=Matter.World
const body=Matter.Bodies

var ground,ball,engine,world;

function setup(){
createCanvas(400,400);
engine=Engine.create();

world=engine.World;
ground=createSprite(100,362,600,20);

ball_body=body.rectangle(ball.position.x,ball.position.y,20,20);
World.add(world,ball_1);

Engine.add(engine);

}

function draw(){
background(220);
rect(ball_body.position.x,ball_body.position.y,20,20);
drawSprites();






}