'use strict';
require("../helpers/page_helpers.js");
require("../lib/constants.js");

var EditDeleteComputerPage = function () {};

EditDeleteComputerPage.prototype = Object.create({}, {
    headerText: {get: function () { return findElement("//*[@id='main']/h1", BY.XPATH).getText()}},
    computerNameInput: {get: () => { return findElement("name")}},
    introducedDateInput: {get: () => { return findElement("introduced")}},
    discontinuedDateInput: {get: () => { return findElement("discontinued")}},
    companyInput: {get: () => { return findElement("company")}},
    saveButton: {get: () => { return findElement("//div[@class='actions']/input",BY.XPATH)}},
    cancelButton: {get: () => { return findElement("//div[@class='actions']/a",BY.XPATH)}},
    deleteButton: {get: () => { return findElement("//form[@class='topRight']/input",BY.XPATH)}},
    computerNameValidationText: {get: () => {return findElement("//*[@id='name']/following-sibling::span", BY.XPATH).getText()}},
    introducedDateValidationText: {get: () => {return findElement("//*[@id='introduced']/following-sibling::span", BY.XPATH).getText()}},
    discontinuedDateValidationText: {get: () => {return findElement("//*[@id='discontinued']/following-sibling::span", BY.XPATH).getText()}},
    computerNameValidationClass: {get: () => {return findElement("//*[@for='name']/parent::div", BY.XPATH).getAttribute('class')}},
    introducedDateValidationClass: {get: () => {return findElement("//*[@for='introduced']/parent::div", BY.XPATH).getAttribute('class')}},
    discontinuedDateValidationClass: {get: () => {return findElement("//*[@for='discontinued']/parent::div", BY.XPATH).getAttribute('class')}},

    clearComputerName: { value: function () {
        this.computerNameInput.clear();
    }},

    changeComputerName: { value: function (computerName) {
    	this.computerNameInput.clear();
        this.computerNameInput.sendKeys(computerName);
    }},

    changeIntroducedDate: { value: function (introducedDate) {
    	this.introducedDateInput.clear();
        this.introducedDateInput.sendKeys(introducedDate);
    }},

    changeDiscontinuedDate: { value: function (discontinuedDate) {
    	this.discontinuedDateInput.clear();
        this.discontinuedDateInput.sendKeys(discontinuedDate);
    }},

    changeCompany: { value: function (company) {
    	this.companyInput.clear();
        this.companyInput.sendKeys(company);
    }},

    clickSave: { value: function () {
        this.saveButton.click();
    }},

    clickCancel: { value: function () {
        this.cancelButton.click();
    }},

    clickDelete: { value: function () {
        this.deleteButton.click();
    }}
});

module.exports = EditDeleteComputerPage;