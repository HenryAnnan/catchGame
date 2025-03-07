let currentPlayer;
let balls = []
let score = 0;
let restartButton;
let bgImage


function setup() { // P5js function runs once only
    createCanvas(400, 400);
    currentPlayer = new Player();
    addBall()
    setInterval(addBall, 800);
    createRestartButton()
    bgImage= loadImage('./landscape.png'); // Loads the background image


}
function draw(){
    background(bgImage)
    currentPlayer.Draw()
    ballFrame()
    timeManager()
    playerObjectCollision()
    scoreHandler()
    drawLives()
    checkGameOver()

}


// P5js function that runs whenever a keyboard key is pressed.
function keyPressed(event) {
    if (event.key === "ArrowLeft" || event.key === 'a') {
        if (currentPlayer.xPos > 0) {
            currentPlayer.moveLeft();
        }
    } else if (event.key === "ArrowRight" || event.key === 'd') {
        if (currentPlayer.xPos < 350) {
            currentPlayer.moveRight();
        }
    }
}

// This function runs every frame and loops through all the balls and draws them and then makes them fall
// If the ball hit the floor, it will decrease the player's life.
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
// Returns a new X position of the ball, ensuring that it doesn't go off-screen.
function randomPos() {
    let setXPos = Math.random() * 400;
    while (setXPos > 350 || setXPos < 50) {
        setXPos = Math.random() * 400;
    }
    return setXPos
}

// Instantiates a new ball and adds it to the end of the balls array.
function addBall(){
    let newBall = new Ball(randomPos())
    balls.push(newBall)
}

// This function checks if a ball has been caught by the player
function playerObjectCollision(){
    let playerX = currentPlayer.xPos
    let playerY = currentPlayer.yPos
    // It first loops over all balls in the array and checks if they are within a certain distance.
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

// Gets the current seconds since the game started and displays it to the canvas.
function timeManager(){
    fill("black");
    let time = Math.floor(millis() / 1000);
    textSize(15);
    text(`Timer: ${time}`, 300, 20);
}

// Displays the current score to the canvas
function scoreHandler(){
    color('black')
    text(`Score: ${score}`,200,20)
}

// Draws the amount of lives to the canvas
function drawLives(){
    textSize(15)

    // Switch statement displays the amount of heats based on the amount of lives the player has.
    switch (currentPlayer.lives){


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
        endGameScreen()
        noLoop() // Stops the game

    }
}

function createRestartButton() {
    restartButton = createButton('Restart');
    restartButton.position(174, 220);
    restartButton.mousePressed(restartGame);
    restartButton.hide();
}

// Shows the game over text
function endGameScreen() {
    textSize(32);
    fill('white');
    text('Game Over', 120, 150);
    textSize(20);
    text('Click Restart to Play Again', 90, 200);
}
