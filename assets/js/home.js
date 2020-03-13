document.getElementById('datePicker').valueAsDate = new Date();

let deletetask = document.getElementById("delete-task");
let count = 0;
let deleteEle = new Array();
deletetask.addEventListener("click", function(e){

    console.log("delete button");
    //getting all the checked value
    let check = document.querySelectorAll(".check");

    for(let i of check){
        if(i.checked){
            
            deleteEle.push(i.getAttribute("value"));
            count++;
        }
    }
    deletetask.setAttribute("formaction", `/deletetask/${deleteEle}`);
    // alert(count);
    // console.log(arr);
});



let allList = document.getElementsByClassName("list")
for(let i=0; i<allList.length; i++){
  // setting the background color as per the category
    console.log(allList[i].querySelector("#list-category").innerText);
    if(allList[i].querySelector("#list-category").innerText == "Personal"){
        allList[i].querySelector("#list-category").style.backgroundColor = "rgb(127, 192, 127)";
    }
    if(allList[i].querySelector("#list-category").innerText == "Work"){
        allList[i].querySelector("#list-category").style.backgroundColor = "rgb(240, 159, 105)";
    }
    if(allList[i].querySelector("#list-category").innerText == "Important"){
        allList[i].querySelector("#list-category").style.backgroundColor = "rgb(228, 61, 61)";
    }
    if(allList[i].querySelector("#list-category").innerText == "Meeting"){
        allList[i].querySelector("#list-category").style.backgroundColor = "rgb(211, 211, 129)";
    }
    if(allList[i].querySelector("#list-category").innerText == "Casual"){
        allList[i].querySelector("#list-category").style.backgroundColor = "rgb(104, 161, 161)";
    }
}
