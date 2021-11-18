/**
 * Mocha root hooks.
 * All repeated code in the hooks in the tests can be placed here.
 * To make variables accessible within Mocha context - create them as
 * this.property OR create them as global. First option is preferred.
 * @module test/hooks
 */

const { Builder } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

const chromeOpts = new Options();
chromeOpts.windowSize({ width: 1920, height: 1080 });

module.exports.mochaHooks = () => {
  return {
    beforeEach: [
      async function () {
        this.driver = await new Builder()
          .forBrowser("chrome")
          .setChromeOptions(chromeOpts)
          .build();
      },
    ],
    afterEach: [
      async function () {
        await this.driver.quit();
      },
    ],
  };
};
