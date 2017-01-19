'use strict';
var EditDeleteComputerPage = require("../pages/edit_delete_computer_page.js");
var ComputersDatabaseListPage = require("../pages/computers_database_list_page.js");

describe("Computer database tests - update computer", () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseListPage();
    var editDeleteComputerPage = new EditDeleteComputerPage();
    var computerName = "Blue Dragon",
        newComputerName = "Blue Dragon 2",
        introducedDate = "1961-01-01",
        discontinuedDate = "",
        company = "Sony";

    it('Open web page and check if window title is \"Computers database\"', () => {

        computersDatabaseListPage.openPage();
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Filter list by computer name and check if list is not empty', () => {

        computersDatabaseListPage.filterList(computerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
    });

    it('Check if computer is displayed on list', () => {

        expect(computersDatabaseListPage.computersList.getText()).toContain(computerName);
    });

    it("Click computer name on list and check if header text is \"Edit computer\"", () => {

        computersDatabaseListPage.clickFirstComputerName(computerName);
        expect(editDeleteComputerPage.headerText.getText()).toEqual("Edit computer");
    });

    it('Fill the computer form, save it and check if success message appear', () => {

        editDeleteComputerPage.changeComputerName(newComputerName);
        editDeleteComputerPage.changeIntroducedDate(introducedDate);
        editDeleteComputerPage.changeDiscontinuedDate(discontinuedDate);
        expect(editDeleteComputerPage.findCompanyOption(company).isPresent()).toBe(true);
        editDeleteComputerPage.findCompanyOption(company).click();
        editDeleteComputerPage.clickSave();
        expect(editDeleteComputerPage.messageText).toEqual("Done! Computer " + newComputerName + " has been updated",
            "Text from success message not equals text: Done! Computer " + newComputerName + " has been updated.");
    });

    it('Filter list by new computer name and check if list is not empty', () => {

        computersDatabaseListPage.filterList(newComputerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
    });

    it('Check if computer is displayed on list', () => {

        expect(computersDatabaseListPage.computersList.getText()).toContain(newComputerName);
    });

    it("Click new computer name on list and check if header text is \"Edit computer\"", () => {

        computersDatabaseListPage.clickFirstComputerName(newComputerName);
        expect(editDeleteComputerPage.headerText.getText()).toEqual("Edit computer");
    });

    it("Check if input elements values equals to expected", () => {

        expect(editDeleteComputerPage.computerNameInput.getAttribute('value')).toEqual(newComputerName);
        expect(editDeleteComputerPage.introducedDateInput.getAttribute('value')).toEqual(introducedDate);
        expect(editDeleteComputerPage.discontinuedDateInput.getAttribute('value')).toEqual(discontinuedDate);
        expect(editDeleteComputerPage.companyInput.$('option:checked').getText()).toEqual(company);
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
    var computerName = "Blue Dragon 2",
        introducedDate = "20160810",
        discontinuedDate = "20170105";

    it('Open web page and check if window title is \"Computers database\"', () => {

        computersDatabaseListPage.openPage();
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Filter list by computer name and check if list is not empty', () => {

        computersDatabaseListPage.filterList(computerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
    });

    it('Check if computer is displayed on list', () => {

        expect(computersDatabaseListPage.computersList.getText()).toContain(computerName);
    });

    it("Click computer name on list and check if header text is \"Edit computer\"", () => {

        computersDatabaseListPage.clickFirstComputerName(computerName);
        expect(editDeleteComputerPage.headerText.getText()).toEqual("Edit computer");
    });

    it('Check validation texts', () => {

        expect(editDeleteComputerPage.computerNameValidationText).toEqual("Required",
            "Validation text doesn't equals text: Required.");
        expect(editDeleteComputerPage.introducedDateValidationText).toEqual("Date ('yyyy-MM-dd')",
            "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
        expect(editDeleteComputerPage.discontinuedDateValidationText).toEqual("Date ('yyyy-MM-dd')",
            "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
    });

    it('Fill the computer form, click save and check if validation appear', () => {

        editDeleteComputerPage.clearComputerName();
        editDeleteComputerPage.changeIntroducedDate(introducedDate);
        editDeleteComputerPage.changeDiscontinuedDate(discontinuedDate);
        editDeleteComputerPage.clickSave();
        expect(editDeleteComputerPage.computerNameValidationClass).toContain("error", "Field doesn't show validation");
        expect(editDeleteComputerPage.introducedDateValidationClass).toContain("error", "Field doesn't show validation");
        expect(editDeleteComputerPage.discontinuedDateValidationClass).toContain("error", "Field doesn't show validation");
    });

    afterAll(function (){

        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});