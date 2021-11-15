const { until, By } = require("selenium-webdriver");
const { BasePage } = require("./basePage");

class ElementsPage extends BasePage {
  constructor(driver) {
    super(driver);
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
}

module.exports = { ElementsPage };
