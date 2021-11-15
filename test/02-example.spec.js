const { expect } = require("chai");
const { EntryAddPage } = require("./pageObjects/entryAdPage");

let page;

describe("Tests using PoP", function () {
  this.beforeEach(async function () {
    page = new EntryAddPage(this.driver);
    await page.visit();
  });

  it("modal title is visible", async function () {
    expect(await page.isElementVisible(await page.modalTitle)).to.be.true;
  });

  it("modal not visible after reload", async function () {
    await page.closeModal();
    await page.reload();
    expect(await page.isElementVisible(await page.modalTitle)).to.be.false;
  });
});
