class Ground{
    constructor(){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0  
           }
           this.body = Bodies.rectangle(400,350,800,50,options);
           World.add(world,this.body); 
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
     }
}