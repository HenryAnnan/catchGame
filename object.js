class Ball {
    constructor(x) {
        this.icon = ''
        this.xPos = x
        this.yPos = -50;
        this.speed = 4.5;

        // Generates a random ball
        let ballType= Math.random()
        if (ballType >0.2){
            this.icon= '🥎';
        } else ( this.icon = '⚾')
    }

    // Increases the ball's Y value.
    fall(){
        this.yPos += this.speed;
    }

    // Draws the ball to the canvas
    Draw(){
        textSize(28);
        text(this.icon, this.xPos, this.yPos);
    }


    hitFloor(){
        if (this.yPos === 400){
            return true
        }else{
            return false
        }
    }

}

