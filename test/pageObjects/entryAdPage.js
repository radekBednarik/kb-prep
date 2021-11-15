const { until, By } = require("selenium-webdriver");
const { BasePage } = require("./basePage");

class EntryAddPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = "https://the-internet.herokuapp.com/entry_ad";
    this.selectors = {
      modalTitle: "div#modal h3",
      modalClose: '//div[contains(@class, "modal-footer")]',
    };
  }

  get modalTitle() {
    return this.driver.wait(
      until.elementIsVisible(
        this.driver.findElement(By.css(this.selectors.modalTitle))
      ),
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

  async visit() {
    await this.driver.get(this.url);
  }

  async closeModal() {
    await this.driver.executeScript(() => {
      const underlay = document.querySelector("#modal div");
      underlay.remove();
    });
    await this.modalClose.click();
  }
}

module.exports = { EntryAddPage };
