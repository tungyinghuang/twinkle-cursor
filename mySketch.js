var stars = [];
var points =[];
var canvas;





function windowResized(){

  resizeCanvas(windowWidth, windowHeight);
  setupStars();
}
function setup() {
  canvas= createCanvas(windowWidth, windowHeight);

  canvas.position(0,0);
  canvas.style('z-index','-1');

  setupStars();
}

function setupStars(){

  for (var i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }
}


function draw() {
  background(0);

  let point = {
    x: mouseX,
    y: mouseY
  };

  points.push(point);

  if (points.length > 50) {
    points.splice(0,1);
  }



   for (var j = 0; j < points.length; j++){

	 for (var i = 0; i < stars.length; i++) {
     if(stars[i].contain(points[j].x,points[j].y,j,j)){
       stars[i].update();
       stars[i].draw();
     }
	  }
   }


}


// star class //
class Star {

	constructor() {
    this.x = random(width);
    this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
    //this.r = 100;


	}
  contain(x,y,j){

  		 this.d= dist(x,y,this.x,this.y)
  		 if(this.d<j*1.5){
  		 	return true
  		 }
  		 else	{
  			return false
  		 }


  }

  update(){
    this.t += 0.1;
  }
  draw() {
    fill(240)
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x,this.y, scale, scale);

	}
}
