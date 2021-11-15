import { Builder } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";

const chromeOpts = new Options();
chromeOpts.windowSize({ width: 1920, height: 1080 });

export const mochaHooks = () => {
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
