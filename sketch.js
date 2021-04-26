const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var block1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    
   

   //level two
block1 = new Block (330, 235, 30, 40) ;
block2 = new Block (360, 235, 30, 40);
block3 = new Block (390, 235, 30, 40) ;
block4 = new Block (420, 235, 30, 40) ;

block5 = new Block (450, 235, 30, 40) ;
//level three
block6 = new Block(360, 195, 30, 40) ;

block7 = new Block(390, 195, 30, 40) ;
block8 = new Block(420, 195, 30, 40) ;
//top
block18 = new Block(390, 155, 30, 40) ;

   //level two
   block9 = new Block (830, 260, 30, 40) ;
   block10 = new Block (860, 235, 30, 40);
   block11= new Block (890, 235, 30, 40) ;
   block12= new Block (920, 235, 30, 40) ;
   
   block13 = new Block (950, 235, 30, 40) ;
   //level three
   block14 = new Block(860, 195, 30, 40) ;
   
   block15 = new Block(890, 195, 30, 40) ;
   block16 = new Block(920, 195, 30, 40) ;
   //top
   block17 = new Block(890, 155, 30, 40) ;

    //block18=new Block(360,195,30,40);

   ground1=new Ground(10,490,2500,30);
   ground2= new Ground(400,340,330,20);
   ground3= new Ground(900,300,330,20);

    polygon1= new Polygon(100,230,40,40);

    slingshot = new SlingShot(polygon1.body,{x:200, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    
    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    
    block18.display();

    ground1.display();
    ground2.display();
    ground3.display();

    polygon1.display();

    slingshot.display(); 
}





function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX, y:mouseY})
    }
    
    function mouseReleased(){
    slingshot.fly();
    }
