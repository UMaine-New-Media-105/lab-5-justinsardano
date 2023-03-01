let speedX
let speedY
let x
let y
function setup() {
  createCanvas(400, 400);
  speedX=5
  speedY=5
}

function draw() {
  background(220);
  addSprite(0+speedX,50+speedY,0.2)
  speedX+=2
  if (speedX>300){
    speedX+=-10
  }
  if (speedX<0){
    speedX+=10
  }
    
  speedY+=2
  if (speedY>300){
    speedY+=-10
  }
  if (speedY<0){
    
    speedY+=10
  }
 console.log(speedY)
   console.log(speedX)
}

function addSprite(x,y,size){
  translate(x,y)
  scale(size)
    noStroke()
  fill ("white")
  rect(100,100,125,200)
  ellipse(160,100,225)
  fill ("black")
  ellipse (120,120,40)
  ellipse (200,120,40)
  rect(125,200,10,100)
   rect(155,200,10,100)
   rect(185,200,10,100)

}
function keyPressed(){
  if (keyCode==LEFT_ARROW)
  speedX=0
  speedY=0
}
