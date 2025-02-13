let currentPlayer;

function setup() {
    createCanvas(400, 400);
    currentPlayer = new Player();
}
function draw(){
    background('grey')
    currentPlayer.Draw()
}


function keyPressed(event){
    if (event.key === "ArrowLeft"){
        currentPlayer.moveLeft()
    }else if(event.key === "ArrowRight"){
        currentPlayer.moveRight()
    }

}

function randomPos() {
    let setXPos = random(50, width - 50)
    while (setXPos > 350 || setXPos < 50) {
        setXPos = random() * 400;
    }
    return setXPos
}