song = ""
leftWristX = 0
rightWristX = 0
leftWristY = 0
rightWristY = 0
scoreRightWrist = 0
scoreLeftWrist = 0
function setup(){
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
	posenet = ml5.poseNet(video , modeloaded)
	posenet.on("pose" , gotPoses)

}
function draw(){
image(video,0,0,600,500);
fill("red")
stroke("red")
if(scoreLeftWrist > 0.20){

song
circle(leftWristX, leftWristY, 20)
inNumber = Number(leftWristY)
removeDecimals = floor(inNumber)
volume = removeDecimals/1000
volume1 = volume*2
document.getElementById("volume").innerHTML = "volume=" + volume1
song.setVolume(volume1)
}
}
function preload(){
    song = loadSound("sound1.mp3");
}
function play(){
song.play();
song.setVolume(0.1)
song.rate(1)
}
function modeloaded(){
	console.log("posenet is initiallized")
}
function gotPoses(results){
	console.log(results)
	scoreLeftWrist = results[0].pose.keypoints[9].score
	leftWristX= results[0].pose.leftWrist.x
	leftWristY = results[0].pose.rightWrist.y
	rightWristX= results[0].pose.leftWrist.x
	rightWristY = results[0].pose.rightWrist.y

}