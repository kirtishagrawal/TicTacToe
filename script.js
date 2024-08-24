let turn = true; // X turn
let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let text = document.querySelector("#text")
let runGameOver = true;
let countclicks = 0; // to run game over

//winner check codes
function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) {

        let sample0 = boxes[winConditions[i][0]]
        let sample1 = boxes[winConditions[i][1]]
        let sample2 = boxes[winConditions[i][2]]

        if (sample0.innerText != "" && sample0.innerText == sample1.innerText && sample1.innerText == sample2.innerText) {

            //winner print codes
            text.innerText = `${sample0.innerText} Won the Match !`;

            //change winner text color
            text.classList.add("winText");


            //disable extra boxes after winning.
            boxes.forEach(box => {
                box.disabled = true;
            });

            //change winning box color.
            sample0.classList.add("winBox");
            sample1.classList.add("winBox");
            sample2.classList.add("winBox");

            //disable game over function to run even is all boxes are filled after a winner is found
            runGameOver = false;

            // countclicks = 0; // not necessary because the game will be reset anyways after a player wins.

            return;// End the function once a winner is found
        }
    }
}

//intialisation codes
boxes.forEach(valBoxes => {
    valBoxes.addEventListener("click", () => {
        if (turn == true) {
            valBoxes.innerText = "X";
            turn = false;
            text.innerText = "O's Turn !";
        }
        else {
            valBoxes.innerText = "O";
            turn = true;
            text.innerText = "X's Turn !";
        }
        valBoxes.disabled = true;
        countclicks++;

        checkWinner();

        //disable game over function to run even is all boxes are filled
        if (runGameOver == true && countclicks == 9) {
            gameOver();
        }

    })



});

//reset codes
reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = ""; //clear boxes
        box.disabled = false; //enable all boxes
        box.classList.remove("winBox"); //reset winning boxes color

    })

    turn = true;

    //reset text 
    if (turn == true) {
        text.innerText = "X's Turn !"
    }
    else {
        text.innerText = "O's Turn !"
    }

    //reset text colors
    text.classList.remove("winText");
    text.classList.remove("overText");

    

    //reset game over click count
    runGameOver = true;
    countclicks = 0;
    



})


//game over
function gameOver() {
        console.log("gameover")
        text.innerText = "Game Over !";
        text.classList.add("overText");
        countclicks = 0;
}

