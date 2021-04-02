const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball1 = new Rubber(500,100,12);
    ball2 = new Rubber(510,100,12);
    ball3 = new Rubber(520,100,12);
    ball4 = new Rubber(530,100,12);
    ball5 = new Rubber(540,100,12);
    ball6 = new Rubber(550,100,12);
    ball7 = new Rubber(560,100,12);
    ball8 = new Rubber(570,100,12);
    ball9 = new Rubber(580,100,12);
    ball10 = new Rubber(590,100,12);
    stone = new Stone(400,100,25,25);
    iron = new Iron(620,100);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    stone.display();
    iron.display();

    
 
}