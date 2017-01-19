'use strict';
var ComputersDatabaseListPage = require("../pages/computers_database_list_page.js");
var ComputersDatabaseEdit = require("../pages/edit_delete_computer_page.js");

describe("Computer database tests - delete computer", () => {

    browser.ignoreSynchronization = true;
    var computersDatabaseListPage = new ComputersDatabaseListPage();
    var computersDatabaseEdit = new ComputersDatabaseEdit();
    var computerName = "Blue Dragon 2";
        // newComputerName = "Blue Dragon 2",
        // introducedDate = "1961-01-01",
        // discontinuedDate = "",
        // company = "Sony";

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

    it("Click computer name on list and check if header text is \"Edit computer\"", () => {

        computersDatabaseListPage.clickFirstComputerName(computerName);
        expect(computersDatabaseEdit.headerText.getText()).toEqual("Edit computer");
    });

    it("Click \"Delete this computer\" button and check if success message appear", () => {

        computersDatabaseEdit.clickDelete();
        expect(computersDatabaseListPage.messageText.getText()).toEqual("Done! Computer has been deleted",
            "Text from success message not equals text: Done! Computer has been deleted.");
    });

    afterAll(function (){

        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});