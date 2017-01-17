'use strict';
require("../helpers/page_helpers.js");

var AddComputerPage = function () {};

AddComputerPage.prototype = Object.create({}, {
    headerText: {get: function () { return findElement("//*[@id='main']/h1", BY.XPATH).getText()}},
    computerNameInput: {get: () => { return findElement("name")}},
    addComputerName: { value: function (computerName) {
        this.headerText.sendKeys(computerName);
    }}


});

module.exports = AddComputerPage;