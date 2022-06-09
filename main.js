img = "";
status = "";
objects = [] ;

function setup() {
 canvas = createCanvas(380,380);
 canvas.center();
 
 video = createCapture(VIDEO);
 video.size(380,380);
 video.hide();
}
function preload() {
img = loadImage('school.jpg');    
}
function start() {
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";   
}

function modelLoaded() {
console.log("model is loaded by Tejas.D");
status = true; 
}

function draw() {
image(video,0,0,380,380);
if (status != "") {
objectDetector.detect(video, gotResults);
r = random(255);  
g = random(255); 
b = random(255); 
for (i = 0;i < objects.length;i++) {   
document.getElementById("status").innerHTML = " Status : object detected ";
document.getElementById("nood").innerHTML = " number of objects detected is : " + objects.length;
fill(r,g,b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%" , objects[i].x +10 , objects[i].y +13);
noFill();
stroke(r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width , objects[i].height);
}    
}

}

function gotResults(error,results) {
if (error) {
console.log(error);  
}
console.log(results); 
objects = results;  
}

