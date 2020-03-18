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

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secAn = map(sc, 0, 60, 0, 360);
  stroke(150, 100, 255);
  let minAn = map(mn, 0, 60, 0, 360);
  stroke(150, 255, 100);
  let hrAn = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(secAn);
  stroke(255);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAn);
  stroke(255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAn);
  stroke(255);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);



}