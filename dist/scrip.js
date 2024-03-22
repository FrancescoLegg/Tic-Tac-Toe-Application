"use strict";
const player1 = "x";
const player2 = "o";
let xToMove = true;
const clear = document.getElementById("clear");
const space1 = document.getElementById("space1");
const space2 = document.getElementById("space2");
const space3 = document.getElementById("space3");
const space4 = document.getElementById("space4");
const space5 = document.getElementById("space5");
const space6 = document.getElementById("space6");
const space7 = document.getElementById("space7");
const space8 = document.getElementById("space8");
const space9 = document.getElementById("space9");
addEventListener("click", (e) => {
    const targetElement = e.target;
    const emptySpace = document.getElementById(targetElement.id);
    if (emptySpace.innerText == "" && xToMove == true) {
        emptySpace.innerHTML = player1;
        xToMove = false;
    }
    else if (emptySpace.innerText == "" && xToMove == false) {
        emptySpace.innerHTML = player2;
        xToMove = true;
    }
    if (xToMove == false) {
        if (PossibleWins(player1) == true) {
            alert(player1 + " Wins!");
            ClearBoard();
        }
    }
    else if (xToMove == true) {
        if (PossibleWins(player2) == true) {
            alert(player2 + " Wins!");
            ClearBoard();
        }
    }
});
function ClearBoard() {
    space1.innerHTML = "";
    space2.innerHTML = "";
    space3.innerHTML = "";
    space4.innerHTML = "";
    space5.innerHTML = "";
    space6.innerHTML = "";
    space7.innerHTML = "";
    space8.innerHTML = "";
    space9.innerHTML = "";
    xToMove = true;
}
function PossibleWins(player) {
    if (space1.innerText == player && space2.innerText == player && space3.innerText == player)
        return true;
    else if (space4.innerText == player && space5.innerText == player && space6.innerText == player)
        return true;
    else if (space7.innerText == player && space8.innerText == player && space9.innerText == player)
        return true;
    else if (space1.innerText == player && space4.innerText == player && space7.innerText == player)
        return true;
    else if (space2.innerText == player && space5.innerText == player && space8.innerText == player)
        return true;
    else if (space3.innerText == player && space6.innerText == player && space9.innerText == player)
        return true;
    else if (space1.innerText == player && space5.innerText == player && space9.innerText == player)
        return true;
    else if (space3.innerText == player && space5.innerText == player && space7.innerText == player)
        return true;
    return false;
}
