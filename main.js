function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(1500, 250);
    video = createCapture(VIDEO);
    video.size(1000, 1000);
    video.position(300, 150);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPosses);
}

function modelloaded() {
    console.log("THE MODEL HAS LOADED!!!!!! YAY =0");
}

function gotPosses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}
