class Block{
    constructor(x,y){
       var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0  
       }
       this.body = Bodies.rectangle(x,y,30,40,options);
       World.add(world,this.body);
    }
    display(){
       if(this.body.speed<3){
         var pos = this.body.position;
         rectMode(CENTER);
         rect(pos.x,pos.y,30,40);
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            pop();
        }

    }
}