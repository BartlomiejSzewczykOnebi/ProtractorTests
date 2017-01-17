var pageHelpers = function () {

    /**
     * Searching for web element and click it
     * @param locator   the locator [String] that element will be find by
     * @param findBy    the locator type (id, xpath, css etc.) by default id
     */
    click = (locator, findBy) => {
        findElement(locator, findBy).click();
    };

    /**
     * Searching for web element and entering value
     * @param value      value to enter into field
     * @param locator   the locator [String] that element will be find by
     * @param findBy    the locator type (id, xpath, css etc.) by default id
     */
    typeValue = (value, locator, findBy) => {
        findElement(locator, findBy).sendKeys(value);
    };

    /**
     * Searching for web element and return it
     * @param locator   the locator [String] that web element will be find by
     * @param findBy    the locator type (id, xpath, css etc.) by default id
     * @return WebElement
     */
    findElement = (locator, findBy) => {
        switch(findBy){
            case BY.ID:
                return element(by.id(locator));
            case BY.XPATH:
                return element(by.xpath(locator));
            case BY.CSS:
                return element(by.css(locator));
            default:
                return element(by.id(locator));
        }
    };
};

module.exports = new pageHelpers();
