class Log{

    constructor(xPos,yPos,rectHeight){
        this.x = xPos
        this.y = yPos
        this.width = 20
        this.height = rectHeight
        this.options = {
            restitution:0.8
        }
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,this.options)
        Matter.World.add(world1,this.body)    }

    displaylog(){

        rectMode(CENTER)
        push()
        rotate(this.body.angle)
        translate(this.body.position.x,this.body.position.y)
        fill ("grey")
        rect(0,0,this.width,this.height)

        pop()
    }


}


