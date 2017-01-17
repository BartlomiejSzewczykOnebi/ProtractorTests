'use strict';
require("../helpers/page_helpers.js");

var AddComputerPage = function () {};

AddComputerPage.prototype = Object.create({}, {
    headerText: {get: () => { return findElement("//*[@id='main']/h1", BY.XPATH).getText()}},
    computerNameInput: {get: () => { return findElement("name")}},
    introducedDateInput: {get: () => { return findElement("introduced")}},
    discontinuedDateInput: {get: () => { return findElement("discontinued")}},
    createComputerButton: {get: () => { return findElement("//div[@class='actions']/input", BY.XPATH)}},
    computerNameValidationText: {get: () => {return findElement("//*[@id='name']/following-sibling::span", BY.XPATH).getText()}},
    introducedDateValidationText: {get: () => {return findElement("//*[@id='introduced']/following-sibling::span", BY.XPATH).getText()}},
    discontinuedDateValidationText: {get: () => {return findElement("//*[@id='discontinued']/following-sibling::span", BY.XPATH).getText()}},
    computerNameValidationClass: {get: () => {return findElement("//*[@for='name']/parent::div", BY.XPATH).getAttribute('class')}},
    introducedDateValidationClass: {get: () => {return findElement("//*[@for='introduced']/parent::div", BY.XPATH).getAttribute('class')}},
    discontinuedDateValidationClass: {get: () => {return findElement("//*[@for='discontinued']/parent::div", BY.XPATH).getAttribute('class')}},

    //*******************************functions********************************//
    addComputerName: { value: function (computerName) {
        this.computerNameInput.sendKeys(computerName);
    }},
    addIntroducedDate: { value: function (introducedDate) {
        this.introducedDateInput.sendKeys(introducedDate);
    }},
    addDiscontinuedDate: { value: function (discontinuedDate) {
        this.discontinuedDateInput.sendKeys(discontinuedDate);
    }},
    findCompanyOption: { value: function (company) {
        return findElement('option', BY.CSS_CONTAINING_TEXT, company)
    }},
    clickCreateComputer: { value: function () {
        this.createComputerButton.click();
    }},

});

module.exports = AddComputerPage;