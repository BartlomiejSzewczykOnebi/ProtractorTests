require("../helpers/page_helpers.js");
require("../lib/constans.js");

describe('Computer database tests - check computer name', function () {
    browser.ignoreSynchronization = true;
    var computerName = "Black Moon";

    it('Open webpage', () => {
        browser.get("http://computer-database.herokuapp.com/computers");
        expect(browser.getTitle()).toEqual("Computers database");
    });

    it('Filter list', () => {
        typeValue(computerName, "searchbox");
        click("searchsubmit");
    });

    it('Filtered list should contains expexted value', () => {
        var listContainsValue = false;

        element.all(by.xpath("//table[contains(@class,'computers')]/tbody/tr/td/a")).each((element) => {
            element.getText().then((text)=> {
                if (text == computerName)
                    listContainsValue = true;
            });

            return listContainsValue;
        }).then(()=> {
            expect(listContainsValue).toBe(true, "List of computers not contain expected value: '" + computerName + "'.");
            element.all(by.xpath("//table[contains(@class,'computers')]/tbody/tr/td/a")).first().click();
        });
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