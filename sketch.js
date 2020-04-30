let player;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  player = new Player();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    player.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    player.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    player.setDir(0, -1);
  } else if (key == ' ') {
    player.grow();
  }

}

function draw() {
  scale(rez);
  background(225);
  if (player.eat(food)) {
    foodLocation();
  }
  player.update();
  player.show();


  if (player.endGame()) {
    print("END GAME");
    background(238,167,2);
    noLoop();
  }

  noStroke();
  fill(238,167,2);
  rect(food.x, food.y, 1, 1);
}