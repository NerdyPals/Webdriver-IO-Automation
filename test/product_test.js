const { assert } = require('chai');
const constants = require('../constants');
const product_page = require('../pages/product_page');
describe("Test Product Catalog", function()
{
it("Verify Product Catalog",function(){

    browser.url('/');
    browser.maximizeWindow();
    console.log('Verifying the catalog now')
    let title = product_page.catalogVerification();
    assert.equal(constants.CatalogText,title,'title does not match or found')
});

});