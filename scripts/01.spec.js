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

    console.log("Default text: ", await p.getText());

    await p.clear();
    await p.sendKeys("Hello!");

    console.log(
      "Changed text: ",
      await driver.findElement(By.xpath("//body//p")).getText()
    );

    await driver.sleep(5000);

    await driver.quit();
  } catch (error) {
    console.error(error);
    await driver.quit();
  }
})();
