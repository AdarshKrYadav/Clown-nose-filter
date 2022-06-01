function preload(){}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("Modelloaded");
}
function draw(){
    image(video,0,0,300,300)
}
function takesnapshot(){
    save("Image.png");
    
}
function gotposes(results){
    if(results.lenght>0){
        console.log(results);
    }
}