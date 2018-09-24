describe("This test is to check clicks",function(){

    it("should check for Action Unsuccessful",function(){

        //for non angular js application
        browser.ignoreSynchronization = true;

        //load url
        browser.get("http://the-internet.herokuapp.com/notification_message_rendered");


       
        var elem ="";

        //cal function initially
        startagain();

        //function
        function startagain()
        {

        
           var count =0;
           //click link
        element(by.partialLinkText('Click')).click();


       //check text value
        element(by.id("flash")).getText().then(function(ans){

            //if action is successful ,  function again call again
            if(ans.includes("Action successful"))
            {
                console.log("Successful");
                startagain();
            }
            else {
                // count=1;
                console.log("Action is unsuccessful");
                //break;
            }
            
        


            
        });





    }

    

  


    });


});