const elementUtil = require('../util/elementUtil')

class AlertPage
{
/*
page locators for the alert  page
*/
    getalertBtn(index) {return $(`ul li:nth-child(${index}) button`)}
    getresult() {return $('#result')}
    getResultText() { return this.getresult().getText() }
  
clickOnAlertButton(value)
{
elementUtil.doClick(this.getalertBtn(value))
}

}
module.exports = new AlertPage()