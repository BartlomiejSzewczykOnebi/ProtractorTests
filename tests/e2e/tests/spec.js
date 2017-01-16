describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://computer-database.herokuapp.com/computers');

    expect(browser.getTitle()).toEqual('Computer database');
  });
});