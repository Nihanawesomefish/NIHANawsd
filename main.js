function setup(){
canvas=createCanvas(400,400);
canvas.center();
background("white");
}
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
function draw(){
    strokeWeight(7);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function check_sketch(){

}
function updateCanvas(){
background="white";

}
Math.floor