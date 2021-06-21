class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trialImage=loadImage("sprites/smoke.png")
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
if(this.body.velocity.x>10 && this.body.position.x>250){
    var positionArray=[this.body.position.x,this.body.position.y,]
      
    this.trajectory.push(positionArray)
}

    for(var a = 0;a<this.trajectory.length;a=a+=1){
         image(this.trialImage,this.trajectory[a][0],this.trajectory[a][1])  


    }
console.log(this.body.velocity.x)
    super.display();
  }
}
