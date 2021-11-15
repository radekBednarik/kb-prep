import { until, By } from "selenium-webdriver";

export class Page {
  constructor(driver) {
    this.driver = driver;
    this.url = "https://the-internet.herokuapp.com/add_remove_elements/";
    this.selectors = {
      buttonOnVisit: "div#content button",
      buttonAfterClick: "div#elements button",
    };
  }

  get buttonOnVisit() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.buttonOnVisit))
    );
  }

  get buttonAfterClick() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.buttonAfterClick))
    );
  }

  async visit() {
    await this.driver.get(this.url);
  }

  async clickButtonOnVisit() {
    await this.buttonOnVisit.click();
  }

  async isElementVisible(element) {
    return await element.isDisplayed();
  }
}
