function levelChange() {
    switch (level) {
        case 0:
            level = 1;
            break;
        case 1:
            level += 1;
            break;
        case 2:
            level++;
            break;
        default:
            level -= 3;
            break;
    }
    updateDisplay();
}


/**
 * function increaseTemperature() {
    temperature++;
    updateDisplay();
}

 function decreaseTemperature() {
    temperature--;
    updateDisplay();
}
 function levelChange() {
    if(level < 3) 
        level++; 
    else 
        level = 0
    updateDisplay();
}
 */