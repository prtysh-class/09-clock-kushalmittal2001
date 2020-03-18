function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  point(0,125);
  point(0,-125);
  point(125,0);
  point(-125,0);
  arc(0, 0, 320, 320, 0, 360);

  
  push();
  strokeWeight(1);
  rotate(90);
  textAlign(CENTER);
  textSize(22);
  text(hr + ":" + mn + ":" + sc, 0, 110);
  pop();



  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  
  let secAn = map(sc, 0, 60, 0, 360);


  stroke(sc*5, mn*20, hr*30);
  arc(0, 0, 300, 300, 0, secAn);
  
   push();
  rotate(secAn);
  stroke(255);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  
  let minAn = map(mn, 0, 60, 0, 360);
  stroke(150, 255, 100);
  

  push();
  rotate(minAn);
  var mmmm = random(255)*mn;
  stroke(mn*20, hr*20, sc*5);
  strokeWeight(7);

  line(0, 0, 75, 0);
  pop();
  
  let hrAn = map(hr % 12, 0, 12, 0, 360);
  
 
  push();
  rotate(hrAn);
  stroke(hr*20, mn*20,sc*5);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
  




}