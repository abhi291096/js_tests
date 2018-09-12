var webdriver = require('selenium-webdriver');
var assert = require('assert');


By = webdriver.By, until = webdriver.until;




var capabilities = {
 'browserName' : 'chrome'
}

var child;

//Initialize Driver
var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

//Load website
driver.get('http://demo.guru99.com/popup.php');


//Click - 
driver.findElement({xpath: './/p/a'}).click();


// Store parent window handle
var parent_window = driver.getWindowHandle();

// store child window handle and switch to child window
var child_window = driver.getAllWindowHandles().then(function gotWindowHandles(allHandles){driver.switchTo().window(allHandles[allHandles.length-1]);});

//send "support@btack.com" in the text field
driver.findElement(By.name('emailid')).sendKeys("support@bstack.com");

//click on login
driver.findElement(By.name('btnLogin')).click();

//store text value for assertion
var ans = driver.findElement(By.css("h3")).getText();

//check text value
console.log(ans.value_);


//assert the value of the text
assert.equal("This access is valid only for 20 days.",ans.value_,"Error Value");

//switch to parent window
driver.switchTo().window(parent_window);

//store value of "Click Here" 
var c = driver.findElement(By.xpath("//body/p/a")).getText();

//assert value
assert.equal("Click Here",c.value_,"Error Value");



// Click 'Click here'

// Switch to the new window

// In the email id field, enter 'support@bstack.com', click 'Submit'

// Assert if 'This access is valid only for 20 days.' exist

// Switch to first window

// Assert if 'Click here' text exist


//close window
driver.quit();
