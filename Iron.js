class Iron {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 80, 80, options);
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('white')
      fill('yellow')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };




















