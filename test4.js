//Create webdriver object
var webdriver = require('selenium-webdriver');
var assert = require('assert');

//set capability for browser chrome
var capabilities = {
 'browserName' : 'chrome'
}

// set driver object
var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

//open url
driver.get('http://stormy-beyond-9729.herokuapp.com/');

//send keys 
driver.findElement({name : 'testname'}).sendKeys("BrowserStack");

driver.findElement({name: 'testemail'}).sendKeys("support@bstack.com");

//click textbox
driver.findElement({name: 'testcheckbox'}).click();

//select value from drop-down
selectFromDropdown('yellow');

 driver.sleep(5000);

 //use function to select value from dropdown
 function selectFromDropdown(value)
 {
        const valueSelected = webdriver.By.css('[id = "testcolor"]'+' option[value = "' + value + '"]' );

        driver.findElement({name: 'testcolor'}).click();
        driver.findElement(valueSelected).click();
 }

//deselect the default values
 driver.findElement({xpath:'//fieldset/ol/li[5]/select/option[1]'}).click();
 driver.findElement({xpath:'//fieldset/ol/li[5]/select/option[5]'}).click();

 //select red and gray
 driver.findElement({xpath:'//fieldset/ol/li[5]/select/option[4]'}).click();
 driver.findElement({xpath:'//fieldset/ol/li[5]/select/option[3]'}).click();


 driver.sleep(2000);


//click on submit button
 driver.findElement({id : 'submit'}).click();

 driver.sleep(2000);

 //var parent_window = driver.getWindowHandle();

 //var child_window = driver.getAllWindowHandles().then(function gotWindowHandles(allHandles){driver.switchTo().window(allHandles[allHandles.length-1]);});

 driver.sleep(10000);


//store value to be compared in variable
 var ans = driver.findElement({xpath: '//body'}).getText();

 console.log(ans);

 var title = driver.getTitle();
 console.log(title);

 driver.sleep(2000);

 // compare the values
 assert.equal('{"testname"=>"BrowserStack", "testemail"=>"support@bstack.com", "testcheckbox"=>"true", "testcolor"=>"yellow", "testmultiple"=>["red", "gray"]}',ans.value_)//.then(function () {

    //console.log("Correct Value is entered");
 //});
 



// In the input box titled 'Name', type 'BrowserStack'

// In the input box titled 'Email', type 'support@bstack.com'

// Select the 'Checkbox'

// Click the 'Color' dropdown and select 'yellow'

// In the 'Colors' section select 'red' and 'gray'

// Click 'Submit'

// Verifies if the body contains the text --> {""testname""=>""BrowserStack"", ""testemail""=>""support@bstack.com"", ""testcheckbox""=>""true"", ""testcolor""=>""yellow"", ""testmultiple""=>[""red"", ""gray""]}"

driver.quit();
