const { expect } = require("chai");
const { ElementsPage } = require("./pageObjects/ElementsPage");

/** @type {ElementsPage} */
let page;

describe("Elements page tests", function () {
  this.beforeEach(async function () {
    page = new ElementsPage(this.driver);
    await page.visit();
  });

  it("on visit button is visible", async function () {
    expect(await page.isElementVisible(await page.locatedBttnOnVisit)).to.be
      .true;
  });

  it("after click button is visible", async function () {
    await page.clickLocatedBttnOnVisit();
    expect(await page.isElementVisible(await page.locatedBttnNew)).to.be.true;
  });
});
