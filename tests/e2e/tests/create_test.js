describe('Computer database tests - adding computer', function() {
    it('Adding computer', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
        expect(browser.getTitle()).toEqual('Computers database');
    });
    it('Adding computer - validation', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
        expect(browser.getTitle()).toEqual('Computers database');
    });
});