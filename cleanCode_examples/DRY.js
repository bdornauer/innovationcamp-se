function increaseTemperature() {
    temperature++;
    if (!isOn) {
        temperatureObj.innerText = `Temperatur: ${temperature} Celsius`
        levelObj.innerText = `Level: ${level}`
        modusObj.innerText = `Modus: ${mode}`
    } else {
        temperatureObj.innerText = ""
        levelObj.innerText = ""
        modusObj.innerText = ""
    }
}

function decreaseTemperature() {
    temperature--;
    if (!isOn) {
        temperatureObj.innerText = `Temperatur: ${temperature} Celsius`
        levelObj.innerText = `Level: ${level}`
        modusObj.innerText = `Modus: ${mode}`
    } else {
        temperatureObj.innerText = ""
        levelObj.innerText = ""
        modusObj.innerText = ""
    }
}

/**
 *
 *
 * function updateDisplay() {
    if (!isOn) {
        temperatureObj.innerText = `Temperatur: ${temperature} Celsius`
        levelObj.innerText = `Level: ${level}`
        modusObj.innerText = `Modus: ${mode}`
    } else {
        temperatureObj.innerText = ""
        levelObj.innerText = ""
        modusObj.innerText = ""
    }
}
 */