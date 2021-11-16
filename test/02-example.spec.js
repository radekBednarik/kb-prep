const { expect } = require("chai");
const { EntryAddPage } = require("./pageObjects/entryAdPage");

let page;

describe("Entry Ad page tests", function () {
  this.beforeEach(async function () {
    page = new EntryAddPage(this.driver);
    await page.visit();
  });

  it("modal is visible", async function () {
    expect(await page.isElementVisible(await page.getVisibleModal())).to.be
      .true;
  });

  it("closed modal not visible after reload", async function () {
    await page.getVisibleModal();
    await page.closeModal();
    await page.reload();
    expect(await page.isElementVisible(await page.modalTitle)).to.be.false;
  });
});
