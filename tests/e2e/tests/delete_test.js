'use strict';
var ComputersDatabaseListPage = require("../pages/computers_database_list_page.js");
var ComputersDatabaseEdit = require("../pages/edit_delete_computer_page.js");

describe("Computer database tests - delete computer", () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseListPage();
    var computersDatabaseEdit = new ComputersDatabaseEdit();

    let computerName = "Blue Dragon";

    it('Window title is Computers database', () => {
        computersDatabaseListPage.openPage();
        expect(browser.getTitle()).toEqual("Computers database");
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
        expect(computersDatabaseEdit.headerText).toEqual("Edit computer");
    });

    it("Click Delete this computer", () => {
        computersDatabaseEdit.clickDelete();
        expect(computersDatabaseListPage.messageText.getText()).toEqual("Done! Computer has been deleted");
    });

    afterAll(function (){
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});