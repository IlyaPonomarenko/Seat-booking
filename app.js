const btn = document.querySelector("#button")
const mainDiv = document.querySelector("#div")

const divCreate = function(){          //Creating Divs with string numbers inside them
    for (var a=1; a < 31; a++){
        const innerDiv = document.createElement("div");
        const nums = document.createTextNode(`${a}`);
        innerDiv.appendChild(nums);
        innerDiv.setAttribute('class','item-vapaa')
        mainDiv.appendChild(innerDiv); // Adding them one by one to the main div
    }
}
divCreate();


btn.onclick=function(){
const placeNum = document.getElementById("input").value; //Getting the value from the user
const divNum = mainDiv.children[placeNum-1].textContent; //Getting the value from the div (-1 to match the users choise)
const selDiv = mainDiv.children[divNum-1]                // Selecting the div to check if it is already occupied

    if(!selDiv.classList.contains("item-varattu")){
        
        if (placeNum==divNum){ 
            mainDiv.children[divNum-1].setAttribute('class','item-varattu')
                }
        } 
    
}


