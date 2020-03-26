var assert = require('assert');

describe("Verify whether BBC links on homepage work correctly", function() {

	it("check that the Vo-chto-my-verim  button opens the Vo-chto-my-verim page", function(done) {
		browser.url('/');
		const loginportal = $('//*[@id="sp-content"]/section[3]/div[2]/div/div/div/div[1]/div')
		loginportal.click()
	});
    it("check that the Resursy button opens the Resursy page", function(done) {
	    browser.url('/');
		const contact = $('//*[@id="sp-content"]/section[3]/div[2]/div/div/div/div[2]/div/div/a')
		contact.click()
		
	});
	it("check that the Kalendar button opens the Kalendar page", function(done) {
		browser.url('/');
		const contact = $('//*[@id="sp-content"]/section[3]/div[2]/div/div/div/div[3]')
		contact.click()
			
	});
});
