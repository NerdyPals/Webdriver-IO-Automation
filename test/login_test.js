const { assert } = require('chai');
const loginPage = require('../pages/login_page')
const configData = require('../config')
const constants = require('../constants')
describe("Test Login Page Functionality", function()
{
//this.retries(2)
it("Verify Login Page Title",function(){

    browser.url('/');
    browser.maximizeWindow();
    assert.equal(constants.LOGIN_PAGE_TITLE,browser.getTitle(),'title does not match or found')
});

it("Verify  Login",function(){

 browser.url('/');
 browser.maximizeWindow();
 console.log("LOGIN PAGE TITLE IS :: :: :: :: "+browser.getTitle())
 loginPage.doLogin(configData.username,configData.password)   
 assert.equal(constants.authenticationURL,browser.getUrl(),'There is some issue with the login functionality')
     
 });
 

});