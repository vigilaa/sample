var buttontwo=document.querySelector('.button2');
buttontwo.addEventListener('click',()=>{
    alert("Java Script1");
})

var button1=document.querySelector('#btn1');
button1.onclick=function(){
    alert("Example 1 clicked");
};


const newBackgroundColor=document.querySelector('.Table-3');
function changebgColor(){
    newBackgroundColor.style.backgroundColor='blue';
}
newBackgroundColor.addEventListener("mouseover",changebgColor);
