song1 = "";
song2 = "";
leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(500,600)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet (video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model has been loaded.");
}

function draw()
{
    image(video, 0, 0, 500, 600);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        rightX = results[0].pose.rightWrist.x;        
        rightY = results[0].pose.rightWrist.y;
        
        console.log("Left Wrist: X - " + leftX + " & Y - " + leftY);
        console.log("Right Wrist: X - " + rightX + " & Y - " + rightY);        
    }
}