let rpmValue = 0;

let btAccel = document.getElementById('btAccel');


btAccel.addEventListener('mousedown',mouseDown);
btAccel.addEventListener('mouseup', mouseUp);

let mouseDownID = 0;
let mouseUpID = 0;

function mouseDown(){
    clearInterval(mouseUpID);
    mouseDownID = setInterval(accelerate, 50);
    btAccel.removeEventListener('mousedown',mouseDown);
    document.addEventListener('mouseup', mouseUp);
}

function mouseUp(){
    clearInterval(mouseDownID);
    mouseUpID = setInterval(slowDown, 50);
    document.removeEventListener('mouseup',mouseUp);
    btAccel.addEventListener('mousedown', mouseDown);
    
}

function accelerate(){
    rpmValue = rpmValue + 1;
    console.log("Accelerating: ", rpmValue);
    updateBar();
}

function slowDown(){
    if(rpmValue <= 0){
        clearInterval(mouseUpID);
    }else{
        rpmValue = rpmValue - 1;
        console.log("Slowing down: ", rpmValue); 
        updateBar();
    }
}

function updateBar(){
    document.getElementById('rpmBar').style.width = rpmValue + "px";
}