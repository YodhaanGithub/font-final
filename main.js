leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}

function modalLoaded() {
            
    console.log("It has been loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
      console.log(results);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);

    }
}

function draw() {
    background("cyan");

    textSize(difference);
    fill('yellow');
    text('Best', 50, 400);
}