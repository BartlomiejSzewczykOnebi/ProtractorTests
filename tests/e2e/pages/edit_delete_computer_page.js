'use strict';
require("../helpers/page_helpers.js");

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

    changeComputerName: { value: function (computerName) {
    	this.computerNameInput.clear();
        this.computerNameInput.sendKeys(computerName);
    }}

    changeIntroducedDate: { value: function (introducedDate) {
    	this.introducedDateInput.clear();
        this.introducedDateInput.sendKeys(introducedDate);
    }}

    changeDiscontinuedDate: { value: function (discontinuedDate) {
    	this.discontinuedDateInput.clear();
        this.discontinuedDateInput.sendKeys(discontinuedDate);
    }}

    changeCompany: { value: function (company) {
    	this.companyInput.clear();
        this.companyInput.sendKeys(company);
    }}

    clickSave: { value: function () {
        this.saveButton.click();
    }}

    clickCancel: { value: function () {
        this.cancelButton.click();
    }}

    clickDelete: { value: function () {
        this.deleteButton.click();
    }}
});

module.exports = EditDeleteComputerPage;