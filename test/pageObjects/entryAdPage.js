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
  get locatedModal() {
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
  get locatedModalTitle() {
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
  get visibleModalClose() {
    return this.driver.wait(
      until.elementIsVisible(
        this.driver.findElement(By.xpath(this.selectors.modalClose))
      ),
      5000
    );
  }
  /**
   * Returns promise of the visible modal title element.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  get visibleModalTitle() {
    return this.driver.wait(
      until.elementIsVisible(this.locatedModalTitle),
      5000
    );
  }
  /**
   * Returns promise of the modal title element that is not visible.
   * @property
   * @returns {import("selenium-webdriver").WebElementPromise}
   */
  get notVisibleModalTitle() {
    return this.driver.wait(
      until.elementIsNotVisible(this.locatedModalTitle),
      5000
    );
  }

  /**
   * Visits the page url.
   * @async
   * @returns {Promise<void>}
   */
  async visit() {
    await super.visit(this.url);
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
    await Promise.all([
      this.waitForCssStyleChange(await this.locatedModal, "display"),
      this.visibleModalClose.click(),
    ]);
  }
}

module.exports = { EntryAddPage };
