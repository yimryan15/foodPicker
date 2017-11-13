// login.page.js
var Page = require('./page')
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    logInButton: { get: function () { return browser.element("button[type='submit'] > span"); } },
    password: { get: function () { return browser.element("input[type='password']"); } },
    username: { get: function () { return browser.element("div[class='col-sm-12'] > input[type='email']"); } },

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
module.exports = LoginPage;
