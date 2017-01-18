'use strict';
var EditDeleteComputerPage = require("../pages/edit_delete_computer_page.js");
var ComputersDatabaseListPage = require("../pages/computers_database_list_page.js");

describe("Computer database tests - update computer", () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseListPage();
    var editDeleteComputerPage = new EditDeleteComputerPage();

    let computerName = "Blue Dragon",
        newComputerName = "Blue Dragon 2",
        introducedDate = "1961-01-01",
        discontinuedDate = "",
        company = "IBM";

    //----------------UPDATE------------------------
    it("Open webpage", () => {
        computersDatabaseListPage.openPage();
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
        editDeleteComputerPage.changeComputerName(newComputerName);
        editDeleteComputerPage.changeIntroducedDate(introducedDate);
        editDeleteComputerPage.changeDiscontinuedDate(discontinuedDate);
    });

    it("Click Save this computer", () => {
        editDeleteComputerPage.clickSave();
    });

    //----------------CHECK-UPDATE------------------------
    it("Open webpage", () => {
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it("Insert text into search box and filter results", () => {
        computersDatabaseListPage.filterList(newComputerName);
    });

    it("Search for element in list", () => {
        var els = element.all(by.xpath("//*[@id='main']/table/tbody/tr/td[1]/a"));
           els.filter(function(elem) {
            return elem.getText().then(function(text) {
                return text === newComputerName;
            });
        }).first().click();
    });

    it("Header text is Edit computer", () => {
        expect(editDeleteComputerPage.headerText.getText()).toEqual("Edit computer");
    });

    it("Check input elements", () => {
        browser.driver.sleep(3000)
        expect(editDeleteComputerPage.computerNameInput.getAttribute('value')).toEqual(newComputerName);
        expect(editDeleteComputerPage.introducedDateInput.getAttribute('value')).toEqual(introducedDate);
        expect(editDeleteComputerPage.discontinuedDateInput.getAttribute('value')).toEqual(discontinuedDate);
    });

    afterAll(function (){
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});

describe('Computer database tests - update computer validation', () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseListPage();
    var editDeleteComputerPage = new EditDeleteComputerPage();

    var computerName = "Blue Dragon",
        introducedDate = "20160810",
        discontinuedDate = "20170105";

    it('Open webpage', () => {
        computersDatabaseListPage.openPage();
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Filter list is not empty', () => {
        computersDatabaseListPage.filterList(computerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
    });

    it('Filtered list contains expected value', () => {
        expect(computersDatabaseListPage.computersList.getText()).toContain(computerName);
        computersDatabaseListPage.clickComputerNameAt(0);
    });

    it("Header text is Edit computer", () => {
        expect(editDeleteComputerPage.headerText.getText()).toEqual("Edit computer");
    });

    it('Check validation texts', () => {
        expect(editDeleteComputerPage.computerNameValidationText).toEqual("Required", "Validation text doesn't equals text: Required.");
        expect(editDeleteComputerPage.introducedDateValidationText).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
        expect(editDeleteComputerPage.discontinuedDateValidationText).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
    });

    it('Type text into input elements', () => {
        editDeleteComputerPage.clearComputerName();
        editDeleteComputerPage.changeIntroducedDate(introducedDate);
        editDeleteComputerPage.changeDiscontinuedDate(discontinuedDate);
    });

    it("Click Save this computer", () => {
        editDeleteComputerPage.clickSave();
    });

    it('Check if validation appear', () => {
        expect(editDeleteComputerPage.computerNameValidationClass).toContain("error", "Field doesn't show validation");
        expect(editDeleteComputerPage.introducedDateValidationClass).toContain("error", "Field doesn't show validation");
        expect(editDeleteComputerPage.discontinuedDateValidationClass).toContain("error", "Field doesn't show validation");
    });

    afterAll(function (){
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});