let currentPlayer;
let balls = []
let score = 0;
let restartButton;
let bgImage
let bgMusic;
let musicPlay = false

function preload(){
    soundFormats('mp3');
    bgMusic = loadSound('./better-day-186374'); // Preload the background music

}

function setup() {
    createCanvas(400, 400);
    currentPlayer = new Player();
    addBall()
    setInterval(addBall, 1000); // Spawns a ball every 0.3 seconds
    createRestartButton()
    bgImage= loadImage('./landscape.png'); // Preload the background image

}
function draw(){
    bgMusic.play();

    background(bgImage)
    currentPlayer.Draw()
    ballFrame()
    timeManager()
    playerObjectCollision()
    scoreHandler()
    drawLives()
    checkGameOver()

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
            currentPlayer.decreaseLives();
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
            score++
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

function scoreHandler(){
    color('black')
    text(`Score: ${score}`,200,20)
}

function drawLives(){ // This function draws the number of lives in heart emojis to the screen
    textSize(15)
    // A switch statement was used to reduce the amount of if else statements that become hard to read.
    switch (currentPlayer.lives){ // Gets the current amount of lives from the current player object.

        // Creates text with the respective amount of hearts to lives the player has.
        case 1: text("❤️",20,20)
            break;
        case 2: text("❤️❤️",20,20)
            break;
        case 3: text ("❤️❤️❤️️",20,20)
            break;
        case 4: text("❤️❤️❤️❤️", 20,20)
            break;
        case 5: text("❤️❤️❤️❤️❤️", 20,20)
    }
}



//restart game function
function restartGame() {
    location.reload()
}


function checkGameOver() {
    if (currentPlayer.lives <= 0) {
        gameOver = true;
        restartButton.show();
        noLoop()
    }
}

function createRestartButton() {
    restartButton = createButton('Restart');
    restartButton.position(200, 200);
    restartButton.mousePressed(restartGame);
    restartButton.hide();
}

