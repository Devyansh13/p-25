class Paper{
    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':5.0,
            'density':1.9,
        }
        this.body = Bodies.circle(x, y,radius,options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        ellipseMode(RADIUS);
        fill("aqua")
        ellipse(0,0,70);
        pop();
        //imageMode(center);
        image(this.image,this.body.position.x-30,this.body.position.y-90,70);
        this.body.Visibility=false;
      }
}