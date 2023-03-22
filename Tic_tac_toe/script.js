// Global Variable
let turn = "X";
let gameOver = false;
// Selector
let cellElements = document.querySelectorAll('.blocks');
    cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick)
    })

// Main Click function
function handleClick(e){
    cell = e.target;
    if ((gameOver == true) || cell.innerHTML !== "") {
        return;
    }
    placeMark(cell);
    checkWin();
    if (!gameOver) {
        document.getElementById('turn').innerText = "Turn for " + turn;
    }else{
        return;
    }
    checkDraw();

}

// player change will takes place
function playerChange() {
    turn = turn === "X"?"O":"X";
    cell.classList.add('disabled');
    cell.classList.add('ybl')
    cell.classList.add('ybb')
    cell.classList.add('ybr')
    cell.classList.add('ybt')
}
// Input in the box will show
function placeMark(cell) {
    cell.innerHTML = turn;
    playerChange();
}
// Winning logic refer winning combination in the global variable
// cellElements[e[0]] -> is the first index of the 2d Array
// cellElements[e[1]] -> is the second index of the 2d Array 
// cellElements[e[2]] -> is the third index of the 2d Array




function checkWin() {
   
    const winningCombination = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]    
    
    winningCombination.forEach(e =>{
        if ((cellElements[e[0]].innerText === cellElements[e[1]].innerText) && (cellElements[e[1]].innerText === cellElements[e[2]].innerText) && cellElements[e[0]].innerText !== "") {
            document.getElementById('turn').innerText = cellElements[e[0]].innerText + " Won"
            gameOver =true;
            console.log("Winner is player " + cellElements[e[0]].innerText);
            return;
        }
    })
}
function checkDraw() {
    let draw = Array.from(cellElements).filter(
        (item) => item.innerHTML === "").length === 0;
        if(draw){
            console.log(draw);
            document.getElementById('turn').innerText = "Game is draw";
            gameOver = true;
            // console.log(draw);
            return;
    }
    }

// restart
document.getElementById('btn').addEventListener('click', restart)

function restart() {
    gameOver = false;
    turn = "X"
    document.getElementById('turn').innerText = "Turn for " + turn;
    Array.from(cellElements).forEach(
        (item) => item.innerHTML = "")
    cellElements.forEach((item) => item.classList.remove('disabled'))
    cellElements.forEach((item) => item.classList.remove('ybl'))
    cellElements.forEach((item) => item.classList.remove('ybr'))
    cellElements.forEach((item) => item.classList.remove('ybb'))
    cellElements.forEach((item) => item.classList.remove('ybt'))
}
