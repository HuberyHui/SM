let shape;
let particles = [];
let j;
let k;
let l;
let num = 400;
let num1 = 1000;
let noiseScale = 0.01;
let u;
let omg = 50;
let qw = 560;
let dfg;


function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log(windowWidth,windowHeight)
  shape = new waver();
  background(0,255);
  for(let i =0;i<num; i++){
    particles.push(createVector(random(0,width),random(0,height)))
  }
  for(let m =0;m<num1; m++){
    particles.push(createVector(random(0,width),random(0,height)))
  }
  //angleMode(DEGREES);
}

this.colorer = function(){
  j += 24;
  if (this.r>255){
    j = 0;
    k += 24;
    if(k>255){
      k = 0;
      l += 24;
      if (l > 255){
        l = 255;
      }
    }
  }
  stroke(j,k,l,150);
}
function draw() {
  push();
 
  j = floor(random(255));
  k = floor(random(255));
  l = floor(random(255));
  
  stroke(j,k,l,150);
  strokeWeight(1);
  noFill();
  circle(width/2,height/2,qw);
  pop();
  //for(let i =0;i<num; i++){
    //particles.push(createVector(random(20,width-20),random(80,height-80)))
  //}
  //fill("white");
  //stroke("red");
  //strokeWeight(1);
  //ellipse(280,95,10);
  for(let i =0;i<num;i++){
    let p = particles[i];
    stroke("red");
    strokeWeight(0.43+(mouseX/15000));
    point(p.x,p.y);
    let n = noise(p.x*noiseScale*3,p.y*noiseScale*3);
    let opp = TAU * n;
    p.x += cos(opp)*6;
    p.y += sin(opp)*6;
    if(!onScreen(p)){
      p.x = random(200,width-200);
      p.y = random(200,height-200);
    }
   }
   //if (mouseX<windowWidth/2 === ture) {
    // for(let i =0;i<num;i++){
    //let p = particles[i];
    //stroke("black");
   // strokeWeight(0.43);
   // point(p.x,p.y);
    //let n = noise(p.x*noiseScale*3,p.y*noiseScale*3);
    //let opp = TAU * n;
    //p.x += cos(opp)*1.5+(2500-mouseX)/650;
    //p.y += sin(opp)*1.5+(2500-mouseX)/650;
    //if(!onScreen(p)){
     // p.x = random(200,width-200);
     // p.y = random(200,height-200);
   // }
  // }
  //}
  for(let m =0;m<num1;m++){
    let p = particles[m];
    if (mouseX < width/2 === true){
      stroke("black")
      strokeWeight(0.38+(1250-mouseX)/2500);
      point(p.x,p.y);
      let n = noise(p.x*noiseScale*20,p.y*noiseScale*20);
      let opp = TAU * n*random(2,10);
      p.x += cos(opp)*1.5+(2300-mouseX)/450;
      p.y += sin(opp)*1.5+(2300-mouseX)/450;
    } else{
      stroke(255);
      strokeWeight(0.38+mouseX/5000);
      point(p.x,p.y);
      let n = noise(p.x*noiseScale*20,p.y*noiseScale*20);
      let opp = TAU * n*random(2,10);
      p.x += cos(opp)*1.5+mouseX/650;
      p.y += sin(opp)*1.5+mouseX/650;
    }
    //if ( mouseX < width/16 == true);{
       //let n = noise(p.x*noiseScale*20,p.y*noiseScale*20);
       //let opp = TAU * n*random(2,10);
       //p.x += cos(opp)*1.5
       //p.y += sin(opp)*1.5
          //if(!onScreen(p)){
      //p.x = random(200,width-200);
      //p.y = random(200,height-200);
    //}
       //p.y = random(200,height-200);
       //jj = floor(random(255));
       //kk = floor(random(255));
       //ll = floor(random(255));
  
       //
    //}
    

    if(!onScreen(p)){
      p.x = random(200,width-200);
      p.y = random(200,height-200);
    }
   }
   
  
  fill("white");
  //for(ax=0;ax<=700;ax+=20){
     //for(az=0;az<=85;az+=10){
       //fill("black");
       //stroke("white")
       //ellipse(ax,az,100);
     //}
  //}
  //for(ax=0;ax<=700;ax+=20){
     //for(az=450;az<=700;az+=10){
       //fill("black");
       //stroke("white")
       //ellipse(ax,az,100);
     //}
  //}
  
  if (frameCount%2400 === 0){
    background(0,255);
    
  }
  shape.make();
  push();
  
  u = 110;
  stroke(0);
  strokeWeight(u);
  noFill();
  translate(width/2,height/2);
  if(mouseX < 2500){
      scale(-mouseX/1300+2.4);
  } else{
      scale(1.4);
  };
  
  circle(0,0,height*0.0005);
  noFill();
  strokeWeight(u);
  stroke(0,0,0,255);
  circle(0,0,height*0.0005);
  pop();
  
  
  
  
  
  
}
function waver(){
  this.x = 0;
  this.y = 0;
  this.yf = 0;
  this.s = 50;
  this.len = height*0.47;
  this.tt = 0
  this.ts = 0.01
  this.r = floor(random(255));
  this.g = floor(random(255));
  this.b = floor(random(255));
  
  this.make = function(){
    let xoff = 0;
    this.s=map(noise(frameCount*0.01),0,1,10,75);
    this.tt += this.ts;
    if (this.tt > 1){
    this.tt = 0;
    this.colorer();
  }
  push();
  translate(width/2,height/2);
  rotate(-TWO_PI*this.tt);
  stroke(this.r,this.g,this.b,omg+mouseX/11.2);
  strokeWeight(2);
  noFill();
  beginShape();
  let sz = map(noise(frameCount*0.1),0,1,10,this.len);
  let rg = map(noise(frameCount*0.01),0,1,3,15);
  for (let x = 0; x< sz; x += rg){
    this.y = map(noise(xoff,this.yf),0,1,-this.s,this.s);
    vertex(x,this.y);
    xoff += 0.05;
  }
  endShape();
  pop();
  this.yf += 0.01;
}
this.colorer = function(){
  this.r += 24;
  if (this.r>255){
    this.r = 0;
    this.g += 24;
    if(this.g>255){
      this.g = 0;
      this.b += 24;
      if (this.b > 255){
        this.b = 255;
      }
    }
  }
  stroke(this.r,this.g,this.b,omg+mouseX/11.2);
}
}
function onScreen(v){
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
function mousePressed(){
  if (mouseIsPressed == true){
    
    //qw = qw + dfg;
    //omg = omg +dfg*2;
    //u = u - 10;
    
    
    //pad = pad + random(-10,10);
    //psd = psd + random(-10,10);
    //asd = asd + random(-10,10);
    //bsd = bsd + random(-10,10);
  }
}






