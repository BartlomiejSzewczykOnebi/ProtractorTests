describe("Computer database tests - delete computer", () => {

    browser.ignoreSynchronization = true;
    let computerName = "Black Moon";

    it("Open webpage", () => {
        browser.get("http://computer-database.herokuapp.com/computers");
        expect(browser.getTitle()).toEqual("Computers database");
    });

    it("Insert text into search box", () => {

        element(by.id("searchbox")).sendKeys(computerName);
    });

    it("Click filter by results", () => {

        element(by.id("searchsubmit")).click();
    });

    it("Search for element in list", () => {
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

    it("Click Delete this computer", () => {

        element(by.xpath("//form[@class='topRight']/input")).click();
    });
});