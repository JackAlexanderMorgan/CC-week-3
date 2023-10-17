let x= 0;
let y= 0;
let easing = 0.1;

function setup() {
  // put setup code here
  createCanvas(1260,1080);
  background (255);
  stroke(0);
  strokeWeight(5);
  
}


function draw() {
  // put drawing code here
  let targetX = mouseX;
  let targetY = mouseY;
  x += (targetX - x) * easing;
  y += (targetY - y) * easing;
  ellipse(x, y, pmouseX, pmouseY);
  console.log(targetX + " : " + x);
  console.log(targetY + " : " + y);
if (mouseIsPressed){
  console.log("mouse is pressed");
  ellipse(x, y, pmouseX, pmouseY);
  strokeWeight(5);
  fill (255);
}
else {
  console.log("mouse is pressed");
  ellipse(0,0,0);
  strokeWeight(0);
  noFill();
}
    
  }
