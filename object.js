class Ball {
    constructor(x) {
        this.icon = ''
        this.xPos = x
        this.yPos = -50;
        this.speed = 5;

        let ballType= Math.random()
        if (ballType >0.2){
            this.icon= '🥎';
        } else ( this.icon = '⚾')
    }

    fall(){
        this.yPos += this.speed;
    }

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



