class Particles{
    constructor(x){
        var options = {
            restitution: 0.2,
            friction: 0,
            isStatic:false
        }
        this.body = Bodies.circle(x, 0, 15, options);
        this.r = 20;
        this.color = color(round(random(20, 255)), round(random(20, 255)), round(random(20, 255)));
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        console.log(pos)
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
}