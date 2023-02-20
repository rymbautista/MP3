let catcher;
let objects = [];
let score = 0;
let lives = 3;
let gameIsOver = false;

function preload() {
    catcherImage = loadImage('gamefrog.png');
    apple = loadImage('apple.png');
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  catcher = new Sprite(width / 1.5, height - 80, windowWidth/10, 110);
  catcherImage.resize(windowWidth/10, 0);
  catcher.addImage(catcherImage);
  catcher.shapeColor = color(255, 0, 0);
}

function draw() {
  background(220);
  fill('white');
  rect(0, 0, windowWidth, 30, 20);

//   fill(124, 252, 0);
//   noStroke();
//   beginShape();
//   curveVertex(0, height);
//   curveVertex(0, height);
//   curveVertex(50, 250);
//   curveVertex(100, 200);
//   curveVertex(150, 250);
//   curveVertex(200, 150);
//   curveVertex(250, 200);
//   curveVertex(300, 250);
//   curveVertex(350, 200);
//   curveVertex(400, height);
//   curveVertex(400, height);
//   endShape();
  

fill('white');
  rect(0, windowHeight-30, windowWidth, 30, 20);

  // Move the catcher with the mouse
  catcher.position.x = mouseX;

  // Spawn objects randomly
  if (frameCount % 30 == 0) {
    let object = createSprite(random([50,width /3, width /2,width /1.5 ,width-50]), 0, 30, 30);
    apple.resize(30, 0);
    object.addImage(apple);
    object.velocity.y = random(2, 5);
    objects.push(object);
  }

  // Check if the objects are caught or missed
  for (let i = objects.length - 1; i >= 0; i--) {
    if (catcher.overlap(objects[i])) {
      objects[i].remove();
      score += 1;
    } else if (objects[i].position.y > height) {
      objects[i].remove();
      lives -= 1;
    }
  }

  // End the game if all lives are lost
  if (lives == 0) {
    gameIsOver = true;
  }

  // Display the score and lives
  textSize(16);
  fill('black');
  text(`Score: ${score}`, 10, 20);
  text(`Lives: ${lives}`, width - 70, 20);

  // End the game if it's over
  if (gameIsOver) {
    textSize(32);
    text("Game Over", width / 2 - 80, height / 2);
    noLoop();
  }

  // Draw the catcher and objects
  drawSprites();
}

// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}