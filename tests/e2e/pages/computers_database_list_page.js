'use strict';
require("../helpers/page_helpers.js");
require("../lib/constants.js");

var ComputersDatabaseList = function () {};

ComputersDatabaseList.prototype = Object.create({}, {
    filterBox: { get: function () { return findElement("searchbox")}},
    filterButton: { get: function () { return findElement("searchsubmit")}},
    computersList: { get: function () { return element.all(by.xpath("//table[contains(@class,'computers')]/tbody/tr/td/a")); }},
    addNewComputerButton: { get: function () { return findElement("add")}},
    messageText: { get: function () { return findElement("//div[@class='alert-message warning']",BY.XPATH)}},
    openPage: { value: function () {  browser.get('http://computer-database.herokuapp.com/computers'); }},
    filterList: { value: function (keys) {
        this.filterBox.sendKeys(keys);
        this.filterButton.click();
    }},
    clickComputerNameAt: { value: function (idx) { this.computersList.get(idx).click() }},
    clickAddNewComputerButton: { value: function () { this.addNewComputerButton.click() }},
});

module.exports = ComputersDatabaseList;