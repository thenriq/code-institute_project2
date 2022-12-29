/*jshint esversion: 6 */

/*Comment above to fix warnings raised from JSHint*/

// Wait for the DOM to finish loading before running the game
// Get the buttom elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                runGame();
            } else {
                resetGame();
            }
        });
    }

    /**
     * Generates the random number with 4 digits. The combination might have repeated numbers
     * Based on solution from https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
     */
     window.secretPin = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * 10));
    createDiv();
});

/**
 * The main game "loop", called each time the
 * user's answer has been processed
 */
function runGame() {
    const secretPin = window.secretPin;
    let control = 0;

    /*getting the last input rows in the guessing-area*/
    let lastDiv = document.getElementById('guessing-area').lastChild;
    let lastDivID = parseInt(lastDiv.id);
    var container = document.getElementsByClassName("guessing-row")[lastDivID - 1];
    let values = [];

    /*looping throught each input elements and passing it to an array*/
    for (let i = 0; i < 4; i++) {
        var inputs = container.getElementsByTagName("input")[i];
        values[i] = parseInt(inputs.value);
    }

    /*Looping through user inputs values*/
    for (let i = 0; i < values.length; i++) {

        /*Looping through random array generated from Array function*/
        for (let j = 0; j < secretPin.length; j++) {

            /*If customer input number belongs to random array, but in wrong place, color will be orange*/
            if (values[i] === secretPin[j]) {
                container.getElementsByTagName("input")[i].style.color = '#FFA000';
            }

            /*If customer input number belongs to random array, and in right place, color will be green*/
            if (i === j) {
                if (values[i] === secretPin[j]) {
                    container.getElementsByTagName("input")[i].style.color = '#17F217';

                    /*counting how many green input fields occurred*/
                    control += 1;

                    /*if number is found, then no need to continue looping through arrays*/
                    break;
                }
            }

            /*If customer input does not belong to random array, then the input text color will be red*/
            if (!(secretPin.includes(values[i]))) {
                container.getElementsByTagName("input")[i].style.color = '#FF0000';
            }
        }

        /*If player wins, the game end, and invites to play again*/
        if (control == 4) {

            /*The playAgainWin function will pop-up a message on the window*/
            playAgainWin();
        }

        /*At the end of the looping through both arrays, the previus input elements are disabled*/
        container.getElementsByTagName("input")[i].disabled = true;
    }

    /*A new input rows will be created in case of no win yet*/
    if (control != 4) {

        /*While the attempts are still under 6, a new input row will be created*/
        if ((lastDivID) < 6) {
            incrementDiv();

        } else {

            /*All attempts were taken and number was not guessed*/
            /*The playAgainLose function will pop-up a message on the window*/
            playAgainLose();
        }
    }
}

/**
 * This function will create the first input row of the game
 * The solution to restrict field to 1 digit was taken from https://stackoverflow.com/questions/42067911/input-field-restrict-to-one-digit
 */
function createDiv() {
    const container = document.getElementById('guessing-area');
    container.innerHTML = `
        <div class="guessing-row" id="1">
                <input type="text" aria-label="Number 1" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
                <input type="text" aria-label="Number 2" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
                <input type="text" aria-label="Number 3" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
                <input type="text" aria-label="Number 4" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
        </div>`;
    document.getElementById("num1").focus();
    autoTab();
}

/**
 * This function will create new input rows, each new row with its unique "id"
 */
function incrementDiv() {

    /*Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way. */
    /*comment extract from Node module*/
    /*Based on solution from https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib*/
    Node.prototype.insertAfter = function(node, referenceNode) {
        if (node)
            this.insertBefore(node, referenceNode && referenceNode.nextSibling);
        return node;
    };

    /*Getting the last guessing-row id and incrementing it as id for the next guessing-row*/
    var referenceNode, newNode;
    let lastDiv = document.getElementById('guessing-area').lastChild;
    let lastDivID = parseInt(lastDiv.id);
    referenceNode = document.getElementById('guessing-area').lastChild;
    newNode = document.createElement('div');
    newNode.className = "guessing-row";
    newNode.id = (lastDivID + 1);

    /*Using HTML template to insert new guessing-row div*/
    /**
     * 
     * 
     */
    newNode.innerHTML = `
            <input type="text" aria-label="Number 1" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
            <input type="text" aria-label="Number 2" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
            <input type="text" aria-label="Number 3" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
            <input type="text" aria-label="Number 4" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" autocomplete="off">
    </div>`;

    referenceNode.parentNode.insertAfter(newNode, referenceNode);

    /*focus on the first input field of newly created guessing-row div and calling autoTab function*/
    let x = newNode.getElementsByTagName("input")[0];
    x.focus();
    autoTab();
}

function autoTab() {
    let last = document.getElementById('guessing-area').lastChild;
    let lastID = parseInt(last.id);
    var container = document.getElementsByClassName("guessing-row")[lastID - 1];
    container.onkeyup = function(jump) {

        /**
         * Using event.target function in order to implement auto-tab while typing on fiedls
         * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Event/target and https://stackoverflow.com/questions/23888537/auto-tab-to-next-input-field-when-fill-4-characters
         */
        var locate = jump.target;
        var next = locate;

        while (next = next.nextElementSibling) {
            
            /*auto-focus will not jump if pressed backspace*/
            if (event.key != "Backspace") {
                if (next.tagName.toLowerCase() == "input") {
                    next.focus();
                    break;
                }
            }
        }

        /*will run the runGame function when enter is pressed in any field*/
        if (event.key === "Enter") {
            runGame();
        }
    };
}

/**
 * the following functions will reset the game if win, lose or pressed reset button
 */
function playAgainWin() {
    let confirmOpt = confirm("You win. Play again?");
    if (confirmOpt) {
        window.location.reload(false);

    } else {
        alert("Thank you for playing");
    }
}

function playAgainLose() {
    let confirmOpt = confirm("You've lost. Play again?");
    alert("The secret pin number was " + window.secretPin);
    if (confirmOpt) {
        window.location.reload(false);

    } else {
        alert("Thank you for playing");
    }
}

function resetGame() {
    let confirmOpt = confirm("Are you sure you want to reset?");
    if (confirmOpt) {

        window.location.reload(false);

    } else {
        alert("Have a nice day!");
    }
}