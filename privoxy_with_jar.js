//create selenium webdriver
var webdriver = require('selenium-webdriver');

//initialize proxy
proxy = require('selenium-webdriver/proxy');

By = webdriver.By, until = webdriver.until;

//create driver object
var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub')
    .forBrowser('firefox').usingWebDriverProxy("http://10.100.100.226:8118").build();




//go to browserstack
driver.get('https://www.browserstack.com');


//go to facebook
driver.get('https://www.facebook.com');

//close driver
driver.quit();


