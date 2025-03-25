let p = [];
const renderscale = 4; 
function setup() {
  const canvas = createCanvas(windowWidth/renderscale, windowHeight/renderscale);
  canvas.position(0, 0, "absolute");
  canvas.style("z-index", "-100");
  canvas.style("width", "100%")
  canvas.style("height", "100%")


  canvas.style("filter", "blur(1px)");


  for( let i = 100; i >= 0 ; --i){
    p.push( new raindrop() );
  }
  for( let i = p.length - 1; i >= p.length/2 ; --i){
    p[i].y = random(height/1.5);
  }
  
}

function draw() {
  background(0);
  noStroke();
  fill(200,150);
  for( let i = p.length - 1; i >= 0 ; --i){
    p[i].work();
    if( p[i].y > height*1.2 || p[i].a < 0 ) {
      p.splice(i, 1);
    }
  }
  for( let i = 0 ; i < 5 ; ++i ) {
    p.push(new raindrop() ) ;
  }
}


class raindrop{
  constructor(){
    this.x = random(width*1.5);
    this.y = 0;
    this.dx = -0.3;
    this.dy = 1; 
    this.a = random(255);
    this.da = random(10);
    this.fallspeed = random(4);
    this.text = "/" ; //String.fromCharCode(int(random(65,128)));
}
display(){
    textSize(5);
    fill(200, this.a);
    text(this.text, this.x, this.y);
    this.x += this.dx*this.fallspeed;
    this.y += this.dy*this.fallspeed;
    this.a -= this.da;
}

work(){
    //   this.text = String.fromCharCode(int(random(65,128)));
    this.display();
  }
}