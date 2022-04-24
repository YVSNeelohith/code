
var engine,world1,ground, groundOptions,ball,ballOptions,box1,box2,log1

function setup() {
  createCanvas(1000,600);
  engine = Matter.Engine.create()
  world1 = engine.world
  
 groundOptions = {
   isStatic:true
 }

  ground = Matter.Bodies.rectangle(500,580,1000,40,groundOptions)
  Matter.World.add(world1,ground)
 box1 = new Box(500,400,70,70)
 box2 = new Box(800,400,70,70)
 log1 = new  Log(650,300,400)
}

 

function draw() {
  background("black");  
  Matter.Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,40)
  box1.displayBox()
  box2.displayBox()
  log1.displaylog()
}