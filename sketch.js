const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1;
var base2;
var player1,player2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

  base1 = new Base1(100,300,200,200);
  base2 = new Base2(800,300,200,200);
  player1 = new Player(100,130,100,200);
  player2 = new Player(800,130,100,200);



 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   base1.display();
   base2.display();

   //display Player and computerplayer

   player1.display();
   player2.display();

}
