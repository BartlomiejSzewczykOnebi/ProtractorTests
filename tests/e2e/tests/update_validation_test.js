'use strict';
var EditDeleteComputerPage = require("../pages/edit_delete_computer_page.js");
var ComputersDatabaseList = require("../pages/computers_database_list_page.js");

describe('Computer database tests - update computer validation', () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseList();
    var editDeleteComputerPage = new EditDeleteComputerPage();

    var computerName = "Blue Dragon",
        introducedDate = "20160810",
        discontinuedDate = "20170105";

    it('Open webpage', () => {
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
});