let currentPlayer;
let balls = []

function setup() {
    createCanvas(400, 400);
    currentPlayer = new Player();
    addBall()
}
function draw(){
    background('grey')
    currentPlayer.Draw()
    ballFrame()
}


function keyPressed(event){
    if (event.key === "ArrowLeft"){
        currentPlayer.moveLeft()
        addBall()
    }else if(event.key === "ArrowRight"){
        currentPlayer.moveRight()
    }

}

function ballFrame(){
    for(let i = 0; i < balls.length-1;i++){
        balls[i].Draw()
        balls[i].fall()
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