function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log('right wrist x = ' + results[0].pose.rightWrist.x);
        console.log('left wrist x = ' + results[0].pose.leftWrist.x);
        rwristX = results[0].pose.rightWrist.x;
        lwristX = results[0].pose.leftWrist.x;

        subbedDist = Math.floor(lwristX - rwristX - 50);
        document.getElementById("font_size").innerHTML = "Font size of the text will be : " + subbedDist + "px"
    }
}

function draw(){
    canvas.background("white");
    textSize(100);
    fill("black");
    text("I like turtles", 50, 200);
}