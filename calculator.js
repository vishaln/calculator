//Count All Button Lenth Using QuerySelectorAll
const calculator = document.querySelector(".calculator-main");
const calcKeys = calculator.querySelector(".calc-keys");
const calcDisplay = document.querySelector(".calc-display");
let sum = 0;
let displayClickedValue;
let action = true;
let currentOperator = false;

calcKeys.addEventListener("click", ele => {
  if (ele.target.matches("button")) {
    // store element target into calcKey var
    const calcKey = ele.target;

    // store data action into calcAction var
    const calcAction = calcKey.dataset.action;

    // get Clicked value from textContent property
    const calcContent = calcKey.textContent;

    // get Clicked value from textContent property
    displayClickedValue = calcDisplay.value;

    // In case of no data-action property, it is a number
    if (!calcAction) {
      if (displayClickedValue === "0") {
        // Current calcContent is 0 and its assigned to calcDisplay
        calcDisplay.value = calcContent;
      } else {
        currentOperator = false;
        // on data action add number in display area
        calcDisplay.value = displayClickedValue + calcContent;
      }
    }

    // In case of data-action property as operator
    if (
      calcAction === "addition" ||
      calcAction === "subtract" ||
      calcAction === "multiply" ||
      calcAction === "divide"
    ) {
      console.log("calcDisplay.value", calcDisplay.value);
      // Checking multiplue 1 time operator
      if (currentOperator) {
        calcDisplay.value = displayClickedValue;
      } else {
        calcDisplay.value = displayClickedValue + calcContent;
      }

      // split string and operator in to seperate array
      const splitNumber = calcDisplay.value.split(/\D/g);
      const splitOperator = calcDisplay.value.split(/\d/g).filter(Boolean);

      if (splitOperator.length > 1) {
         // calculate sum on click of second operator
        const calculatdData = this.calculateSum(
          parseFloat(splitNumber[0]),
          splitOperator[0],
          parseFloat(splitNumber[1])
        );
        console.log(calculatdData)
        // assign sum before second charactor
          calcDisplay.value =
          calculatdData + calcDisplay.value[calcDisplay.value.length - 1];
          console.log(calculatdData)
      }
    }

    // In case of data-action property as decimal
    if (calcAction === "decimal") {
      calcDisplay.value = displayClickedValue + ".";
    }
    // In case of data-action property as clear
    if (calcAction === "clear") {
      calcDisplay.value = "0";
    }
    // In case of data-action property as calculate
    if (calcAction === "calculate") {
      // split string and operator in to seperate array
      const splitNumber = calcDisplay.value.split(/\D/g);
      const splitOperator = calcDisplay.value.split(/\d/g).filter(Boolean);
      // calculate sum on click of second operator
      const calculatdData = this.calculateSum(
       
        parseFloat(splitNumber[0]),
        splitOperator[0],
        parseFloat(splitNumber[1])
      );
      console.log(calculatdData.toString)
      // assign sum before second charactor
      calcDisplay.value = calculatdData.toString();
    }
  }
});

calculateSum = (firstVal, operator, secondVal) => {
  let sum = "";
  if (operator === "+") {
    sum = firstVal + secondVal;
  } else if (operator === "-") {
    sum = firstVal - secondVal;
  } else if (operator === "*") {
    sum = firstVal * secondVal;
  } else if (operator === "/") {
    sum = firstVal / secondVal;
  }
  return sum;
};
