let grid_boxes = []
let firstNumber= ""
let secondnumber= ""
let operator = ""
let selectedvalue =""
let isfirstnumber = true
let result =""

let display_content = document.querySelector(".display")
let result_content = document.querySelector(".result")

function creatingboxes(){
    let grid_container = document.getElementById("grid-container")
    grid_container.innerHTML=" "
    for(let i=0;i<=15;i++){
        let box= document.createElement("div")
        box.classList.add("grid-item");
        box.textContent= i

        box.addEventListener("click",function(){
         selectedvalue = box.textContent
         valuesStoring()
        })


        grid_container.appendChild(box)
        grid_boxes.push(box)
    }
    grid_boxes[10].textContent= "+"
    grid_boxes[11].textContent= "-"
    grid_boxes[12].textContent= "x"
    grid_boxes[13].textContent= "÷"
    grid_boxes[14].textContent= "="
    grid_boxes[15].textContent= "Clear"
    
} 

function valuesStoring(){

    if (selectedvalue=="+"){
        operator = selectedvalue
        display_content.textContent= operator
        isfirstnumber= false;
         }
         
         if (selectedvalue=="-"){
            operator = selectedvalue
            display_content.textContent= operator
            isfirstnumber= false;
          }
          if (selectedvalue=="x"){
            operator = selectedvalue
            display_content.textContent= operator
            isfirstnumber= false;
             }
             if (selectedvalue =="÷"){
                operator = selectedvalue
                display_content.textContent= operator
                isfirstnumber= false;
                 }

 if (selectedvalue !== "+" && selectedvalue !== "-" && selectedvalue !== "x" && selectedvalue !== "÷" && selectedvalue !== "=" && selectedvalue !== "Clear") {

    if(isfirstnumber){
        firstNumber+= selectedvalue
        display_content.textContent= firstNumber
    }
    else if(operator){
        secondnumber+= selectedvalue
        display_content.textContent=secondnumber
    }  
  
}
if (selectedvalue === "=") {
    result = operate();
    result_content.textContent = `Result: ${result}`; // Show result
}

// Handle "Clear"
if (selectedvalue === "Clear") {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    selectedvalue = "";
    isFirstNumber = true;
    result = "";
    display_content.textContent = "";
    result_content.textContent = "";
}
}

function operate(){
    let num1 = parseInt(firstNumber)
    let num2 = parseInt(secondnumber)
    switch(operator){
        case "+":
            return num1+num2
            case "-":
                return num1- num2
                case "x":
                    return num1*num2
                    case "÷":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                resultDisplay.textContent = "Error: Division by zero";
                return "Error";
            }
        default:
            return "";
    } 
}