let catcher;
let objects = [];
let score = 0;
let lives = 3;
let gameIsOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  catcher = createSprite(width / 1.5, height - 20, windowWidth/10, 50);
  catcher.shapeColor = color(255, 0, 0);
}

function draw() {
  background(220);

  // Move the catcher with the mouse
  catcher.position.x = mouseX;

  // Spawn objects randomly
  if (frameCount % 30 == 0) {
    let object = createSprite(random(50, width-50), 0, 30, 30);
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



// // Set up the canvas and game objects
// let frog;
// let cars = [];
// let logs = [];
// let gameIsOver = false;

// function setup() {
//   createCanvas(400, 400);
//   frog = createSprite(width / 2, height - 20, 20, 20);
//   frog.shapeColor = color(0, 255, 0);
  
//   // Create rows of cars and logs
//   for (let i = 0; i < 3; i++) {
//     let car = createSprite(0, height - 50 - i * 50, 40, 30);
//     car.velocity.x = random(1, 3);
//     car.shapeColor = color(255, 0, 0);
//     cars.push(car);
//   }
//   for (let i = 0; i < 2; i++) {
//     let log = createSprite(0, height - 100 - i * 50, 100, 30);
//     log.velocity.x = random(-1, -2);
//     log.shapeColor = color(100, 100, 255);
//     logs.push(log);
//   }
// }

// function draw() {
//   background(220);

//   // Move the frog with arrow keys
//   if (kb.presses(LEFT_ARROW)) {
//     frog.position.x -= 5;
//   }
//   if (kb.presses(RIGHT_ARROW)) {
//     frog.position.x += 5;
//   }
//   if (kb.presses(UP_ARROW)) {
//     frog.position.y -= 5;
//   }
//   if (kb.presses(DOWN_ARROW)) {
//     frog.position.y += 5;
//   }

//   // Check if the frog is off-screen or collided with a car
//   if (frog.position.y < 0 || frog.position.y > height) {
//     gameIsOver = true;
//   }
//   for (let i = 0; i < cars.length; i++) {
//     if (frog.collide(cars[i])) {
//       gameIsOver = true;
//     }
//   }

//   // Check if the frog is on a log
//   let onLog = false;
//   for (let i = 0; i < logs.length; i++) {
//     if (frog.collide(logs[i])) {
//       onLog = true;
//       frog.position.x += logs[i].velocity.x;
//     }
//   }

//   // Move the cars and logs
//   for (let i = 0; i < cars.length; i++) {
//     if (cars[i].position.x > width) {
//       cars[i].position.x = 0;
//     }
//     if (cars[i].position.x < 0) {
//       cars[i].position.x = width;
//     }
//     cars[i].position.x += cars[i].velocity.x;
//   }
//   for (let i = 0; i < logs.length; i++) {
//     if (logs[i].position.x > width) {
//       logs[i].position.x = 0;
//     }
//     if (logs[i].position.x < 0) {
//       logs[i].position.x = width;
//     }
//     logs[i].position.x += logs[i].velocity.x;
//   }

//   // Draw the game objects
//   drawSprites();

//   // Check if the game is over
//   if (gameIsOver) {
//     textSize(32);
//     textAlign(CENTER, CENTER);
//     text("Game Over", width / 2, height / 2);
//   }
// }


//kb.presses
// let sprite1, sprite2;
// let crow;
// let gridSize = 32;
// let bricks;

// window.setup = () => {
// 	new Canvas(windowWidth,windowHeight-50);
// 	sprite1 = new Sprite(windowWidth - (windowWidth / 4), windowHeight);
// 	sprite1.color = 'blue';
// 	sprite2 = new Sprite(windowWidth - 3*(windowWidth / 4), windowHeight-100);
// 	sprite2.color = 'red';
//     crow = new Sprite(0, windowHeight/3);

//     bricks = new Group();
// 	bricks.w = windowWidth/20;
// 	bricks.h = windowWidth/20;
// 	bricks.tile = '=';

// 	new Tiles(
// 		[
// 			'==============',
// 			'==============',
// 			'==============',
// 			'==============',
// 			'==============',
// 			'==============',
// 			'==============',
// 			'==============',
// 		],
// 		100,
// 		40,
// 		bricks.w + 4,
// 		bricks.h + 4
// 	);
// }

// window.draw = () => {
// 	clear();
// 	sprite1.moveTowards(mouse);
// 	if (sprite1.overlaps(sprite2)) sprite1.color = 'red';

//     fill(255, 100);

//     rect(0, height-50,width,40)

// //     rect(0, height-80,width,grid);

// //     rect(0, height-40,width,grid);

// //     rect(0, height-40*5,width,grid);


	
	
// }




// let frog;
// let frog2;

// let cars = [];

// let logs = [];

// let grid = 40;

// let sprite;

// let img;

// let label;


// function resetGame(){

//     frog = new Frog(width / 3 - grid / 3, height - grid, grid/2);
//     frog2 = new Frog(width / 1.5 - grid / 1.5, height - grid, grid/2);

//     frog.attach(null);
//     frog2.attach(null);

// }

// function preload() {
//     img = loadImage('Pal2.GIF');
//     img = img.resize(50, 100);
// }
 
// window.setup = () => {

//     createCanvas(windowWidth,windowHeight-50);

//     resetGame();

//     sprite = new Sprite();
//     // sprite.image = img;
//     //sprite.addImage(label, img);
//     sprite.changeAnimation(label);
// 	sprite.width = 50;
// 	sprite.height = 50;
//     sprite.pos = {x: 50, y: 100};


//     let index = 0;



//     // ROW 1

//     for (let i = 0; i < 2; i++) {

//         let x = i * 300;

//         cars[index] = new Car(x, height - grid * 2, grid * 2, grid, 2);

//         index ++;

//     }



//     // ROW 2

//     for (let i = 0; i < 2; i++) {

//         let x = i * 200 + 150;

//         cars[index] = new Car(x, height - grid * 3, grid, grid, -3.5);

//         index ++;

//     }



//     // ROW 3

//     for (let i = 0; i < 4; i++) {

//         let x = i * 150 + 25;

//         cars[index] = new Car(x, height - grid * 4, grid, grid, 1.2);

//         index ++;

//     }

//     for (let i = 0; i < 2; i++) {

//         let x = i * 300;

//         cars[index] = new Car(x, height - grid * 14, grid * 2, grid, 2);

//         index ++;

//     }



//     // ROW 2

//     for (let i = 0; i < 2; i++) {

//         let x = i * 200 + 150;

//         cars[index] = new Car(x, height - grid * 15, grid, grid, -3.5);

//         index ++;

//     }



//     // ROW 3

//     for (let i = 0; i < 4; i++) {

//         let x = i * 150 + 25;

//         cars[index] = new Car(x, height - grid *16, grid, grid, 1.2);

//         index ++;

//     }



//     // ROW 5

//     index = 0;

//     for (let i = 0; i < 6; i++) {

//         let x = i * 250 + 100;

//         logs[index] = new Log(x, height - grid * 6, grid * 3, grid, 2.3);

//         index ++;

//     }



//     // ROW 6

//     for (let i = 0; i < 3; i++) {

//         let x = i * 200 + 30;

//         logs[index] = new Log(x, height - grid * 7, grid * 2, grid, -1.3);

//         index ++;

//     }



//     // ROW 7

//     for (let i = 0; i < 4; i++) {

//         let x = i * 400 + 10;

//         logs[index] = new Log(x, height - grid * 8, grid * 4, grid, 0.5);

//         index ++;

//     }

//     for (let i = 0; i < 2; i++) {

//         let x = i * 500 + 10;

//         logs[index] = new Log(x, height - grid * 11, grid * 4, grid, 0.5);

//         index ++;

//     }

//     for (let i = 0; i < 2; i++) {

//         let x = i * 250 + 100;

//         logs[index] = new Log(x, height - grid * 12, grid * 3, grid, 2.3);

//         index ++;

//     }

// }



// window.draw = () => {



//     background(0);

//     // Safety lines

//     fill('yellow');

//     rect(0, 0, width,grid);

//     fill(255, 100);

//     rect(0, height-grid*10,width,grid*2)

//     rect(0, height-grid*13,width,grid);

//     rect(0, height-grid,width,grid);

//     rect(0, height-grid*5,width,grid);

    



    

//     for(let i = 0; i < cars.length; i++){

//         cars[i].update();

//         cars[i].show();

        

//         if(frog.intersects(cars[i])){

//             resetGame();

//         }

//         if(frog2.intersects(cars[i])){

//             resetGame();

//         }

//     }

    

//     for(i = 0; i < logs.length; i++){

//         logs[i].update();

//         logs[i].show();

//     }

    

//     if (frog.y < height - grid * 5 && frog.y > grid*2) {

//         let ok = false;

        

//         for(i = 0; i<logs.length; i++){

//             if (frog.intersects(logs[i])) {

//                 ok = true;

//                 frog.attach(logs[i]);

//             }

//         }

//         if(!ok){

//             resetGame();

//         }

//     } else {

//         frog.attach(null);

//     }

//     if (frog2.y < height - grid * 8 && frog2.y > grid*2) {

//         let ok = false;

        

//         for(i = 0; i<logs.length; i++){

//             if (frog2.intersects(logs[i])) {

//                 ok = true;

//                 frog2.attach(logs[i]);

//             }

//         }

//         if(!ok){

//             resetGame();

//         }

//     } else {

//         frog2.attach(null);

//     }

    

//     frog.update();
//     frog2.update();

//     frog.show(1);
//     frog2.show(2);

//     // if (mouse.presses()) {
//         // sprite.x = mouse.x;
//         // sprite.y = mouse.y;
//     // }

// }



// function keyTyped() {

//     if(key  === 'w'){

//         frog.move(0, -.5);

//     }else if(key  === 's'){

//         frog.move(0, .5);

//     }else if(key  === 'd'){

//         frog.move(.5, 0);

//     }else if(key  === 'a'){

//         frog.move(-.5, 0);

//     }

// }

// function keyPressed() {

//     if(keyCode === UP_ARROW){

//         frog2.move(0, -.5);

//     }else if(keyCode === DOWN_ARROW){

//         frog2.move(0, .5);

//     }else if(keyCode === RIGHT_ARROW){

//         frog2.move(.5, 0);

//     }else if(keyCode === LEFT_ARROW){

//         frog2.move(-.5, 0);

//     }

// }