describe('Computer database tests - adding computer', () => {

    browser.ignoreSynchronization = true;
    let computerName = "Blue Dragon";
        introducedDate = "2016-08-10";
        discontinuedDate = "2017-01-05";
        company = "IBM";

    it('Open webpage', () => {
        browser.get('http://computer-database.herokuapp.com/computers');
        expect(browser.getTitle()).toEqual('Computers database');
    });

    it('Click add', () => {

        element(by.id("add")).click();
    });

    it('Header text is Add a computer', () => {

        let header = browser.findElement(By.xpath('//*[@id="main"]/h1'));
        expect(header.getText()).toEqual('Add a computer');
    });

    it('Provide input elements', () => {
        element(by.id("name")).sendKeys(computerName);
        element(by.id("introduced")).sendKeys(introducedDate);
        element(by.id("discontinued")).sendKeys(discontinuedDate);
    });

    it('Search for element in list', () => {
        element.all(by.xpath("//*[@id='company']/option")).map((element)=>{
            element.getText().then((el) => {
                if(el == company) {
                    element.click();
                }
            });
        });
    });


});