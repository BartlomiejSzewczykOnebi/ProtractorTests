'use strict';
require("../helpers/page_helpers.js");
require("../lib/constans.js");
var EditDeleteComputerPage = require("../pages/add_computer_page.js");

describe("Computer database tests - update computer", () => {

    browser.ignoreSynchronization = true;
    var addComputerPage;

    beforeEach(() =>{
        addComputerPage = new AddComputerPage();
    });

    let computerName = "IBM 7030";
        introducedDate = "1961-01-01";
        discontinuedDate = "";
        company = "IBM";

    it("Open webpage", () => {
        browser.get("http://computer-database.herokuapp.com/computers");
        expect(browser.getTitle()).toEqual("Computers database");
    });

    it("Insert text into search box", () => {

        element(by.id("searchbox")).sendKeys(computerName);
    });

    it("Click filter by results", () => {

        element(by.id("searchsubmit")).click();
        click("searchsubmit");
    });

    it("Search for element in list", () => {
        element.all(by.xpath("//*[@id='main']/table/tbody/tr/td[1]/a")).map((element)=>{
            element.getText().then((text) => {
                if(text == computerName) {
                    element.click();
                }
            });
        });
    });

    it("Header text is Edit computer", () => {

        let header = browser.findElement(By.xpath("//*[@id='main']/h1"));
        expect(header.getText()).toEqual("Edit computer");
    });

    it("Provide input elements", () => {
        element(by.id("introduced")).clear();
        element(by.id("introduced")).sendKeys(introducedDate);
        element(by.id("discontinued")).clear();
        element(by.id("discontinued")).sendKeys(discontinuedDate);
    });

    it("Click Save this computer", () => {

        element(by.xpath("//div[@class='actions']/input")).click();
    });
});