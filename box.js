class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':10.0,
          'density':1.0
      }
      this.body=Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world,this.body);
      
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red")
      fill("red");
      rect(0, 0, this.width, this.height);
      image(this.image,this.body.position.x,this.body.position.y,70);
      pop();
    }
  };