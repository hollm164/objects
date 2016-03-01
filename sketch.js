//========================
//	City
//========================

var buildings = [];

var stars = [];

//your sun/moon object:
var sun = {
	x: 900,
	y: 150,
	c: "#c2c2d6",
	diameter: 100

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
		rect(this.x, this.y, this.w, this.h,4);

	}
};

//star object:
function star(x,y,c,diameter,diameter){
	this.x = x;
	this.y = y;
	this.c = c;
	this.diameter = diameter;
	this.drawStar = function(){
		fill(this.c);
		ellipse(this.x,this.y,this.diameter,this.diameter);
	}

};

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (var i=0; i<20; i++){
		buildings.push (new building(random(0,windowWidth), random(300,windowHeight),
		"#3d3d5c", random(100,200),height*i));
	}

	for (var i=0; i<300; i++){
		stars.push (new star(random(0, windowWidth), random(0, windowHeight),"white",random(1,5), random(1,5)));
	}
}

function draw(){
	background("#002233");

	for (var i=0; i < stars.length; i++){
		stars[i].drawStar()
	}

	noStroke();
	fill(sun.c);
	ellipse(sun.x, sun.y, sun.diameter, sun.diameter);

for (var i=0; i < buildings.length; i++){
	buildings[i].drawBuilding()
}



}
