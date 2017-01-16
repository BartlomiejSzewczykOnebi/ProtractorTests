describe('Computer database tests - adding computer', () => {

    browser.ignoreSynchronization = true;
    let computerName = "Blue Dragon";
        introducedDate = "2016-08-10";
        discontinuedDate = "2017-01-05";
        company = "IBM";

    it('Open webpage', () => {
        browser.get('http://computer-database.herokuapp.com/computers');
        expect(browser.getTitle()).toEqual("Computers database", "Web page title doesn't equals text: Computers database.");
    });

    it('Click add', () => {
        element(by.id("add")).click();
    });

    it('Header text is Add a computer', () => {
        let header = browser.findElement(By.xpath('//*[@id="main"]/h1'));
        expect(header.getText()).toEqual('Add a computer', "Header doesn't equals text: Add a computer.");
    });

    it('Provide input elements', () => {
        element(by.id("name")).sendKeys(computerName);
        element(by.id("introduced")).sendKeys(introducedDate);
        element(by.id("discontinued")).sendKeys(discontinuedDate);
    });

    it('Search for element on list and click it', () => {
        let listContainsValue = false;

        element.all(by.xpath("//*[@id='company']/option")).each((element)=>{
            element.getText().then((el) => {
                if(el == company) {
                    element.click();
                    listContainsValue = true;
                }
            });
        }).then(() => {
            expect(listContainsValue).toBe(true, "No company named " + company + " found on list");
        });
    });

    it('Click create this computer', () => {
        element(by.xpath("//div[@class='actions']/input")).click();
    });

    it('Search for an element', () => {
        element(by.id("searchbox")).sendKeys(computerName);
        element(by.id("searchsubmit")).click();
    });

    it('Search for element on list and click it', () => {
        let listContainsValue = false;

        element.all(by.xpath("//table[contains(@class,'computers')]/tbody/tr/td/a")).each((element)=>{
            element.getText().then((el) => {
                console.log(el +" == " + computerName);
                if(el == computerName) {
                    listContainsValue = true;
                }
            });
        }).then(() => {
            expect(listContainsValue).toBe(true, "No computer named " + computerName + " found on list");
        });
    });
});