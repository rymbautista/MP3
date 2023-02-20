let frog;
let frog2;

let cars = [];

let logs = [];

let grid = 40;

let sprite;

let img;

let label;


function resetGame(){

    frog = new Frog(width / 3 - grid / 3, height - grid, grid/2);
    frog2 = new Frog(width / 1.5 - grid / 1.5, height - grid, grid/2);

    frog.attach(null);
    frog2.attach(null);

}

function preload() {
    img = loadImage('Pal2.GIF');
    img = img.resize(50, 100);
}
 
window.setup = () => {

    createCanvas(windowWidth,windowHeight-50);

    resetGame();

    sprite = new Sprite();
    // sprite.image = img;
    //sprite.addImage(label, img);
    sprite.changeAnimation(label);
	sprite.width = 50;
	sprite.height = 50;
    sprite.pos = {x: 50, y: 100};


    let index = 0;



    // ROW 1

    for (let i = 0; i < 2; i++) {

        let x = i * 300;

        cars[index] = new Car(x, height - grid * 2, grid * 2, grid, 2);

        index ++;

    }



    // ROW 2

    for (let i = 0; i < 2; i++) {

        let x = i * 200 + 150;

        cars[index] = new Car(x, height - grid * 3, grid, grid, -3.5);

        index ++;

    }



    // ROW 3

    for (let i = 0; i < 4; i++) {

        let x = i * 150 + 25;

        cars[index] = new Car(x, height - grid * 4, grid, grid, 1.2);

        index ++;

    }

    for (let i = 0; i < 2; i++) {

        let x = i * 300;

        cars[index] = new Car(x, height - grid * 14, grid * 2, grid, 2);

        index ++;

    }



    // ROW 2

    for (let i = 0; i < 2; i++) {

        let x = i * 200 + 150;

        cars[index] = new Car(x, height - grid * 15, grid, grid, -3.5);

        index ++;

    }



    // ROW 3

    for (let i = 0; i < 4; i++) {

        let x = i * 150 + 25;

        cars[index] = new Car(x, height - grid *16, grid, grid, 1.2);

        index ++;

    }



    // ROW 5

    index = 0;

    for (let i = 0; i < 6; i++) {

        let x = i * 250 + 100;

        logs[index] = new Log(x, height - grid * 6, grid * 3, grid, 2.3);

        index ++;

    }



    // ROW 6

    for (let i = 0; i < 3; i++) {

        let x = i * 200 + 30;

        logs[index] = new Log(x, height - grid * 7, grid * 2, grid, -1.3);

        index ++;

    }



    // ROW 7

    for (let i = 0; i < 4; i++) {

        let x = i * 400 + 10;

        logs[index] = new Log(x, height - grid * 8, grid * 4, grid, 0.5);

        index ++;

    }

    for (let i = 0; i < 2; i++) {

        let x = i * 500 + 10;

        logs[index] = new Log(x, height - grid * 11, grid * 4, grid, 0.5);

        index ++;

    }

    for (let i = 0; i < 2; i++) {

        let x = i * 250 + 100;

        logs[index] = new Log(x, height - grid * 12, grid * 3, grid, 2.3);

        index ++;

    }

}



window.draw = () => {



    background(0);

    // Safety lines

    fill('yellow');

    rect(0, 0, width,grid);

    fill(255, 100);

    rect(0, height-grid*10,width,grid*2)

    rect(0, height-grid*13,width,grid);

    rect(0, height-grid,width,grid);

    rect(0, height-grid*5,width,grid);

    



    

    for(let i = 0; i < cars.length; i++){

        cars[i].update();

        cars[i].show();

        

        if(frog.intersects(cars[i])){

            resetGame();

        }

        if(frog2.intersects(cars[i])){

            resetGame();

        }

    }

    

    for(i = 0; i < logs.length; i++){

        logs[i].update();

        logs[i].show();

    }

    

    if (frog.y < height - grid * 5 && frog.y > grid*2) {

        let ok = false;

        

        for(i = 0; i<logs.length; i++){

            if (frog.intersects(logs[i])) {

                ok = true;

                frog.attach(logs[i]);

            }

        }

        if(!ok){

            resetGame();

        }

    } else {

        frog.attach(null);

    }

    

    frog.update();
    frog2.update();

    frog.show(1);
    frog2.show(2);

    // if (mouse.presses()) {
        // sprite.x = mouse.x;
        // sprite.y = mouse.y;
    // }

}



function keyTyped() {

    if(key  === 'w'){

        frog.move(0, -.5);

    }else if(key  === 's'){

        frog.move(0, .5);

    }else if(key  === 'd'){

        frog.move(.5, 0);

    }else if(key  === 'a'){

        frog.move(-.5, 0);

    }

}

function keyPressed() {

    if(keyCode === UP_ARROW){

        frog2.move(0, -.5);

    }else if(keyCode === DOWN_ARROW){

        frog2.move(0, .5);

    }else if(keyCode === RIGHT_ARROW){

        frog2.move(.5, 0);

    }else if(keyCode === LEFT_ARROW){

        frog2.move(-.5, 0);

    }

}