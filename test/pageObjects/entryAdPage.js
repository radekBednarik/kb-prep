const { until, By } = require("selenium-webdriver");
const { BasePage } = require("./basePage");

class EntryAddPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = "https://the-internet.herokuapp.com/entry_ad";
    this.selectors = {
      modal: "div#modal",
      modalTitle: "div#modal h3",
      modalClose: '//div[contains(@class, "modal-footer")]',
    };
  }

  get modal() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.modal)),
      5000
    );
  }

  get modalTitle() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.modalTitle)),
      5000
    );
  }

  get modalClose() {
    return this.driver.wait(
      until.elementIsVisible(
        this.driver.findElement(By.xpath(this.selectors.modalClose))
      ),
      5000
    );
  }

  async getVisibleModal() {
    return await this.driver.wait(
      until.elementIsVisible(this.modalTitle),
      2000
    );
  }

  async getNotVisibleModal() {
    return await this.driver.wait(
      until.elementIsNotVisible(this.modalTitle),
      2000
    );
  }

  async visit() {
    await this.driver.get(this.url);
  }

  async closeModal() {
    await this.driver.executeScript(() => {
      document.querySelector("#modal div").remove();
    });
    this.waitForCssStyleChange(await this.modal, "display");
    await this.modalClose.click();
  }
}

module.exports = { EntryAddPage };
