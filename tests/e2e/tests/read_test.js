'use strict';
var ComputersDatabaseListPage = require("../pages/computers_database_list_page.js");
var ComputersDatabaseEdit = require("../pages/edit_delete_computer_page.js");

describe('Computer database tests - check computer name', () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseListPage();
    var computersDatabaseEdit = new ComputersDatabaseEdit();
    var computerName = "Blue Dragon",
        introducedDate = "2016-08-10",
        discontinuedDate = "2017-01-05",
        company = "IBM";

    it('Open web page and check if window title is \"Computers database\"', () => {
        computersDatabaseListPage.openPage();
        expect(browser.getTitle()).toEqual("Computers database");
    });

    it('Filter list by computer name and check if list is not empty', () => {
        computersDatabaseListPage.filterList(computerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
    });

    it('Check if computer is displayed on list', () => {

        expect(computersDatabaseListPage.computersList.getText()).toContain(computerName);
    });

    it('Click computer name on list and check if header text is \"Edit computer\"', () => {
        computersDatabaseListPage.clickFirstComputerName(computerName);
        expect(computersDatabaseEdit.headerText).toEqual("Edit computer");
    });

    it("Check if input elements values equals to expected", () => {
        expect(computersDatabaseEdit.computerNameInput.getAttribute('value')).toEqual(computerName);
        expect(computersDatabaseEdit.introducedDateInput.getAttribute('value')).toEqual(introducedDate);
        expect(computersDatabaseEdit.discontinuedDateInput.getAttribute('value')).toEqual(discontinuedDate);
        expect(computersDatabaseEdit.companyInput.$('option:checked').getText()).toEqual(company);
    });

    afterAll(function (){

        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});