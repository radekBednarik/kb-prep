import "chromedriver";
import { expect } from "chai";
import { Builder, By, until } from "selenium-webdriver";

let driver;
let onVisitButton;

describe("Example test suite", function () {
  this.beforeAll(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://the-internet.herokuapp.com/add_remove_elements/");
  });

  this.afterAll(async function () {
    await driver.quit();
  });

  this.beforeEach(async function () {
    onVisitButton = await driver.wait(
      until.elementIsVisible(
        await driver.findElement(By.css("div#content button")),
        10000
      )
    );
  });

  it("Element on visit is visible", async function () {
    expect(await onVisitButton.isDisplayed()).to.be.true;
  });

  it("Element via click is visible", async function () {
    await onVisitButton.click();
    const newButton = await driver.wait(
      until.elementIsEnabled(
        await driver.findElement(By.css("div#elements button")),
        10000
      )
    );
    expect(await newButton.isDisplayed()).to.be.true;
  });
});
