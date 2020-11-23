
const barsBtn = document.getElementById("bars");
const listSetting = document.getElementById("list-setting");
const closeList= document.querySelector(".close");

//function to show the hidden list

    barsBtn.addEventListener("click", function showList(){
    listSetting.style.display= "block";
    barsBtn.classList.add("change-btn");
    closeList.style.display= "block";
   });
   
// function to hide the shown list

    closeList.addEventListener("click", function hideList(){
    listSetting.style.display= "none";
    barsBtn.classList.remove("change-btn");
    closeList.style.display= "none";
   });


 
  


