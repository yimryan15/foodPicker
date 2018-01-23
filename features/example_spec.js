require('dotenv').config();
const login = require('../pages/login');
const search = require('../pages/search');

describe('MealPal Selection', function () {
  it('navigate to homepage @watch', function () {
    browser.windowHandleSize({width: 1600, height: 1200});
    browser.url('https://secure.mealpal.com/login');
    expect(browser.getTitle()).toEqual('MealPal | Login');
  });

  it('logging in', function () {
    login.username.setValue(process.env.MP_USER);
    login.password.setValue(process.env.MP_PASS);
    login.logInButton.click();
    browser.pause(6000);
  });

  it('dismiss popup', function () {
    browser.pause(1000);
    if(search.popUpDismiss.isExisting()) {
      search.popUpDismiss.click()
    } else {
      return;
    }
  });

  it('searching for a selection', function () {
    var todayDate = new Date();
    var day = todayDate.getDay();
    search.locationInput.setValue('Union Square');
    if (day == 0) {
      search.searchInput.setValue('roast kitchen');
      search.searchIcon.click();
      browser.pause(1500);
      search.firstMeal.click();
    } else if (day == 1) {
      search.searchInput.setValue('roast kitchen');
      search.searchIcon.click();
      browser.pause(1500);
      search.firstMeal.click();
    } else if (day == 2) {
      search.searchInput.setValue('roast kitchen');
      search.searchIcon.click();
      browser.pause(1500);
      search.firstMeal.click();
    } else if (day == 3) {
      search.searchInput.setValue('roast kitchen');
      search.searchIcon.click();
      browser.pause(1500);
      search.firstMeal.click();
    } else if (day == 4) {
      search.searchInput.setValue('roast kitchen');
      search.searchIcon.click();
      browser.pause(1500);
      search.firstMeal.click();
    }
  });

  it('selecting time and reserving', function () {
    search.dropDown.click();
    browser.pause(1000);
    search.twelvePickUpTime.click();
    browser.pause(1000);
    search.reserveButton.waitForEnabled();
    search.reserveButton.click();
    browser.pause(3000);
  });
});
