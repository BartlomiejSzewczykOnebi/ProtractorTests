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

    it('Search list', () => {
        var list = element.all(by.xpath("//*[@id='company']/option")).map((element)=>{
            element.getText().then(function (cos) {
                console.log(cos);
            });
            // if(element.getText() == company){
            //     console.log("====================SUCCESSS==================");
            //     // element.click();
            // }
            // return element.getText();
        });

        // list.then((element)=>{
        //     console.log("====================SUCCESSS==================");
        //     console.log(element);
        // });
    });


});