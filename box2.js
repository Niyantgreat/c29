class Box2 {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
this.image=loadImage("orangebox.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //console.log(this.body.speed);
    
      push();
      if(this.body.speed>3){
        World.remove(world,this.body)
        this.Visibility=this.Visibility-100
           }
       
        tint (255,this.Visibility)   
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill ("red")
   
      image(this.image,0, 0, this.width, this.height);
      pop();
     
        
       
      
    }
    score(){

      if (this.Visibility<0 && this.Visiblity>-105){
        score++;
        
          }
        
    }
  };
  