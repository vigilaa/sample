/*const revealbtn=document.querySelector('#reveal');
const hidden=document.querySelector('#content');

function revealContent(){
    if(hidden.classList.contains("reveal-btn")){
        hidden.classList.remove("reveal-btn")
    }else {
        hidden.classList.add("reveal-btn")
    }
}*/
// Illustration of Promise.allSettled()
// Method in Javascript with Example


var x=5;
var y=6;
function addFunction(){
    let z=x+y;
    console.log(z);
}

function subFunction(){
    let z=x-y;
    console.log(z);
}
subFunction();
addFunction();