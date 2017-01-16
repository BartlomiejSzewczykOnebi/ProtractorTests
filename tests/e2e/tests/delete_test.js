describe("Computer database tests - delete computer", () => {

    browser.ignoreSynchronization = true;
    let computerName = "5Z1jHhcJA3";

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

    it("Click Delete this computer", () => {

        element(by.xpath("//form[@class='topRight']/input")).click();
    });
});