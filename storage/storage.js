const inputDate = document.getElementById("date");
const inputContent = document.getElementById("content");
const submitButton = document.getElementById("submitBtn");


submitButton.addEventListener("click", () => {
    var date = inputDate.value;
    const content = inputContent.value;
    const data = { 'date_' : date , 'content' : content };
    var $myData=JSON.parse(localStorage.getItem("myData"));
    if(!$myData){
        $myData=[];
    }else{
        $myData.push(data)
    }
    localStorage.setItem("myData", JSON.stringify($myData));

    console.log($myData)
});
 const retrieveButton = document.getElementById("retrieveBtn");
 function retrieve(){
     var specificData = document.getElementById("specificdata").value;
     
     var myData = JSON.parse(localStorage.getItem("myData"))
 
 
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].date_ === specificData    ) {
        alert(myData[i].content)
        }
    }

 }

