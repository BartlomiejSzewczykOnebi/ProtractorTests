'use strict';
var ComputersDatabaseListPage = require("../pages/computers_database_list_page.js");
var ComputersDatabaseEdit = require("../pages/edit_delete_computer_page.js");

describe('Computer database tests - check computer name', () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseListPage();
    var computersDatabaseEdit = new ComputersDatabaseEdit();

    var computerName = "Black Moon";

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

    it("Element value equals to expected", () => {
        expect(computersDatabaseEdit.computerNameInput.getAttribute("value")).toEqual(computerName);
    });

    afterAll(function (){
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});