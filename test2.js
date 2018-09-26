var webdriver = require('selenium-webdriver');
var assert = require('assert');



//By = webdriver.By,
  //  until = webdriver.until;



var capabilities = {
    'browserName': 'firefox'
}


var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('https://the-internet.herokuapp.com/javascript_alerts');





driver.findElement({ xpath: '//*[@id="content"]/div/ul/li[1]/button' }).click();

driver.switchTo().alert().accept();
driver.takeScreenshot("proof.png");


 driver.findElement({ xpath: '//*[@id="content"]/div/ul/li[2]/button' }).click();

 driver.switchTo().alert().accept();

driver.findElement({ xpath: '//*[@id="content"]/div/ul/li[3]/button' }).click();

driver.switchTo().alert().sendKeys("Abhishek");
driver.switchTo().alert().accept();

 driver.findElement({id : 'result'}).getText().then(function(ans){

  if(assert.equal("You entered: Abhishek",ans) == undefined)
  {
    console.log("Success");
  }

});

// assert.equal("You entered: Abhishek",result.value_);


// Click 'Click for JS Alert'.

// Click 'Click for JS Confirm'. Clicks 'OK'. Assert the Result value 'You clicked: Ok'

// Click 'Click for JS Prompt'. Enter 'BrowserStack' in the prompt. Assert the Result value 'You entered: BrowserStack' Screen reader support enabled.

driver.quit();