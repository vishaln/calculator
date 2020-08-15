//Count All Button Lenth Using QuerySelectorAll
const calculator = document.querySelector('.calculator-main');
const calcKeys = calculator.querySelector('.calc-keys');
const calcDisplay = document.querySelector('.calc-display');
let sum = 0; 
let stroevalue;
let displayClickedValue;
let operand = false;
let action = true;

calcKeys.addEventListener('click', ele=> {
    debugger
    if(ele.target.matches('button')){
        // store element target into calcKey var
        const calcKey = ele.target;   
        
        // store data action into calcAction var
        const calcAction = calcKey.dataset.action;

        // get Clicked value from textContent property
        const calcContent = calcKey.textContent;
        
        // get Clicked value from textContent property
        displayClickedValue = calcDisplay.value;
        
        // In case of no data-action property, it is a number
        if(!calcAction) {
            if(displayClickedValue === '0') {
                // Current calcContent is 0 and its assigned to calcDisplay 
                 calcDisplay.value = calcContent;
            } else {
                // on data action add number in display area
                calcDisplay.value = displayClickedValue + calcContent;
                // sum += parseFloat(displayClickedValue);
                if (operand === 'subtract') {
                    sum -= parseFloat(calcContent);
                 }
                 if (operand === 'addition') {
                    sum += parseFloat(calcContent);
                 } 
                 
                 if (operand === 'multiply') {
                    sum *= parseFloat(calcContent);
                 }
                 
                 if (operand === 'divide') {
                    sum *= parseFloat(calcContent);
                 }  
               
            }
        } 
        
        // In case of data-action property as operator 
        if(calcAction === 'addition' || calcAction === 'subtract' || calcAction === 'multiply' || calcAction === 'divide') {
            console.log('this is operator');
            calcDisplay.value = displayClickedValue + calcContent;
             if (calcAction === calcAction) {
                if(action) {
                    sum += parseFloat(displayClickedValue);
                    action = false;
                } 
               
                operand = calcAction;
             } 
            
        }
        // In case of data-action property as decimal 
        if(calcAction === 'decimal') {
            console.log('this is decimal');
            calcDisplay.value = displayClickedValue + '.';
        }
        // In case of data-action property as clear
        if(calcAction === 'clear') {
            calcDisplay.value = '0';
        }
        // In case of data-action property as calculate
        if(calcAction === 'calculate') {
             calcDisplay.value = sum;
        }
    }
});