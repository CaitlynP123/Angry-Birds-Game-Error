class Bird {
    constructor(x,y)
    {
        var option = {
            restitution : 0.5,
            friction : 1,
            density : 1.5
        }

        this.body = Bodies.rectangle(x,y,50,50,option)
        World.add(world,this.body)
 
    }

    display()
    {
        var pos = this.body.position;
        pos.x = mouseX
        pos.y = mouseY
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill("red")
        rect(0,0,50,50);
        pop();
       
    }
}