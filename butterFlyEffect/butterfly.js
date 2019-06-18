var yoff = 0;

function setup() {
  
    let myCanvas =   createCanvas(600,450);
    myCanvas.parent("myContainer");
}

function draw() {
    background(51);
    translate(width/2,height/2);
    rotate(PI/2);
    stroke(255);
    fill(255,50);
    strokeWeight(1);
    point(0,0);
    var r = 150;
    var xoff = 0;
    var dx = 0.1;
    var da = PI/100;
    c1 = color(255, 204, 0);
    c2 = color(255);
    

    beginShape();
    for(var a = -PI/2; a<=PI/2; a+=da){
        var n = noise(xoff,yoff);
        r = sin(2*a)*map(n,0,1,100,200);
        var c = lerpColor(c1, c2, r);
        stroke(c);
        var x = r*cos(a);
        var y = r*sin(a);
        xoff+=dx;
        vertex(x,y);
    }
    
    for(var a = PI/2; a <= 3*PI/2; a+=da){
        var n = noise(xoff,yoff);
        r = sin(2*a)*map(n,0,1,100,200);
        var c = lerpColor(c1, c2, r);
        stroke(c);
        var x = r*cos(a);
        var y = r*sin(a);   
        xoff-=dx;
        vertex(x,y);
    }
    endShape();

    yoff += 0.03;
}

