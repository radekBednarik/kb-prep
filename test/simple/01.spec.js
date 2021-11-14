import "chromedriver";
import { expect } from "chai";
import { Builder, By, until } from "selenium-webdriver";

let driver;
let onVisitButton;

describe("Example test suite", function () {
  this.beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://the-internet.herokuapp.com/add_remove_elements/");
    onVisitButton = await driver.wait(
      until.elementLocated(By.css("div#content button"), 10000)
    );
  });

  this.afterEach(async function () {
    await driver.quit();
  });

  it("Element on visit is visible", async function () {
    expect(await onVisitButton.isDisplayed()).to.be.true;
  });

  it("Element via click is visible", async function () {
    await onVisitButton.click();
    const newButton = await driver.wait(
      until.elementLocated(By.css("div#elements button"), 10000)
    );
    expect(await newButton.isDisplayed()).to.be.true;
  });
});
