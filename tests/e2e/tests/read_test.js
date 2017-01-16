describe('Protractor Demo App', function () {
    browser.ignoreSynchronization = true;
    var computerName = "Blue Dragon";

    it('Open webpage', function () {
        browser.get("http://computer-database.herokuapp.com/computers");
        expect(browser.getTitle()).toEqual("Computers database");
    });

    it('filter list', function () {
        element(by.id("searchbox")).sendKeys(computerName);
        element(by.id("searchsubmit")).click();
    });

    it('should search list of computers', function () {
        var listContainsValue = false;
        element.all(by.xpath("//table[contains(@class,'computers')]/tbody/tr/td/a")).each((element) => {

            element.getText().then((text)=> {
                if (listContainsValue == false)
                    if (text == computerName)
                        listContainsValue = true;
            });

            if (listContainsValue)
                return false;
        }).then(()=> {

            expect(listContainsValue, "List of computers not contain expected value: " + computerName + ".");
        });
    });
});