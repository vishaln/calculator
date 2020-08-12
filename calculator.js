//Count All Button Lenth Using QuerySelectorAll
const calculator = document.querySelector('.calculator-main');
const calcKeys = calculator.querySelector('.calc-keys');
const calcDisplay = document.querySelector('.calc-display');
calcKeys.addEventListener('click', ele=> {
    if(ele.target.matches('button')){
        // store element target into calcKey var
        const calcKey = ele.target;

        // store data action into calcAction var
        const calcAction = calcKey.dataset.action;

        // get Clicked value from textContent property
        const calcContent = calcKey.textContent;

        // get Clicked value from textContent property
        const displayClickedValue = calcDisplay.textContent;
        console.log(displayClickedValue);
        
        // In case of no data-action property, it is a number
        if(!calcAction) {
            console.log('this is number');
            if(displayClickedValue === '0') {
                // Current calcContent is 0 and its assigned to calcDisplay 
                calcDisplay.textContent = calcContent;
            } else {
                 // on data action add number in display area
                calcDisplay.textContent = displayClickedValue + calcContent;
            }
        }
        // In case of data-action property as operator 
        if(calcAction === 'addition' || calcAction === 'subtract' || calcAction === 'multiply' || calcAction === 'divide') {
            console.log('this is operator');
        }
        // In case of data-action property as decimal 
        if(calcAction === 'decimal') {
            console.log('this is decimal');
            calcDisplay.textContent = displayClickedValue + '.';
        }
        // In case of data-action property as clear
        if(calcAction === 'clear') {
            calcDisplay.textContent = '0';
        }
        // In case of data-action property as calculate
        if(calcAction === 'calculate') {
            console.log('this is calculate');
        }

        // // In case of data-action property as calculate
        // if(calcAction === 'calculate') {
        //     console.log('this is calculate');
        // }

    }
});

//let calculationVal;

// // Looping Button Alignment Using For Loop 
// for (let x = 0; x < buttonContainer.length; x++) {
//     buttonContainer[x].addEventListener("click", showConsole);
// }

// // Showing Value In input 
// function showConsole() {
//    inputValue.value += this.innerHTML;
// }

// // Calculation Input Value 
// document.getElementById("calculation").addEventListener("click", showResult);
// function showResult() {

//     calculationVal = inputValue.value;
//     for(count = 0; count < calculationVal.length; count++) {
//         if(calculationVal[count]) {
//             console.log("true")
//         }else {
//             alert("false")
//         }
//     }
// }


// // Clear Input Value Functionlity 
// document.getElementById("clearCalcValue").addEventListener("click", clearResult);
// function clearResult() {
//     inputValue.value = "";
// }
