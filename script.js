let canvas = document.querySelector('canvas');

let ctx = canvas.getContext("2d");

// ctx.fillStyle= "blue";
// ctx.fillRect(0,0,100,100);

// ctx.fillStyle="orange"
// ctx.fillRect(100,100,100,100);

// ctx.strokeRect(200,200,100,100);

function randomNumber(){
    return Math.floor(Math.random()*400);
}

function shape(){
    // ctx.lineCap=round;

ctx.beginPath();
ctx.lineTo(randomNumber(),randomNumber());
ctx.lineTo(randomNumber(),randomNumber());
ctx.lineTo(randomNumber(),randomNumber());
ctx.lineTo(randomNumber(),randomNumber());
ctx.fillStyle="blue";

ctx.fill();
}

shape()

ctx.font = "100px helvetica";
ctx.strokeText('SM', 100,100);

document.body.addEventListener('click', click);
function click(e){
    console.log(e.clientX);
    e.clientX.style.backgroundColor = "red";
}