const { assert } = require('chai');
const homePage = require('../pages/home_page')
const loginPage = require('../pages/login_page')
const configData = require('../config')
const constants = require('../constants')

describe("Test Home Page Empty Cart Functionality", function()
{

 it("Verify Empty Cart",function(){

    browser.url('/');
    browser.maximizeWindow();
    loginPage.doLogin(configData.Correctusername,configData.Correctpassword)   
    console.log('Login succesfull')
    let cartText = homePage.cartVerification();
    assert.equal(constants.emptyCartText,cartText,'text not matched')
    });
    
});
