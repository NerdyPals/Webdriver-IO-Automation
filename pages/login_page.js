const elementUtil = require('../util/elementUtil')
const constants = require('../constants')

class LoginPage
{
/*
page locators for the Login  page
*/    get submitBtn() { return $('#SubmitLogin') } 
    get password() { return $('#passwd') } 
    get emailID() { return $('#email') } 
    get loginButton() { return $('.login') } 
    get cartText() {return $('p=Your shopping cart is empty.')}
    get cartBtn() {return $('body.my-account.hide-left-column.hide-right-column.lang_en:nth-child(2) div.header-container div.container div.row div.col-sm-4.clearfix:nth-child(3) div.shopping_cart > a:nth-child(1)')}
    

doLogin(email , pwd)
{

    elementUtil.doClick(this.loginButton)
    console.log(':::::::::: CLICK ON LOGIN BUTTON SUCCESSFUL')
    elementUtil.doSetValue(this.emailID , email)
    elementUtil.doSetValue(this.password , pwd)
    elementUtil.doClick(this.submitBtn)
    
  }

}
module.exports = new LoginPage()