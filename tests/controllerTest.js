const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

describe('#getGreetingDependOnTime()', function () {
    // test a functionality
    it('teste ob Gute Nacht erfüllt', function () {
        let nightDate = new Date("December 17, 1995 03:24:00")
        let answer = apiTemperature.getGreetingDependOnTime(nightDate);
        expect(answer).to.equal("Gute Nacht")
    })

    it('teste ob Schöner Tag erfüllt', function () {
        let nightDate = new Date("December 17, 1995 18:24:00")
        let answer = apiTemperature.getGreetingDependOnTime(nightDate);
        expect(answer).to.equal("Schönen Tag")
    })
});

describe('#celsiusToFahrenheit()', function () {
    // test a functionality
    it('test below zero', function () {
        expect(apiTemperature.celsiusToFahrenheit(-3)).to.equal(26.6)
    })

    it('test below zero - good practice', function () {
        //Arrange
        const celsius = -3; 
        //Act
        const fahrenheit = apiTemperature.celsiusToFahrenheit(celsius); 
        //Assert
        expect(fahrenheit).to.equal(26.6)
    })

    it('test at zero', function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32)
    })

    it('test over zero', function () {
        expect(apiTemperature.celsiusToFahrenheit(3)).to.equal(37.4)
    })
});

describe('#fahrheitToCelcius()', function () {
    // test a functionality
    it('test below 32', function () {
        expect(Math.round(apiTemperature.fahrenheitToCelcius(30) * 10) / 10).to.equal(-1.1)
    })

    it('test at 32', function () {
        expect(Math.round(apiTemperature.fahrenheitToCelcius(32) * 10) / 10).to.equal(0)
    })

    it('test over 32', function () {
        expect(Math.round(apiTemperature.fahrenheitToCelcius(34) * 10) / 10).to.equal(1.1)
    })
});



