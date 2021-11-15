class BasePage {
  constructor(driver) {
    this.driver = driver;
    this.navigation = this.driver.navigate();
    this.options = this.driver.manage();
  }

  async isElementVisible(element) {
    return await element.isDisplayed();
  }

  async reload() {
    await this.navigation.refresh();
  }
}

module.exports = { BasePage };
