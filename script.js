var input = document.getElementById("number");
var convertBtn = document.getElementById("convert-btn");
var answerDiv = document.querySelector(".answer-div");
var answerDivP = document.querySelector(".answer-div p");

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        convertBtn.click();
    }
})

convertBtn.addEventListener("click", processInput);

function processInput() {
    let inputValue = parseInt(input.value);
    if (!inputValue || inputValue < 0 || inputValue > 3999) {
        answerDiv.style.backgroundColor = "red";
        if (!inputValue){
            answerDivP.innerText = `
            Please enter a valid number
        `
        } else if(inputValue <= -1) {
            answerDivP.innerText = `
            Please enter a number greater than or equal to 1
        `
        }else{
            answerDivP.innerText = `
            Please enter a number less than or equal to 3999
        `
        }
        
    } else {
        answerDiv.style.backgroundColor = "#90692E";

        answerDivP.innerText = `
            ${romanNumberConv(inputValue)}
        `;
    }
}


function romanNumberConv(number, answer="") {
    let numberCopy = number;
    const romans = {
        "units": ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        "tens": ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        "hundreds": ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        "thousand": ["M", "MM", "MMM"]
    };

    const romanLevels = Object.keys(romans);

    for (let power = 3; power >= 0; power--) {
        let value = Math.floor(numberCopy/10**(power));
        if (value > 0) {
            answer += romans[romanLevels[power]][value - 1];
        } else {
            answer += "";
        }
        numberCopy -= value * 10**(power);
    }
    return answer;
}
