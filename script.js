let turn = true; // X turn
let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winningText = document.querySelector("#winningText")
let text = document.querySelector("#text")
let runGameOver = true;

//winner check codes
function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) {
        
        let smaple0 = boxes[winConditions[i][0]]
        let smaple1 = boxes[winConditions[i][1]]
        let smaple2 = boxes[winConditions[i][2]]

        if (smaple0.innerText != "" && smaple0.innerText == smaple1.innerText && smaple1.innerText == smaple2.innerText) {
            
            //winner print codes
            text.innerText = `${smaple0.innerText} Won the Match !`;

            //change winner text color
            text.classList.add("class", "winText");
            

            //disable extra boxes after winning.
            boxes.forEach(box => {
                box.disabled = true ;
            });

            //change winning box color.
            smaple0.classList.add("class", "winBox");
            smaple1.classList.add("class", "winBox");
            smaple2.classList.add("class", "winBox");

            //disable game over function to run even is all boxes are filled
            runGameOver = false;
        }
    }
}

//intialisation codes
boxes.forEach(valBoxes => {
    valBoxes.addEventListener("click", () => {
        if (turn == true) {
            valBoxes.innerText = "X";
            turn = false;
            valBoxes.disabled = true;
            text.innerText = "O's Turn !";
        }
        else {
            valBoxes.innerText = "O";
            turn = true;
            valBoxes.disabled = true;
            text.innerText = "X's Turn !";
        }
        
        checkWinner();

        //disable game over function to run even is all boxes are filled
        if (runGameOver == true){
            gameOver();
        }


        

    })



});

//reset codes
reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = ""; //clear boxes
        box.disabled = false; //enable all boxes
        box.classList.remove("class", "winBox"); //reset winning boxes color
        
    })

    //reset text 
    if (turn == true){
        text.innerText = "X's Turn !"
    }
    else{
        text.innerText = "O's Turn !"
    }
    
    //reset text colors
    text.classList.remove("class", "winText");
    text.classList.remove("class", "overText");


    
})


//game over
function gameOver() {
    boxes.forEach(box => {
        if(
            boxes[0].innerText != "" &&
            boxes[1].innerText != "" &&
            boxes[2].innerText != "" &&
            boxes[3].innerText != "" &&
            boxes[4].innerText != "" &&
            boxes[5].innerText != "" &&
            boxes[6].innerText != "" &&
            boxes[7].innerText != "" &&
            boxes[8].innerText != ""
        ){
            text.innerText = "Game Over !";
            text.classList.add("class", "overText");
        }
    })
}

