noseX = 0;
noseY = 0;
difference = 0;
right_wristX = 0;
left_wristX = 0;


function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(1500, 250);
    video = createCapture(VIDEO);
    video.size(1000, 1000);
    video.position(300, 150);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPosses);
}

function draw() {
    document.getElementById("size_square").innerHTML = "Width and Height of the Square is " + difference + "px" ;
    background("blue");
    fill(252, 3, 3);
    stroke(252, 252, 3);
    square(noseX, noseY, difference)
}

function modelloaded() {
    console.log("THE MODEL HAS LOADED!!!!!! YAY =0");
}

function gotPosses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y =" + noseY);
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);

        console.log("Left Wrist = " + left_wristX + " Right Wrist = " + right_wristX + "The Difference = " + difference);
    }
}
