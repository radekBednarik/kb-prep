/**
 * Module with BasePage class declaration.
 * @module test/pageObjects
 */

/**
 * Class representing BasePage. This class should not be instantiated itself
 * but inherited by the specific page objects.
 * @class
 */
class BasePage {
  /**
   * Creates instance of the BasePage
   * @param {import("selenium-webdriver").ThenableWebDriver} driver selenium driver instance
   */
  constructor(driver) {
    /** @type {import("selenium-webdriver").ThenableWebDriver} */
    this.driver = driver;
    /** @type {import("selenium-webdriver").Navigation} */
    this.navigation = this.driver.navigate();
    /** @type {import("selenium-webdriver").Options} */
    this.options = this.driver.manage();
  }

  /**
   * Predicate. If `element` is displayed, then `true`. else `false`.
   * @async
   * @param {import("selenium-webdriver").WebElement} element
   * @returns {Promise<boolean>}
   */
  async isElementVisible(element) {
    return await element.isDisplayed();
  }

  /**
   * Reloads the current page.
   * @async
   * @returns {Promise<void>}
   */
  async reload() {
    await this.navigation.refresh();
  }

  /**
   * Waits until CSS <style> property value changes.
   * @param {import("selenium-webdriver").WebElement} element
   * @param {string} styleName
   * @param {number} timeout
   * @param {number} pollInterval
   * @returns {Promise<void>}
   */
  async waitForCssStyleChange(
    element,
    styleName,
    timeout = 5000,
    pollInterval = 1000
  ) {
    let counter = 0;
    const oldValue = await element.getCssValue(styleName);

    while (counter <= timeout) {
      counter += pollInterval;
      const newValue = await element.getCssValue(styleName);

      if (oldValue !== newValue) {
        return;
      }

      await this.driver.sleep(pollInterval);
    }

    throw Error(`CSS property ${styleName} value did not change.`);
  }
}

module.exports = { BasePage };
