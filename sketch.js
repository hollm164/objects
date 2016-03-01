//========================
//	City
//========================

var buildings = [];

//your sun/moon object:
var sun = {
	x: 400,
	y: 200,
	c: "#ffbb33",
	diameter: 200

};

//your building object:
function building(x,y,c,w,h){
	this.x = x;
	this.y = y;
	this.c = c;
	this.w = w;
	this.h = h;
	this.drawBuilding = function(){
		fill(this.c);
		rect(this.x, this.y, this.w, this.h,5);
	}
};

function setup() {
	createCanvas(windowWidth, windowHeight);

	sun.x = windowWidth/2;

	for (var i=0; i<20; i++){
		buildings.push (new building(random(0,windowWidth), random(300,windowHeight),
		" #00334d", random(100,200),height*i));
	}

}

function draw(){
	background("#b3e6ff");

	noStroke();
	fill(sun.c);
	ellipse(sun.x, sun.y, sun.diameter, sun.diameter);

for (var i=0; i < buildings.length; i++){
	buildings[i].drawBuilding()
}



}
