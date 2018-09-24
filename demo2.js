module.exports = {
    '@tags' :['demo2'],
    'Demo test Google' : function (client) {
      client
        .url('https://the-internet.herokuapp.com/javascript_alerts')
        .waitForElementVisible('body', 1000)
        .useXpath().click('//*[@id="content"]/div/ul/li[1]/button')
        .acceptAlert()
        .useXpath().click('//*[@id="content"]/div/ul/li[2]/button')
        .acceptAlert()
        .useXpath().click('//*[@id="content"]/div/ul/li[3]/button').pause(5000)
        .setAlertText("Abhishek").acceptAlert().pause(10000)
        //.assert.containsText('#result','You entered: Abhishek')
        // .assert.title('Google').useXpath()
        // .click('//div[@class ="jsb"]/center/input[2]')
        // .pause(8000)
        // .assert.visible('input[type=text]')
        // .setValue('input[type=text]', 'rembrandt van rijn')
        // .waitForElementVisible('button[name=btnG]', 1000)
        // .click('button[name=btnG]') 
        // .pause(1000)
        //.assert.containsText('ol#rso li:first-child',
        //   'Rembrandt - Wikipedia')
        .end();
    }
  };