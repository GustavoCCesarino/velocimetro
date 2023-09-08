let btAccel = document.getElementById('btAccel')
//btAccel.addEventListener('click', acceleration)

let element = document.querySelector('#accelBarInside')
let style = getComputedStyle(element); // mudar o nome dessas variaveis

document.addEventListener("DOMContentLoaded", function (){
    function forceDepletion(){
        let largura = element.style.width;
        let larguraAsInt = parseInt(largura, 10);
        if (larguraAsInt - 10 >= 1)
        {
            let decrementLargura = larguraAsInt - 10;
            element.style.width = decrementLargura + "px";
            
        }else{
            larguraAsInt = 1;
        }
        console.log("Largura: "+larguraAsInt+"px");
        setTimeout(forceDepletion, 50);
    }
    forceDepletion();
});

//btAccel.addEventListener('click', acceleration);
let intervalId;

btAccel.addEventListener('mousedown', function () {
    clearInterval(intervalId);
    intervalId = setInterval(acceleration, 50);
    console.log(intervalId);
});

btAccel.addEventListener('mouseup', function () {
    clearInterval(intervalId);
    console.log("Interval cleared!");
});

function acceleration(){
    let largura = style.width;
    let larguraAsInt = parseInt(largura, 10);
    let incrementedLargura = larguraAsInt + 40;
    //alert(incrementedLargura);
    //console.log("largura"+incrementedLargura);
    element.style.width = incrementedLargura + "px";
}


