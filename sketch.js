function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
function drawfrog() {
  noStroke();
  fill('rgb(10,158,10)')
  ellipse((windowWidth/2)+70, (windowHeight/2)-85, 40, 70);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)-85, 40, 70);
  
  noStroke();
  fill('white')
  ellipse((windowWidth/2)+70, (windowHeight/2)-83, 30, 55);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)-83, 30, 55);
  
  noStroke();
  fill('rgb(10,158,10)')
  ellipse((windowWidth/2)+70, (windowHeight/2)+65, 50, 55);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)+65, 50, 55);
  
  noStroke();
  fill('rgb(10,158,10)')
  ellipse((windowWidth/2)+70, (windowHeight/2)+90, 70, 30);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)+90, 70, 30);
  
  fill('black');
  ellipse((windowWidth/2)+70, (windowHeight/2)-80, 20, 45);
  
  fill('black');
  ellipse((windowWidth/2)-70, (windowHeight/2)-80, 20, 45);
  
  fill('rgb(10,158,10)');
  stroke('black');
  ellipse(windowWidth/2, windowHeight/2, 200, 200);
  
  fill('#26C82D');
  noStroke();
  ellipse(windowWidth/2,(windowHeight/2)+50, 120, 100);
  
  fill('black');
  stroke('black');
  ellipse(windowWidth/2, (windowHeight/2)-63, 100, 50);
  
  fill('pink');
  stroke('black');
  ellipse(windowWidth/2, (windowHeight/2)-50, 75, 25);
  
  fill('rgb(10,158,10)');
  stroke('black');
  arc((windowWidth/2)-70, (windowHeight/2)-20, 40, 70, 0, 180, OPEN);
  
  fill('rgb(10,158,10)');
  stroke('black');
  arc((windowWidth/2)+70, (windowHeight/2)-20, 40, 70, 0, 180, OPEN);
}

function drawpad() {
  for (let x = 0; x < windowWidth -3; x += 90) {
    for (let y = 0;  y < windowHeight -1 ; y += 90) {
      // ellipse(x, y, 50, 50);
      fill('rgb(217,241,217)');
      noStroke();
      arc(x, y, 80, 80, 300, 265, PIE);
    }
  }
}

function draw() {
  angleMode(DEGREES);
  clear();
  background('white');
  
  push();
  drawpad();
  drawfrog();
  pop();
  
  
}