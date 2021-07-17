class Particle{
    constructor(x,y,r){
    var options = {
     friction:0.01,
     restitution:0.5
    }
    this.r = r;
    this.body = Bodies.circle(x,y,this.r,options);
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);

    }

    display(){
        var position = this.body.position;
        push()
        translate(position.x,position.y);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}