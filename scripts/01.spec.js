import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";

// find & click

(async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://the-internet.herokuapp.com/add_remove_elements/");

  try {
    await driver
      .wait(
        until.elementIsEnabled(
          await driver.findElement(By.css("div#content button"))
        ),
        10000
      )
      .click();

    await driver.wait(
      until.elementIsEnabled(driver.findElement(By.css("div#elements button")))
    );

    await driver.close();
  } catch (error) {
    console.error(error);
    await driver.close();
  }
})();
