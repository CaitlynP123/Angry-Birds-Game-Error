class Ground {
    constructor(x,y,width,height){

        var ground_options ={
            isStatic: true
        }    

        this.ground = Bodies.rectangle(x,y,width,height, ground_options)
        World.add(world, this.ground)
        this.w = width
        this.h = height
    }

    draw(){
        var pos = this.ground.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);    
    }
}