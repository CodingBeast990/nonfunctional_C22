class Cannonball{

    constructor(x, y){

       this.radius = 30;
       var options = {
        isStatic:true
       }
       this.body = Bodies.circle(x,y,this.radius);
       World.add(world,this.body);
       this.image = loadImage("./assets/cannonball.png");

    }

    display(){
        var pos= this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,this.radius,this.radius);
        pop();
    }

    shoot(){
        var newAngle = cannon.angle - 28;
        newAngle = newAngle*(3.14/180); // 1 degree = pi/180 ;degree to radian conversion
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, 
            {
                x:velocity.x*(180/3.14),// radian to degree
                y:velocity.y*(180/3.14)
            })

    }
    
    

}