describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://computer-database.herokuapp.com/computers');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});