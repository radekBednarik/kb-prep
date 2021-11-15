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

  async waitForCssStyleChange(element, styleName, timeout = 5000) {
    let counter = 0;
    const oldValue = await element.getCssValue(styleName);

    while (counter <= timeout) {
      counter += 1000;
      const newValue = await element.getCssValue(styleName);

      if (oldValue !== newValue) {
        return;
      }
    }

    throw Error(`CSS property ${styleName} value did not change.`);
  }
}

module.exports = { BasePage };
