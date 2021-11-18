/**
 * Module contains ElementPage class.
 * @module test/pageObjects
 */

const { until, By } = require("selenium-webdriver");
const { BasePage } = require("./basePage");

/**
 * Class representing Elements page object.
 * @class
 * @extends BasePage
 */
class ElementsPage extends BasePage {
  /**
   * Creates instance of the ElementsPage class.
   * @param {import("selenium-webdriver").ThenableWebDriver} driver
   * @property {object} selectors
   * @property {string} selectors.buttonOnVisit
   * @property {string} selectors.buttonAfterClick
   */
  constructor(driver) {
    super(driver);
    /** @type {string} */
    this.url = "https://the-internet.herokuapp.com/add_remove_elements/";
    this.selectors = {
      buttonOnVisit: "div#content button",
      buttonAfterClick: "div#elements button",
    };
  }

  /**
   * Returns the on visit button WebElement as promise.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   *
   */
  get buttonOnVisit() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.buttonOnVisit))
    );
  }

  /**
   * Returns the new button created by click WebElement as promise.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  get buttonAfterClick() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.buttonAfterClick))
    );
  }

  /**
   * Visits this page.
   * @async
   * @returns {Promise<void>}
   */
  async visit() {
    await this.driver.get(this.url);
  }

  /**
   * Clicks the on-visit button.
   * @async
   * @returns {Promise<void>}
   */
  async clickButtonOnVisit() {
    await this.buttonOnVisit.click();
  }
}

module.exports = { ElementsPage };
