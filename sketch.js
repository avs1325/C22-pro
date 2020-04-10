var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
var g;
 
function setup() {
    createCanvas(800, 800);

    engine = Engine.create();
    world = engine.world;
 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 100);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    ground = new Ground(400,780,1200,40);
    noOfBoxes = 0;

  
}
 
function mousePressed() {
   if (mouseY < 750) {
    boxes[noOfBoxes] = new Box(mouseX, mouseY, random(10,40), random(10,40));
    noOfBoxes = noOfBoxes + 1;
    }
}
 
function draw() {
    background(0,255,255);
    Engine.update(engine);

    ground.display();


    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for (i = 0; i < noOfBoxes; i = i + 1){
        aBox = boxes[i];
        aBox.display();

   }

}
 

