// search.page.js
var Page = require('./page')
var SearchPage = Object.create(Page, {

    // Elements
    dropDown: { get: function () { return browser.element("[class*='meal'] > [class*='meal-dropdown__button']"); } },
    locationInput: { get: function () { return browser.element("input[placeholder='Search by location']"); } },
    popUpDismiss: { get: function () { return browser.element("//span[text()='I did not have this meal.']"); } },
    reserveButton: { get: function () { return browser.element("[class='mp-reserve-button mp-reserve-button--lunch']"); } },
    searchContainer: { get: function () { return browser.element("div[class*='main-box']"); } },
    searchIcon: { get: function () { return browser.element("div:nth-child(2) > span > svg"); } },
    searchInput: { get: function () { return browser.element("input[placeholder='Search by restaurant or meal']"); } },
    successText: { get: function () { return browser.element(""); } },
    twelvePickUpTime: { get: function () { return browser.element("[class*='pickupTimes-list'] > li:nth-of-type(3)"); } },

    // Text Elements
    nanooshText: { get: function () { return browser.element("//div[text()='Nanoosh - Union Square']"); } },
    numPangText: { get: function () { return browser.element("//div[text()='Num Pang - Union Square']"); } },

    // Food Images
    nanooshImage: { get: function () { return browser.element("img[ng-alt='Avocado Lentil Salad']"); } },
    numPangImage: { get: function () { return browser.element("img[ng-alt='Five Spice Pork Belly Sandwich']"); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },
    submit: { value: function() {
        this.form.submitForm();
    } }
});
module.exports = SearchPage;
