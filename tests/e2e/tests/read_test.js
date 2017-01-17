var ComputersDatabaseList = require("../pages/computers_database_list.js");

describe('Computer database tests - check computer name', function () {
    browser.ignoreSynchronization = true;
    computersDatabaseListPage = new ComputersDatabaseList();

    var computerName = "Black Moon";

    it('Open webpage', () => {
        expect(browser.getTitle()).toEqual("Computers database");
    });

    it('Filter list', () => {
        computersDatabaseListPage.filterList(computerName);
        expect(computersDatabaseListPage.computersList.count()).toBeGreaterThan(0);
    });

    it('Filtered list should contains expexted value', () => {
        expect(computersDatabaseListPage.computersList.getText()).toContain(computerName);
        computersDatabaseListPage.clickComputerNameAt(0);
    });

    it("Header text is Edit computer", () => {
        let header = browser.findElement(By.xpath("//*[@id='main']/h1"));
        expect(header.getText()).toEqual("Edit computer");
    });

    it("Element value equals to expected", () => {
        var value = browser.findElement(By.id("name"));
        expect(value.getAttribute("value")).toEqual(computerName);
    });
});