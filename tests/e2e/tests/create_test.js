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
        typeValue(computerName, "name");
        typeValue(introducedDate, "introduced");
        typeValue(discontinuedDate, "discontinued");
    });

    it('Search for element on list and click it', () => {
        let listContainsValue = false;

        element.all(by.xpath("//*[@id='company']/option")).each((element)=>{
            element.getText().then((el) => {
                if(el == company) {
                    element.click();
                    listContainsValue = true;
                }
            });
        }).then(() => {
            expect(listContainsValue).toBe(true, "No company named " + company + " found on list");
        });
    });

    it('Click create this computer', () => {
        click("//div[@class='actions']/input", BY.XPATH);
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
        let header = findElement("//*[@id='main']/h1", BY.XPATH);
        expect(header.getText()).toEqual('Add a computer', "Header doesn't equals text: Add a computer.");
    });

    it('Check validation texts', () => {
        let validationTextComputerName = findElement("//*[@id='name']/following-sibling::span", BY.XPATH);
        expect(validationTextComputerName.getText()).toEqual("Required", "Validation text doesn't equals text: Required.");

        let validationTextIntroducedDate = findElement("//*[@id='introduced']/following-sibling::span", BY.XPATH);
        expect(validationTextIntroducedDate.getText()).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");

        let validationTextDiscontinuedDate = findElement("//*[@id='discontinued']/following-sibling::span", BY.XPATH);
        expect(validationTextDiscontinuedDate.getText()).toEqual("Date ('yyyy-MM-dd')", "Validation text doesn't equals text: Date ('yyyy-MM-dd').");
    });

    it('Type text into input elements', () => {
        typeValue(introducedDate, "introduced");
        typeValue(discontinuedDate, "discontinued");
    });

    it('Click create this computer button', () => {
        click("//div[@class='actions']/input", BY.XPATH);
    });

    it('Check if validation appear', () => {
        let validationComputerName = findElement("//*[@for='name']/parent::div", BY.XPATH);
        expect(validationComputerName.getAttribute('class')).toContain("error", "Field doesn't show validation");

        let validationIntroducedDate = findElement("//*[@for='introduced']/parent::div", BY.XPATH);
        expect(validationIntroducedDate.getAttribute('class')).toContain("error", "Field doesn't show validation");

        let validationDiscontinuedDate = findElement("//*[@for='discontinued']/parent::div", BY.XPATH);
        expect(validationDiscontinuedDate.getAttribute('class')).toContain("error", "Field doesn't show validation");
    });
});