function setup() {
  // put setup code here
  createCanvas(1260,1080);
  background (255);
  strokeWeight(20);
  stroke(255);
}


function draw() {
  // put drawing code here
  line (mouseX,mouseY,pmouseX,pmouseY)
  if (mouseIsPressed == true) {
    console.log("Mouse is Pressed")
    stroke(0);
    strokeWeight(20);}
    
  else if (keyIsPressed) {
    console.log("Key is Pressed")
    stroke(255,0,0);
    strokeWeight(20);
  }

  else {
    console.log("No button is pressed")
    stroke(255);
    strokeWeight(0);
  }

    
  }
