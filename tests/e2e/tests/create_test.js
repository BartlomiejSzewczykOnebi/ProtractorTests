'use strict';
require("../helpers/page_helpers.js");
require("../lib/constants.js");
var AddComputerPage = require("../pages/add_computer_page.js");


describe('Computer database tests - adding computer', () => {
    browser.ignoreSynchronization = true;
    var addComputerPage;

    beforeEach(() =>{
        addComputerPage = new AddComputerPage();
    });

    var computerName = "Blue Dragon",
        introducedDate = "2016-08-10",
        discontinuedDate = "2017-01-05",
        company = "IBM";

    it('Open webpage', () => {
        browser.get('http://computer-database.herokuapp.com/computers');
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Click add', () => {
        click("add");
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

    it('Search for a computer', () => {
        typeValue(computerName, "searchbox");
        click("searchsubmit");
    });

    it('Search for element on list and click it', () => {
        let listContainsValue = false;

        element.all(by.xpath("//table[contains(@class,'computers')]/tbody/tr/td/a")).each((element)=>{
            element.getText().then((el) => {
                if(el == computerName) {
                    listContainsValue = true;
                }
            });
        }).then(() => {
            expect(listContainsValue).toBe(true, "No computer named " + computerName + " found on list");
        });
    });
});

describe('Computer database tests - adding computer validation', () => {

    browser.ignoreSynchronization = true;
    var addComputerPage;

    beforeEach(() =>{
        addComputerPage = new AddComputerPage();
    });
    var introducedDate = "20160810",
        discontinuedDate = "20170105";

    it('Open webpage', () => {
        browser.get(WEBPAGE_URL.COMPUTER_DATABASE);
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Click add button', () => {
        click("add");
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