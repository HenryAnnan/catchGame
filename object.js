class Object {
    constructor(x) {
        this.icon = ''
        this.xPos = x
        this.yPos = -50;
        this.speed = 5;

        let ballType=random(0,1)
        if (ballType >0.5){
            this.icon= '🥎';
        } else ( this.icon = '⚾')
    }

    fall(){
        this.yPos += this.speed;
    }

    Draw(){
        textSize(32);
        text(this.icon, this.xPos, this.yPos);
    }

}



