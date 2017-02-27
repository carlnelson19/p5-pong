/*
 * Skeleton of a ball bouncing /game/.
 * Keith O'Hara <kohara@bard.edu>
 */

var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

var zone1_x, zone1_y;
var zone2_x, zone2_y;
var zone3_x, zone3_y;

var zone1_w, zone1_h;
var zone2_w, zone2_h;
var zone3_w, zone3_h;

var points;
var add_points;

function setup() {
  createCanvas(480, 500);
  paddle_h = 16;
  paddle_w = 6 * paddle_h;
  paddle_x = width / 2;
  paddle_y = height - paddle_h;
  paddle_step = 0;
  ball_r = 13;
  zone1_w = 80;
  zone1_h = 80;
  zone2_w = 60;
  zone2_h = 60;  
  zone3_w = 40;
  zone3_h = 40;
  points = 0;
    
    
  reset();
}

function draw() {
  
    
    background(130);

  // move paddle
  //paddle_x += (mouseX - paddle_x) * .1;
  paddle_x = paddle_x + paddle_step;

  // is the ball hitting the right or left wall?
  if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
    ball_x_step = -ball_x_step;
  }

  // hitting the top?
  if (ball_y - ball_r < 0) {
    ball_y_step = -ball_y_step;
  }

  // hitting the paddle?
  if (ball_y + ball_r > paddle_y) {
    if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
      ball_y_step = -ball_y_step;
      ball_y = paddle_y - ball_r;
    }
    else if (ball_y + ball_r > paddle_y){
      reset();
    }
  }
    
 // hitting zone 1?
 if (ball_x >= zone1_x &&
     ball_x <= zone1_x + zone1_w &&
     ball_y >= zone1_y &&
     ball_y <= zone1_y + zone1_h){
     add_points = 50;
 }
     
 // hitting zone 2?
    if (ball_x >= zone2_x &&
     ball_x <= zone2_x + zone2_w &&
     ball_y >= zone2_y &&
     ball_y <= zone2_y + zone2_h){
     add_points = 100;
 }
    
  // hitting zone 3?
    if (ball_x >= zone3_x &&
     ball_x <= zone3_x + zone3_w &&
     ball_y >= zone3_y &&
     ball_y <= zone3_y + zone2_h){
     add_points = 300;
    }

  // move ball by ball_x_step and ball_y_step
  ball_x = ball_x + ball_x_step;
  ball_y = ball_y + ball_y_step;

    
  //draw zone 1
  noStroke();
  fill(141, 219, 131);
  rect(zone1_x, zone1_y, zone1_w, zone1_h);
  stroke(255);
  noFill();  
  text("50", zone1_x - 10, zone1_y);
    
    
  //draw zone 2
  noStroke();
  fill(165, 77, 181);
  rect(zone2_x, zone2_y, zone2_w, zone2_h);
  stroke(255);
  noFill();  
  text("100", zone2_x - 10, zone2_y);    

    
  //draw zone 3
  noStroke();
  fill(239, 163, 81);
  rect(zone3_x, zone3_y, zone3_w, zone3_h);
  stroke(255);
  noFill();  
  text("300", zone3_x - 10, zone3_y); 
    
    //draw ball
  noStroke();
  fill(233);
  ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

  // draw paddle
  noStroke();
  fill(255);
  rect(paddle_x, paddle_y, paddle_w, paddle_h);
    
  //point tracker
stroke(255);
noFill();
text("Score: " + points + add_points, 5, 15);
    
}

function pointTracker() {
    points = points + addpoints;
}

function reset() {
  ball_x = random(ball_r, width - ball_r);
  ball_y = random(ball_r, height / 2);
  ball_x_step = random(-3, 3);
  ball_y_step = random(1, 3);
  zone1_x = random(40, 100, 300, 500);
  zone1_y = random(75, 125, 200);  
  zone2_x = random(150, 350, 550);
  zone2_y = random(15, 60, 90, 115, 300);  
  zone3_x = random(375, 400, 515, 580);
  zone3_y = random(20, 60, 90, 200);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    paddle_step = -3;
  } else if (keyCode == RIGHT_ARROW) {
    paddle_step = 3;
  } else if (key == ' ') {
    reset();
  }
}

function keyReleased() {
  paddle_step = 0;
}

