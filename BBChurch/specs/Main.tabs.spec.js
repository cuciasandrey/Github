import assert from 'assert';
import { homePage } from '../pages/Home.page';
import { resourcePage } from '../pages/Resource.page';


describe('navigation tabs', () => {
   
       it('Verify if the main page is opened', () => {
        homePage.open();
        homePage.waitForHomePageToLoad()
        assert.equal(homePage.isMainButtonsPreset(),true)
    });
    
    it('Verify if the resurce page is opened', () => {
        resourcePage.open();
        resourcePage.waitForResourcePageToLoad()
        assert.equal(resourcePage.isMainButtonsPreset(),true)
        assert.equal(resourcePage.getHeaderTitle(),'Воскресные служение')
    });
   
});
