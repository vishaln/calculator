//Count All Button Lenth Using QuerySelectorAll
let buttonContainer = document.querySelectorAll('.btn');   

alert(buttonContainer.length)

// Looping Button Alignment Using For Loop 
for (let x = 0; x < buttonContainer.length; x++) {
    buttonContainer[x].addEventListener("click", showConsole);
}

// Showing Console
function showConsole() {
    if(this.dataset.action != undefined) {
        console.log(this.dataset.action)
    }else {
        console.log(this.innerHTML)
    }
}
