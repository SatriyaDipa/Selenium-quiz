const { Builder, By, Key, util } = require("selenium-webdriver");

async function Login() {
  //buka browser
  let driver = await new Builder().forBrowser("firefox").build();
  let assert = require("assert");

  try {
    // buka url
    driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    // driver.get("http://10.10.20.2/ac_portal/default/pc.html?template=default&tabs=pwd&vlanid=0&url=http://www.msftconnecttest.com%2fredirect");
    // driver.get("http://google.com");

  
    // login
    await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.id("btnLogin")).click();

  
    //cek admin    
    const test = await driver.findElement(By.xpath('//li')).getText();
    assert.equal(test, "Welcome Admin", "Failed");
    console.log("Success");
  } catch (error) {
    console.log(error)
  }

}

Login();
