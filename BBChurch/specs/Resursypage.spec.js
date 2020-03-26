const {Builder, By, } = require("selenium-webdriver");


 let driver = new Builder().forBrowser("chrome").build();
describe("Verify whether links on Vo Chto Mi Verim Page work correctly", function() {

	it("check that the Navigate Glavnaya button opens the Glavnaya page", function(done) {
        browser.url('/resursy');
     	const resursy = $('(//*[@id="nav_glavnaya"])[2]')
        resursy.click()
    });
    it("check that the Navigate Vo Chto Mi Verim button opens the  Vo Chto Mi Verim page", function(done) {
        browser.url('/');
    	const resursy = $('(//*[@id="nav_o-nas"])[2]')
        resursy.click()
        const rest = $('(//*[@id="nav_vo-chto-my-verim"])[2]')
        rest.click()
    });
    it("check that the Pojertvovanie button opens the Pojertvovanie page", function(done) {
        browser.url('/resursy');
     	const resursy = $('(//*[@id="nav_pozhertvovaniya"])[2]')
        resursy.click()
    });
    it("check that the Play button start video on the Resursy page", function(done) {
        browser.url('/resursy');
        driver.findElement(By.xpath('//*[@id="ember497"]')).click();
	    });
});