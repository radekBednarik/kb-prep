import { expect } from "chai";
import "chromedriver";
import { Builder } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";
import { Page } from "./page.mjs";

let driver;
let page;

describe("Tests using PoP", function () {
  this.beforeAll(async function () {
    const chromeOpts = new Options();
    chromeOpts.windowSize({ width: 1920, height: 1080 });

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOpts)
      .build();
    page = new Page(driver);
    await page.visit();
  });

  this.afterAll(async function () {
    await driver.quit();
  });

  it("on visit button is visible", async function () {
    expect(await page.isElementVisible(await page.buttonOnVisit)).to.be.true;
  });

  it("after click button is visible", async function () {
    await page.clickButtonOnVisit();
    expect(await page.isElementVisible(await page.buttonAfterClick)).to.be.true;
  });
});
