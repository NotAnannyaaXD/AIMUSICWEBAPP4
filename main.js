song_1 = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song_1 = loadSound("Darkside Monteiro Tropical House Remix.mp3");
    song_2 = loadSound("Darkside_320(PaglaSongs).mp3");  
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
    
function gotPoses(results){
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
            
    }
}
    
function draw(){
    image(video, 0, 0, 600, 500);
    
    fill("#FF0000");
    stroke("#FF0000");

    if (setLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        InNumberLeftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberLeftWristY);
        volume = remove_decimals/50.0;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    }
}

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
    
function play(){
    song.play("Darkside Monteiro Tropical House Remix.mp3");
    song.setVolume(1);
    song.rate(1);
}