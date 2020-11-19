class Block {
  constructor(x, y, width,height) {
    var options = {
        isStatic:false,
        'restitution':0.3 ,
        'friction':0.5,
        'density':1.2
    }

    this.body = Bodies.rectangle(x, y, width,height , options);
    
  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
   translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
    strokeWeight(7);
    fill("red");
    stroke("black")
    //fill("black");
    rect(0, 0, this.width,this.height);
    //imageMode(CENTER)
    //image(this.image,0,0,105,105);
    pop();
  }
};