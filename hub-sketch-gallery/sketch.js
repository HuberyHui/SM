let purple = [330,375,465,495]
function setup() {
  createCanvas(600, 600);
  purple = random(purple);
}

function draw() {
  background(255);
  fill("purple")
  triangle(330,60,315,60,330,30);
  triangle(375,30,375,60,360,60);
  triangle(465,120,465,150,450,150);
  triangle(495,150,495,180,480,180);
  line(270,240,255,315);
  line(210,180,240,210);
  line(180,180,150,300);
  fill("black")
  triangle(120,210,150,270,150,330);
  triangle(270,210,240,330,240,270);
  fill("white");
  circle(150,150,20);
  circle(210,150,20);
  
  legs();
  head();
  wings();
  scale(2);
  ears();
  
}

function ears(){
  stroke("brown");
  strokeWeight(1.5);
  line(60,30,60,45);
  line(60,45,75,60);
  line(60,30,67.5,60);
  line(120,30,120,45);
  line(120,30,112.5,60);
  line(120,45,105,60);
}

function head(){
  fill("black");
  triangle(135,120,225,120,180,210);
}
function wings(){
  triangle(315,60,315,90,240,210);
  triangle(390,90,390,120,240,210);
  triangle(360,60,360,90,240,210);
  triangle(420,120,420,150,270,240);
  triangle(450,150,450,180,270,240);
  triangle(480,180,480,210,270,240);
}
function legs(){
  fill("black");
  line(180,300,120,330);
  line(120,330,210,360);
  line(180,330,210,360);
  triangle(180,360,195,360,210,420);
  line(240,330,330,360);
  line(270,330,330,360);
  triangle(315,360,300,360,345,405);
}
