'use strict';

var ComputersDatabaseList = function () {
    browser.get('http://computer-database.herokuapp.com/computers');
};

ComputersDatabaseList.prototype = Object.create({}, {
    filterBox: { get: function ()  { return element(by.id('searchbox')); }},
    filterButton: { get: function () { return element(by.id('searchsubmit')); }},
    computersList: { get: function () { return element.all(by.xpath("//table[contains(@class,'computers')]/tbody/tr/td/a")); }},
    filterList: { value: function (keys) {
        this.filterBox.sendKeys(keys);
        this.filterButton.click();
    }},
    clickComputerNameAt: { value: function (idx) { return this.computersList.get(idx).click(); }},
});

module.exports = ComputersDatabaseList;