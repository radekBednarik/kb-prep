/**
 * Module contains Entry Ad page object class.
 * @module test/pageObjects
 */

const { until, By } = require("selenium-webdriver");
const { BasePage } = require("./basePage");

/**
 * Class representing Entry Ad page.
 * @class
 * @extends BasePage
 */
class EntryAddPage extends BasePage {
  /**
   * Creates the instance of the EntryAddPage class.
   * @param {import("selenium-webdriver").ThenableWebDriver} driver
   * @property {object} selectors
   * @property {string} selectors.modal
   * @property {string} selectors.modalTitle
   * @property {string} selectors.modalClose
   */
  constructor(driver) {
    super(driver);
    /** @type {string} */
    this.url = "https://the-internet.herokuapp.com/entry_ad";
    this.selectors = {
      modal: "div#modal",
      modalTitle: "div#modal h3",
      modalClose: '//div[contains(@class, "modal-footer")]',
    };
  }

  /**
   * Returns Ad modal WebElement as promise.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  get modal() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.modal)),
      5000
    );
  }
  /**
   * Returns Ad Modal Title WebElement as promise.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  get modalTitle() {
    return this.driver.wait(
      until.elementLocated(By.css(this.selectors.modalTitle)),
      5000
    );
  }

  /**
   * Returns Ad Modal Close element as promise.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  get modalClose() {
    return this.driver.wait(
      until.elementIsVisible(
        this.driver.findElement(By.xpath(this.selectors.modalClose))
      ),
      5000
    );
  }

  /**
   * Returns promise of the visible modal title WebElement.
   * @async
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  async getVisibleModal() {
    return await this.driver.wait(
      until.elementIsVisible(this.modalTitle),
      2000
    );
  }
  /**
   * Returns promise of the not-visible modal title webelement.
   * @async
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  async getNotVisibleModal() {
    return await this.driver.wait(
      until.elementIsNotVisible(this.modalTitle),
      2000
    );
  }

  /**
   * Visits the page url.
   * @async
   * @returns {Promise<void>}
   */
  async visit() {
    await this.driver.get(this.url);
  }

  /**
   * Closes the modal and waits, until the CSS style is changed,
   * so the modal will not reappear when page is realoaded.
   * @async
   * @returns {Promise<void>}
   */
  async closeModal() {
    await this.driver.executeScript(() => {
      document.querySelector("#modal div").remove();
    });
    this.waitForCssStyleChange(await this.modal, "display");
    await this.modalClose.click();
  }
}

module.exports = { EntryAddPage };
