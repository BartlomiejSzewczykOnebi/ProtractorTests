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

    it('Window text is Computers database', () => {
        expect(browser.getTitle()).toEqual("Computers database");
    });

    it('Click add new computer', () => {
        computersDatabaseListPage.clickAddNewComputerButton();
    });

    it('Header text is Add a computer', () => {
        expect(addComputerPage.headerText).toEqual('Add a computer', "Header doesn't equals text: Add a computer.");
    });

    it('Type text into input elements', () => {
        addComputerPage.addComputerName(computerName);
        addComputerPage.addIntroducedDate(introducedDate);
        addComputerPage.addDiscontinuedDate(discontinuedDate);
    });

    it('Search for element on list and click it', () => {
        expect(addComputerPage.findCompanyOption(company).isPresent()).toBe(true);
        addComputerPage.findCompanyOption(company).click();
    });

    it('Click create this computer', () => {
        addComputerPage.clickCreateComputer();
    });

    it('Filter list is not empty', () => {
        computersDatabaseListPage.filterList(computerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
    });

    it('Filtered list contains expected value', () => {
        expect(computersDatabaseListPage.computersList.getText()).toContain(computerName);
    });
});

describe('Computer database tests - adding computer validation', () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseList();
    var addComputerPage = new AddComputerPage();

    var introducedDate = "20160810",
        discontinuedDate = "20170105";

    it('Open webpage', () => {
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Click add new computer', () => {
        computersDatabaseListPage.clickAddNewComputerButton();
    });

    it('Header text is Add a computer', () => {
        expect(addComputerPage.headerText).toEqual('Add a computer', "Header doesn't equals text: Add a computer.");
    });

    it('Check validation texts', () => {

        expect(addComputerPage.computerNameValidationText).toEqual("Required", "Validation text doesn't equals text: Required.");
        expect(addComputerPage.introducedDateValidationText).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
        expect(addComputerPage.discontinuedDateValidationText).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
    });

    it('Type text into input elements', () => {
        addComputerPage.addIntroducedDate(introducedDate);
        addComputerPage.addDiscontinuedDate(discontinuedDate);
    });

    it('Click create this computer button', () => {
        addComputerPage.clickCreateComputer();
    });

    it('Check if validation appear', () => {

        expect(addComputerPage.computerNameValidationClass).toContain("error", "Field doesn't show validation");
        expect(addComputerPage.introducedDateValidationClass).toContain("error", "Field doesn't show validation");
        expect(addComputerPage.discontinuedDateValidationClass).toContain("error", "Field doesn't show validation");
    });
});