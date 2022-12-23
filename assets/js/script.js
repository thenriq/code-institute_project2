// Wait for the DOM to finish loading before running the game
// Get the buttom elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "submit") {
          runGame();
        } else {
          let option = this.getAttribute("data-type");
          alert(`You clicked ${option}`);
        }
      });
    }
    createDiv();
  });

  function createDiv() {
    const container = document.getElementById("guessing-area");
    container.innerHTML = `
          <div class="guessing-row" id="1">
                  <input type="text" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                  <input type="text" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                  <input type="text" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                  <input type="text" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
          </div>`;
    document.getElementById("num1").focus();
    runGame();
  }
  
  function incrementDiv() {
    Node.prototype.insertAfter = function (node, referenceNode) {
      if (node)
        this.insertBefore(node, referenceNode && referenceNode.nextSibling);
      return node;
    };
  
    var referenceNode, newNode;
    let lastDiv = document.getElementById("guessing-area").lastChild;
  
    let lastDivID = parseInt(lastDiv.id);
    referenceNode = document.getElementById("guessing-area").lastChild;
    newNode = document.createElement("div");
    newNode.className = "guessing-row";
    newNode.id = lastDivID + 1;
    newNode.innerHTML = `
              <input type="text" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');">
              <input type="text" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
              <input type="text" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
              <input type="text" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
      </div>`;
  
    referenceNode.parentNode.insertAfter(newNode, referenceNode);
    nextInput = newNode.getElementsByTagName("input")[0];
    nextInput.focus();
    runGame();
  }
  
/**
* The main game "loop", called when the script is first loaded
* and after the user's answer has been processed
*/
  function runGame() {
    let last = document.getElementById("guessing-area").lastChild;
    let lastID = parseInt(last.id);
    var container = document.getElementsByClassName("guessing-row")[lastID - 1];
    container.onkeyup = function (jump) {
      var locate = jump.target;
  
      var next = locate;
  
      while ((next = next.nextElementSibling)) {
        if (next == null) break;
  
        if (next.tagName.toLowerCase() == "input") {
          next.focus();
  
          break;
        }
      }
      if (event.key === "Enter") {
        var inputs = container.getElementsByTagName("input");
        var values = {};
        for (const input of inputs) {
          values[input.name] = input.value;
        }
  
        if (lastID < 6) {
          incrementDiv();
        } else {
          alert("game over. Page will refresh.");
          window.location.reload();
        }
      }
    };
  }
  
 
  