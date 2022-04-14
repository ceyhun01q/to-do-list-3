const tasklistbox = document.querySelector(".tasklistbox");
const button =  document.querySelector(".btn2");
const input = document.querySelector(".inpt1");
const listContainer = document.querySelector(".list-container");
const buttonContainer = document.querySelector(".button-container")
const button2 = document.querySelector(".btn3")

const skl2 = document.querySelector(".skl2");
const skl1 = document.querySelector(".skl1")
const skl3 = document.querySelector(".skl3")
const skl4 = document.querySelector(".skl4")


button.addEventListener("click",go)

function go (){
    tasklistbox.style.display = "block"
    listContainer.style.height = "450px"
    let li = document.createElement("li");
    li.classList.add("li")
    li.innerText = input.value;
    tasklistbox.appendChild(li)


    if(input.value == ""){
        alert("nese yaz")
    }
    else{
        input.value = ""
    let deleteButton = document.createElement("div")
    deleteButton.classList.add("deleteButton")
    li.appendChild(deleteButton)
    deleteButton.innerHTML = "&times;"
    deleteButton.addEventListener("click",function(){
        tasklistbox.removeChild(li)


    })

    }
    
}


const  azerbaycan = document.querySelector(".a");

function fnClick (){
    skl1.style.display = "block";
    skl2.style.display = "none";
     skl3.style.display = "none";

     let list, i, switching, b, shouldSwitch;
     list = document.querySelector(".tasklistbox");
     switching = true;
     while (switching) {
         switching = false;
         b = list.querySelectorAll(".li");
         for (i = 0; i < (b.length - 1); i++) {
             shouldSwitch = false;
            if (b[i].innerText.toLowerCase()> b[i + 1].innerText.toLowerCase()) {
              shouldSwitch = true;
               break;
             }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
         }
    }

    azerbaycan.removeEventListener("click",fnClick);
    azerbaycan.addEventListener("click", onClick);

}

function onClick (){
    skl1.style.display = "none";
    skl2.style.display = "none";
    skl3.style.display = "block";

    let list, i, switching, b, shouldSwitch;
    list = document.querySelector(".tasklistbox");
    switching = true;
    while (switching) {
        switching = false;
        b = list.querySelectorAll(".li");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i + 1].innerText.toLowerCase()>b[i].innerText.toLowerCase()) {
              shouldSwitch = true;
              break;
           }
       }
       if (shouldSwitch) {
           b[i].parentNode.insertBefore(b[i + 1], b[i]);
           switching = true;
          }
    }
    azerbaycan.removeEventListener("click", onClick);
    azerbaycan.addEventListener("click",fnClick)
}
azerbaycan.addEventListener("click", fnClick);

