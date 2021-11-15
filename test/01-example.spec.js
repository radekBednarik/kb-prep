const { expect } = require("chai");
const { Page } = require("./pageObjects/page");

let page;

describe("Tests using PoP", function () {
  this.beforeEach(async function () {
    page = new Page(this.driver);
    await page.visit();
  });

  it("on visit button is visible", async function () {
    expect(await page.isElementVisible(await page.buttonOnVisit)).to.be.true;
  });

  it("after click button is visible", async function () {
    await page.clickButtonOnVisit();
    expect(await page.isElementVisible(await page.buttonAfterClick)).to.be.true;
  });
});
