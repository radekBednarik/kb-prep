import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";

// iframe

(async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://the-internet.herokuapp.com/iframe");

  try {
    const iframe = await driver.wait(
      until.elementLocated(By.xpath("//iframe[@id='mce_0_ifr']"))
    );

    await driver.switchTo().frame(iframe);

    const p = await driver.wait(until.elementLocated(By.xpath("//body//p")));

    const pText = await p.getText();

    console.log("Default text: ", pText);

    await driver.close();
  } catch (error) {
    console.error(error);
    await driver.close();
  }
})();
