window.onerror = function () {
    document.getElementById('display').value = "SyntaxError";
};
// for keyboard press
document.addEventListener('keydown' , (e) =>{
    if (e.key == "/" ||
        e.key == "%" ||
        e.key == "*" ||
        e.key == "-" ||
        e.key == "+" ||
        e.key == "." ||
        e.key <= 9) {
           display.value += e.key;
           document.getElementById('display').value = display.value; 
        }else if(e.key == "Backspace" || e.key == "Delete"){
            clearOne();
        }else if(e.keyCode == 67 || e.keyCode == 27){
            clearScreen();
        }else if(e.key == "=" || e.key == "Enter"){
            calculate();
        }
})

// for calculation the number but catch the syntex error and show on display is not completed yet
function calculate() {
    let display = document.getElementById('display').value;
    display = eval(display);
    document.getElementById('display').value = display;
}
// clear the screen 1 by 1 
function clearOne() {
    if (display.value){
        display.value = display.value.slice(0,-1);
    }
}

// Clear the Screen when "Ac" is pressed
function clearScreen() {
    document.getElementById('display').value = "";
}




