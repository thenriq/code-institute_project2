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

    
    window.secretPin = Array.from({length: 4}, () => Math.floor(Math.random() * 10));
    //window.secretPin = [1,2,3,4];
    createDiv();

    
       

        
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //let last = document.getElementById('guessing-area').lastChild;
    //let lastID = parseInt(last.id);
    //secretPin = window.secretPin;
    let control = 0;
    
    console.log(window.secretPin);
    
    

    let lastDiv = document.getElementById('guessing-area').lastChild;
    let lastDivID = parseInt(lastDiv.id);
    var container = document.getElementsByClassName("guessing-row")[lastDivID - 1];

    let values = [];
    for (let i = 0; i < 4; i++) {
        var inputs = container.getElementsByTagName("input")[i];
        
        
        /*console.log(inputs.value);*/
        values[i] = parseInt(inputs.value);
    }
    console.log(values);
        
    // Loop for array1
    for(let i = 0; i < values.length; i++) {
         
        // Loop for array2
        for(let j = 0; j < window.secretPin.length; j++) {
        
            // Compare the element of each and
            // every element from both of the
            // arrays
            if ((values[i] === window.secretPin[j]) && ((i == j))) {
                
                /*console.log(i);
                console.log(j);*/
                //console.log("item ",i,"will be orange");
               // if (i == j) {
                    console.log("item ", values[i], "will be green");
                    console.log("control: ",control += 1);
                    container.getElementsByTagName("input")[i].style.color = '#17F217';
                    break;
                //} 
            }
            else if ((values[i] === window.secretPin[j]) && ((i != j))){
                    console.log("item ",values[i],"will be orange");
                    container.getElementsByTagName("input")[i].style.color = '#FFA000';
                    break;
                }
                
             
                // Return if common element found
            else //if ((values[i] === window.secretPin[j]) && ((i != j))){
                console.log("item ", values[i], "will be red");
                container.getElementsByTagName("input")[i].style.color = '#FF0000';
            //}
        }
        if (control == 4) {
            alert("you win!");
            window.location.reload(false);
            break;
        }
    }
     
    // Return if no common element exist
    
    

    


    if ((lastDivID) < 6) {
        incrementDiv();
        

    } else {
        alert("game over. Page will refresh.");
        alert(lastDivID);
        window.location.reload(false);
    }
}

function createDiv() {
    const container = document.getElementById('guessing-area');
    container.innerHTML=`
        <div class="guessing-row" id="1">
            
                <input type="text" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                <input type="text" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                <input type="text" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
                <input type="text" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
            
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
            <input type="text" class="form-num" id="num1" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');">
            <input type="text" class="form-num" id="num2" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
            <input type="text" class="form-num" id="num3" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
            <input type="text" class="form-num" id="num4" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"/>
    </div>`;
    
    
    referenceNode.parentNode.insertAfter(newNode, referenceNode);
    //console.log(newNode);
    x = newNode.getElementsByTagName("input")[0];
    console.log(x);
    x.focus();
    //referenceNode.getElementsByTagName("input")[0].focus;
    
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

/*function keyPressListener(e) {
    inputNotNull = document.getElementsByClassName("form-num");
    if (e.keyCode == 13) {
        console.log(inputNotNull);
             document.getElementsByClassName("check-answer").focus();
             console.log("enter was pressed");
             
}
}*/

