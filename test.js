var content = document.getElementById("content");
var button = document.getElementById("button");
button.addEventListener("click",()=>{


    if(content.className=="open"){
        content.className="";
        button.innerHTML="Show More";
    }else
    {
    content.className="open";
    button.innerHTML="Show Less";
}
})
