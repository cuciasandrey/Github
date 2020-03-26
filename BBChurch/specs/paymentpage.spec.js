
const {Builder, By, } = require("selenium-webdriver");
let driver = new Builder().forBrowser("chrome").build();
var assert = require('assert');

describe("Verify whether payment metode work correctly", function() {
    it("check that we can change amount work properly", function(done) {
        browser.url('/pozhertvovaniya');
        driver.findElement(By.xpath('//*[@id="giftAmountInput"]')).sendKeys('100');
     });
     it("check that we can change FUND ", function(done) {
        browser.url('/pozhertvovaniya');
        driver.findElement(By.xpath(' //*[@id="giftFundSelections"]/select[2]/option[2]')).click();
     });
    
     it("check that we can change FREQUENCY ", function(done) {
        browser.url('/pozhertvovaniya');
        driver.findElement(By.xpath('//*[@id="VamountAndFund"]/div[1]/div[2]/div[2]/div[3]/div/div[3]/ul/li[3]')).click();
     
      });

     it("check that Next Button work properly ", function(done) {
        browser.url('/pozhertvovaniya');
        driver.findElement(By.xpath('//*[@id="VamountAndFund"]/div[2]/div/button')).click();
     });

     
 });






    