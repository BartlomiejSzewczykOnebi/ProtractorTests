'use strict';
require("../helpers/page_helpers.js");
require("../lib/constants.js");
var EditDeleteComputerPage = require("../pages/edit_delete_computer_page.js");
var ComputersDatabaseList = require("../pages/computers_database_list_page.js");

describe("Computer database tests - update computer", () => {

    browser.ignoreSynchronization = true;
    var editDeleteComputerPage = new EditDeleteComputerPage();
    var computersDatabaseList = new ComputersDatabaseList();

    let computerName = "Blue Dragon",
        introducedDate = "1961-01-01",
        discontinuedDate = "",
        company = "IBM";

    it("Open webpage", () => {
        browser.get("http://computer-database.herokuapp.com/computers");
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it("Insert text into search box and filter results", () => {

        computersDatabaseList.filterList(computerName);
    });

    it("Search for element in list", () => {
        var els = element.all(by.xpath("//*[@id='main']/table/tbody/tr/td[1]/a"));
           els.filter(function(elem) {
            return elem.getText().then(function(text) {
                return text === computerName;
            });
        }).first().click();
    });

    it("Header text is Edit computer", () => {

        expect(editDeleteComputerPage.headerText.getText()).toEqual("Edit computer");
    });

    it("Provide input elements", () => {
        editDeleteComputerPage.changeIntroducedDate(introducedDate);
        editDeleteComputerPage.changeDiscontinuedDate(discontinuedDate);
    });

    it("Click Save this computer", () => {

        editDeleteComputerPage.clickSave();
    });
});