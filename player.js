class Player{
    constructor() {
        // This if statement allows for the emoji to change based on the OS of the device
        // because the bucket emoji is not available on Windows.
        let os = navigator.appVersion;
        if (os.includes('Mac')){
            this.icon = '🪣'; // Defines icon
        }else{
            this.icon = '🗑️'
        }

        this.xPos = 170;
        this.yPos = 380;
        this.lives = 5;
    }
    moveLeft(){
        this.xPos -= 30
    }
    moveRight(){
        this.xPos += 30
    }
    Draw(){
        textSize(45);
        text(this.icon,this.xPos,this.yPos) // Draws the player to the canvas using p5js text and an emoji
    }
    decreaseLives(){
        this.lives --;
    }

}