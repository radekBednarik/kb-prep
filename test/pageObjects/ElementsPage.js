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
   * @property {string} selectors.locatedBttnOnVisit
   * @property {string} selectors.locatedBttnNew
   */
  constructor(driver) {
    super(driver);
    /** @type {string} */
    this.url = "https://the-internet.herokuapp.com/add_remove_elements/";
    this.selectors = {
      locatedBttnOnVisit: "div#content button",
      locatedBttnNew: "div#elements button",
    };
  }

  /**
   * Returns the on visit button WebElement as promise.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   *
   */
  get locatedBttnOnVisit() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.locatedBttnOnVisit))
    );
  }

  /**
   * Returns the new button created by click WebElement as promise.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  get locatedBttnNew() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.locatedBttnNew))
    );
  }

  /**
   * Visits this page.
   * @async
   * @returns {Promise<void>}
   */
  async visit() {
    await super.visit(this.url);
  }

  /**
   * Clicks the on-visit button.
   * @async
   * @returns {Promise<void>}
   */
  async clickLocatedBttnOnVisit() {
    await this.locatedBttnOnVisit.click();
  }
}

module.exports = { ElementsPage };
