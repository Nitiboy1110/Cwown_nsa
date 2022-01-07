noseX=0;
noseY=0;

function preload() {
    nose = loadImage("https://i.postimg.cc/JnvtWGwN/pngtree-elements-of-a-clown-mask-with-a-beard-on-april-fools-image-2284919-removebg-preview.png");
 } 
 
 function setup() 
{ canvas = createCanvas(300, 300); 
   canvas.center(); 
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   Posenet = ml5.poseNet(video , modelLoaded);
   Posenet.on('pose', gotPosses);
} 

function modelLoaded(){
   console.log('Posenet Got LOADED')
} 

function gotPosses(results){
   console.log(results);
   noseX = results[0].pose.nose.x-110;
   noseY = results[0].pose.nose.y-110;
   console.log("Nose x = " + noseX);
   console.log("Nose y = " + noseY);
}

function draw() {
    image(video,0,0,300,300);
    image(nose,noseX,noseY,230,230);
} 
  
  function take_snapshot()
  { 
      save('myFilterImage.png'); 
  }