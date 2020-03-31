const assert = require('assert');

describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	

	it("check that the login button opens the login portal page", function(done) {
		browser.url('/');
		const loginportal = $('#login-portal > div > div.section-title > h1')
		loginportal.click()
		const title = browser.getTitle();
		assert.equal(title, 'WebDriverUniversity.com');
		console.log(`Title is: ${  title}`);
		browser.pause(3000);
	});
		it("check that the contact us button opens the contact us page", function(done) {
	browser.url('/');
		const title = browser.getTitle();
		assert.equal(title, 'WebDriverUniversity.com');
		console.log(`Title is: ${  title}`);
		const contact = $('//*[@id="contact_dd"]')
		contact.click()
		browser.pause(3000);
	});
});