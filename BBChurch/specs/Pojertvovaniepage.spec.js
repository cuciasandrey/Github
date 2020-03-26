var assert = require('assert');


describe("Verify whether links on Vo Chto Mi Verim Page work correctly", function() {

	it("check that the Navigate Glavnaya button opens the Glavnaya page", function(done) {
        browser.url('/pozhertvovaniya');
     	const resursy = $('(//*[@id="nav_glavnaya"])[2]')
        resursy.click()
    });
    it("check that the Navigate Vo Chto Mi Verim button opens the  Vo Chto Mi Verim page", function(done) {
        browser.url('/pozhertvovaniya');
        const resursy = $('(//*[@id="nav_o-nas"])[2]')
        resursy.click()
        const rest = $('(//*[@id="nav_vo-chto-my-verim"])[2]')
        rest.click()
    });
    it("check that the Navigate Resurs button opens the Resursy page", function(done) {
        browser.url('/vo-chto-my-verim');
      	const resursy = $('(//*[@id="nav_resursy"])[2]')
        resursy.click()
    });
    it("check that the Pojertvovanie button opens the Pojertvovanie page", function(done) {
        browser.url('/pozhertvovaniya');
		const resursy = $('(//*[@id="nav_pozhertvovaniya"])[2]')
        resursy.click()
    });
});