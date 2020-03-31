import Page from "./page";

class HomePage extends Page{
    open () {
        super.open('')       
        // browser.pause(3000);
    }

    get welcomeMsg() {
        return $('.sp-block.sp-heading-block');
    }

    get buttomShortCuts() {
        return $('.sp-image-holder.link has-text');
    }

    waitForHomePageToLoad () {
        if(!this.buttomShortCuts.isDisplayed()){
          this.buttomShortCuts.waitForDisplayed(3000);
        }
      }

      isMainButtonsPreset(){
          return this.welcomeMsg.isDisplayed() && this.buttomShortCuts.isDisplayed()
      }

}

export const homePage = new HomePage();
