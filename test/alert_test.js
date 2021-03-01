const { assert } = require("chai");
const alertpage = require("../pages/alert_page")
const configData = require('../config')
const constants = require('../constants')

describe("Test Alerts", function()
{

 it("Click and Verify the Alert Text",function(){

    browser.url(configData.alertUrl);
    console.log("launched the browser to test alert functionality")
    browser.maximizeWindow();
    console.log("Clicking on the  alert button now")
    alertpage.clickOnAlertButton(constants.alertNumber);
    const alertText = browser.getAlertText();
    console.log(alertText);
    assert.equal(constants.firstAlertText,alertText,'alert text does not match')
    browser.acceptAlert()
    console.log(alertpage.getResultText())
    assert.equal(constants.alertResultText,alertpage.getResultText())
    browser.pause(constants.browserPauseValue)
    });
    
});
