exports.celsiusToFahrenheit = function (celsius){
 return celsius*(9/5)+32
}

exports.fahrenheitToCelcius = function (fahrenheit){
 return (fahrenheit-32)*(5/9)
}

exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateBegin.getTime() < dateCurrent.getTime()
        && dateCurrent.getTime() < dateEnd.getTime()) {
        return "Schönen Tag"
    }
    else {
        return "Gute Nacht"
    }
}

/** FALSCHER CODE
 * exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateBegin.getTime() < dateCurrent.getTime()
        && dateCurrent.getTime() < dateEnd.getTime()) {
        return "schönen Tag"
    }
    else {
        return "Gute Nacht"
    }
}
 */