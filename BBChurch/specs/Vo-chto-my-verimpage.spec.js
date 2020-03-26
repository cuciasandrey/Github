var assert = require('assert');


describe("Verify whether links on Vo Chto Mi Verim Page work correctly", function() {

    it("check that the Navigate Glavnaya button opens the Glavnaya page", function(done) {
        browser.url('/vo-chto-my-verim');
      	const resursy = $('(//*[@id="nav_glavnaya"])[2]')
        resursy.click()
    });
    it("check that the Navigate Resurs button opens the Resursy page", function(done) {
        browser.url('/vo-chto-my-verim');
      	const resursy = $('(//*[@id="nav_resursy"])[2]')
        resursy.click()
    });
    it("check that the Pojertvovanie button opens the Pojertvovanie page", function(done) {
        browser.url('/vo-chto-my-verim');
      	const resursy = $('(//*[@id="nav_pozhertvovaniya"])[2]')
        resursy.click()
   });
});