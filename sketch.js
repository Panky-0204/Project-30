const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var slingshot, ground;
var gameState = "onSling";

var engine,world;


function setup() {
  var canvas = createCanvas(800,400); 

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  //level one
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  //level two
  block6 = new Block(360,235,30,40);
  block7 = new Block(390,235,30,40);
  block8 = new Block(420,235,30,40);
  //level three or top
  block9 = new Block(390,155,30,40);

  ground = new ground();
  slingshot = new Slingshot(this.polygon,{x:100,y:200});
  imageMode(CENTER);
  image(polygon_img, polygon.position,x, polygon.position.y, 40, 40);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  ground.display();

  drawSprites();
}

function mouseDragged(){
  if(gameState === "onSling"){
    Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}