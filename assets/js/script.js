// Wait for the DOM to finish loading before running the game
// Get the buttom elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                //alert("You clicked Submit!");
                runGame();
                //incrementDiv();
                
            } else {
                let option = this.getAttribute("data-type");
                alert(`You clicked ${option}`);
            }
        })
    }
    createDiv();

    
       

        
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    let secretPin = Array.from({length: 4}, () => Math.floor(Math.random() * 10));
    alert(secretPin);

    let lastDiv = document.getElementById('guessing-area').lastChild;
    let lastDivID = parseInt(lastDiv.id);
    if ((lastDivID) < 6) {
        incrementDiv();
    } else {
        alert("game over. Page will refresh.");
        alert(lastDivID);
        window.location.reload();
    }
}

function createDiv() {
    const container = document.getElementById('guessing-area');
    container.innerHTML=`
        <div class="guessing-row" id="1">
            <form action="">
                <input type="text" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                <input type="text" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                <input type="text" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                <input type="text" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
            </form>
        </div>`;
        document.getElementById("num1").focus()
    autoTab();  
  
};

function incrementDiv() {
    Node.prototype.insertAfter = function(node, referenceNode) {
        if (node)
            this.insertBefore(node, referenceNode && referenceNode.nextSibling);
        return node;
    };
    
    var referenceNode,
        newNode;
    let lastDiv = document.getElementById('guessing-area').lastChild;
    

    let lastDivID = parseInt(lastDiv.id);
    referenceNode = document.getElementById('guessing-area').lastChild;
    //referenceNode = document.getElementById('guessing-area');
    newNode = document.createElement('div');
    newNode.className = "guessing-row";
    newNode.id = (lastDivID + 1);
    alert(newNode.id);
    
    newNode.innerHTML = `
    <!-- <div class="guessing-row" id="${lastDivID + 1}"> -->
        <form action="">
            <input type="text" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
            <input type="text" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
            <input type="text" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
            <input type="text" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
        </form>
    </div>`;
    
    
    referenceNode.parentNode.insertAfter(newNode, referenceNode);
    
    autoTab();  
}

function autoTab() {
        let last = document.getElementById('guessing-area').lastChild;
        let lastID = parseInt(last.id);
        var container = document.getElementsByClassName("guessing-row")[lastID - 1];
        console.log(container);
        container.onkeyup = function(jump) {
        var locate = jump.target;
        
        var next = locate;
        
            while (next = next.nextElementSibling) {
                if (next == null)
                break;
                
                if (next.tagName.toLowerCase() == "input") {
                    next.focus();
                    
                    
                    break;
                    
                }
              
                
            }
            if (event.key === "Enter") {
                runGame();
            }
            
            
            
    /*$(".form-num").keyup(function () {
        if (this.value.length == this.maxLength) {
          var $next = $(this).next('.form-num');
          if ($next.length)
              $(this).next('.form-num').focus();
          else
            $(".check-answer").focus();  
            $(this).blur();
        }
        $("#cmd").focus();
        //$(this).first('.form-num').focus();
    });
    document.getElementById("num1").focus();*/
    
}

}

function keyPressListener(e) {
    if (e.keyCode == 13) {
             document.getElementsByClassName("check-answer").focus();
}
}


