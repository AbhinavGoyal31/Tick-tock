var hr,sc,mn
var hra,sca,mna




function setup() {
  createCanvas(500,500);
angleMode(DEGREES)
}
function draw() {
  background(0); 
  fill (255)
  textSize (24) 
  text ("Tick-Tock",100,400)
  
  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8)
  noFill();

  
  stroke("red")
  var end = map(sc,0,60,0,360)
  arc (0,0,300,300,0,end)

  stroke("green")
  var end1 = map(mn,0,60,0,360)
  arc (0,0,280,280,0,end1)

  stroke("blue")
  var end2 = map(hr%12,0,12,-0,360)
  arc (0,0,260,260,0,end2)

  push();
  rotate(end)
  stroke("red")
  line(0,0,100,0)
  pop(); 

  push();
  rotate(end1)
  stroke("green")
  line(0,0,75,0)
  pop(); 
  

  push();
  rotate(end2)
  stroke("blue")
  line(0,0,50,0)
  pop(); 

  stroke("black")
  point(0,0)
  drawSprites();
}