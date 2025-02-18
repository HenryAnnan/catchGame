class Player{
    constructor() {
        this.icon = '🪣'; // Defines icon
        this.xPos = 170;
        this.yPos = 380;
    }
    moveLeft(){
        this.xPos -= 25
    }
    moveRight(){
        this.xPos += 25
    }
    Draw(){
        textSize(40); // Renders the player
        text(this.icon,this.xPos,this.yPos)
    }

}