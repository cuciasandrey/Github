import Page from "./page";

class ResourcePage extends Page{
    open () {
        super.open('resursy')       
        // browser.pause(3000);
    }

    get player() {
        return $('.kit-player__info');
    }

    get services() {
        return $('.app-header-content__title');
    }

    waitForResourcePageToLoad () {
        if(!this.player.isDisplayed()){
          this.player.waitForDisplayed(3000);
        }
      }

      isMainButtonsPreset(){
          return this.player.isDisplayed() && this.services.isDisplayed()
      }

      getHeaderTitle(){
        return this.services.getText()
    }
}

export const resourcePage = new ResourcePage();
