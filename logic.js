let btAccel = document.getElementById('btAccel')
btAccel.addEventListener('click', acceleration)

let element = document.querySelector('#accelBarInside')
let style = getComputedStyle(element);
document.addEventListener("DOMContentLoaded", function() {
    
    function forceDepletion(){
        let largura = element.style.width;
        let larguraAsInt = parseInt(largura, 10);
        if(larguraAsInt > 0){
            let decrementLargura = larguraAsInt - 10;
            element.style.width = decrementLargura + "px";
        }
        
        setTimeout(forceDepletion,1000);
    }
    
    forceDepletion();
});

function acceleration(){
    let largura = style.width;
    let larguraAsInt = parseInt(largura, 10);
    let incrementedLargura = larguraAsInt + 20;
    //alert(incrementedWidth);
    element.style.width = incrementedLargura + "px";

}

