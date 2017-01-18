'use strict';
var AddComputerPage = require("../pages/add_computer_page.js");
var ComputersDatabaseList = require("../pages/computers_database_list_page.js");


describe('Computer database tests - adding computer', () => {
    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseList();
    var addComputerPage = new AddComputerPage();

    var computerName = "Blue Dragon",
        introducedDate = "2016-08-10",
        discontinuedDate = "2017-01-05",
        company = "IBM";

    it('Open web page and check if window text is \"Computers database\"', () => {
        computersDatabaseListPage.openPage();
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Click \"add new computer\" button and check if header text is \"Add a computer\"', () => {
        computersDatabaseListPage.clickAddNewComputerButton();
        expect(addComputerPage.headerText).toEqual('Add a computer', "Header doesn't equals text: Add a computer.");
    });

    it('Fill the computer form, save it and check if success message appear', () => {
        addComputerPage.addComputerName(computerName);
        addComputerPage.addIntroducedDate(introducedDate);
        addComputerPage.addDiscontinuedDate(discontinuedDate);
        expect(addComputerPage.findCompanyOption(company).isPresent()).toBe(true);
        addComputerPage.findCompanyOption(company).click();
        addComputerPage.clickCreateComputer();
        expect(addComputerPage.messageText).toEqual("Done! Computer " + computerName + " has been created",
            "Text from success message not equals text: Done! Computer " + computerName + " has been created.");
    });

    it('Check if computer is displayed on list', () => {
        computersDatabaseListPage.filterList(computerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
        expect(computersDatabaseListPage.computersList.getText()).toContain(computerName);
    });

    afterAll(function (){
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});

describe('Computer database tests - adding computer validation', () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseList();
    var addComputerPage = new AddComputerPage();

    var introducedDate = "20160810",
        discontinuedDate = "20170105";

    it('Open web page and check if window text is \"Computers database\"', () => {
        computersDatabaseListPage.openPage();
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Click \"add new computer\" button and check if header text is \"Add a computer\"', () => {
        computersDatabaseListPage.clickAddNewComputerButton();
        expect(addComputerPage.headerText).toEqual('Add a computer', "Header doesn't equals text: Add a computer.");
    });

    it('Check validation texts', () => {

        expect(addComputerPage.computerNameValidationText).toEqual("Required", "Validation text doesn't equals text: Required.");
        expect(addComputerPage.introducedDateValidationText).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
        expect(addComputerPage.discontinuedDateValidationText).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
    });

    it('Fill the form, click \"create this computer\" button and check if validation appear', () => {
        addComputerPage.addIntroducedDate(introducedDate);
        addComputerPage.addDiscontinuedDate(discontinuedDate);
        addComputerPage.clickCreateComputer();
        expect(addComputerPage.computerNameValidationClass).toContain("error", "Field doesn't show validation");
        expect(addComputerPage.introducedDateValidationClass).toContain("error", "Field doesn't show validation");
        expect(addComputerPage.discontinuedDateValidationClass).toContain("error", "Field doesn't show validation");
    });

    afterAll(function (){
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});