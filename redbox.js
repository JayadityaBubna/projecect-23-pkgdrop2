class redbox{
    constructor(x,y,width,height){
        
        var opt={
            isStatic:true
        }
     this.box= Bodies.rectangle(x,y,width,height,opt);
     World.add(world,this.box);
     this.width=width;
     this.height=height;

     

    }

    display(){
       push();
        rectMode(CENTER);
        fill("red");
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
       pop();
    }
}