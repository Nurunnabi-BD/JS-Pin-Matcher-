const input = document.querySelector(".first-input");
const generateBtn = document.querySelector(".Generate-div");
const output = document.querySelector(".output");
const removeBtn = document.getElementById("removebtn");
const submitBtn = document.querySelector(".submit-btn");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const tryLeft = document.querySelector(".tryLeft");
const timesLeft = document.querySelector(".times-left");


function generatePin(){
    let rendomNumber = Math.floor(Math.random() * 9000 + 1000);
    input.value = rendomNumber;
    generateBtn.style.backgroundColor = "green";
    
}

function showKeyPadInput(number){
    let chances = output.innerHTML;
    if(chances  >= 0){
        if(input.value === ""){
            alert("Please generate a pin first!");
        } else{
            output.value += number;
        }
        if(number === "C"){
            output.value = "";
        }
    }
}

function removeSingleDigit() {
    if (input.value === "") {
      alert("Please generate a pin first!");
    } else {
        let currentValue = output.value;
        output.value = currentValue.slice(0, -1);
        console.log(currentValue);
    }
  }

  function submit(){
    if(input.value === output.value){
        correct.style.display = "block";
        wrong.style.display = "none";
        submitBtn.style.backgroundColor = "green";
        submitBtn.style.color = "white";
        output.style.border = "2px solid rgb(5, 118, 189)";
        generateBtn.style.backgroundColor = "green";
        submitBtn.disabled = true;
    }else{
        wrong.style.display = "block";
        correct.style.display = "none";
        output.value = "";
        submitBtn.style.backgroundColor = "red";
        submitBtn.style.color = "white";
        output.style.border = "2px solid red";
        generateBtn.style.backgroundColor = "red";
        tryLeftFunction()
    }
  }

function tryLeftFunction(){
    let chance = tryLeft.innerHTML;
    if(chance > 1){
        tryLeft.innerHTML = --chance;
    } else{
        timesLeft.innerHTML = " *No more Chance."
        submitBtn.disabled = true;
        generateBtn.disabled = true;
    }
}

submitBtn.addEventListener("click", submit);
generateBtn.addEventListener("click", generatePin);
