const elementUtil = require('../util/elementUtil')
const constants = require('../constants')

class ProductPage
{
/*
page locators for the product  page
*/
    get catalog() { return $('p=Catalog') } 
    get tShirt() {return $('//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[3]/a[1]')}

    catalogVerification()
    {
    elementUtil.doClick(this.tShirt)
    return elementUtil.doGetText(this.catalog)
    }

}
module.exports = new ProductPage()
