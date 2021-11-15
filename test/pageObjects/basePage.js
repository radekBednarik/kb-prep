class BasePage {
  constructor(driver) {
    this.driver = driver;
    this.navigation = this.driver.navigate();
  }

  async isElementVisible(element) {
    return await element.isDisplayed();
  }

  async reload() {
    await this.navigation.refresh();
  }
}

module.exports = { BasePage };
