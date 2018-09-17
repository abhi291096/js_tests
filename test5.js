//initialize selenium webdriver
var webdriver = require('selenium-webdriver');
//initialize assert 
var assert = require('assert');

//set capabilities
var capabilities = {
 'browserName' : 'chrome'
}

//start driver
var driver = new webdriver.Builder(). usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

//set url to given value
driver.get('https://the-internet.herokuapp.com/dynamic_controls');


//click the remove button
driver.findElement({xpath: '//form[1]/button[1]'}).click();

//wait for 10 sec
driver.sleep(10000);

//assert value of the found element and print "correct value found"
driver.findElement( {xpath : "//p[@id = 'message']"}).getText().then(function (ans1){
  if(assert.equal("It's gone!",ans1) == undefined)
  {
    console.log("correct value found")
  }
  else
  console.log("wrong value");

});

//console.log(ans1);

//assert.equal("It's gone!",ans1.value_);

//click on the add button
driver.findElement({xpath : "//form[@id = 'checkbox-example']/button"}).click();

//wait for 10 sec
driver.sleep(10000);

//assert value of the found element and print "correct value found"
driver.findElement({xpath : "//p[@id = 'message']"}).getText().then(function (ans2)
{
  if(assert.equal("It's back!",ans2) == undefined)
  {
    console.log("correct value found");
  }
  else console.log("Wrong value");

});




// Click 'Remove' button

// Verify if text 'It's gone!' exist

// Click the 'Add' button

// Verify if text 'It's back!' exist

driver.quit();