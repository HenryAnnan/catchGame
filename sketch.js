let currentPlayer;
let balls = []

function setup() {
    createCanvas(400, 400);
    currentPlayer = new Player();
    addBall()
    setInterval(addBall, 1000); // Spawns a ball every 0.3 seconds
}
function draw(){
    background('grey')
    currentPlayer.Draw()
    ballFrame()
    timeManager()
    playerObjectCollision()
}


function keyPressed(event){
    if (event.key === "ArrowLeft"){
        currentPlayer.moveLeft()
    }else if(event.key === "ArrowRight"){
        currentPlayer.moveRight()
    }

}

function ballFrame(){
    for(let i = 0; i < balls.length-1;i++){
        balls[i].Draw()
        balls[i].fall()
        if (balls[i].hitFloor()){
            balls.splice(i,1)
            // Decrease Life
        }
    }
}

function randomPos() {
    let setXPos = Math.random() * 400;
    while (setXPos > 350 || setXPos < 50) {
        setXPos = Math.random() * 400;
    }
    return setXPos
}

function addBall(){
    let newBall = new Ball(randomPos())
    console.log(newBall)
    balls.push(newBall)
}

function playerObjectCollision(){
    let playerX = currentPlayer.xPos
    let playerY = currentPlayer.yPos
    for (let i = 0; i < balls.length-1;i++){
        let objectX = balls[i].xPos
        let objectY = balls[i].yPos
        let distance = dist(playerX,playerY,objectX,objectY)
        if (distance < 35){
            //SCORE INCREASE
            balls.splice(i,1)
        }
    }

}


function timeManager(){
    fill("black");
    let time = Math.floor(millis() / 1000);
    textSize(15);
    text(`Timer: ${time}`, 300, 20);
}