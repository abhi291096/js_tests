describe('This is a test to check for images', function (){
    it('should store tha failed images',function (){
        browser.ignoreSynchronization = true;
        browser.get('http://the-internet.herokuapp.com/broken_images');
        browser.executeAsyncScript(function (callback) {
            var imgs = document.getElementsByTagName('img'),
                loaded = 0;
            for (var i = 0; i < imgs.length; i++) {
                if (imgs[i].naturalWidth > 0) {
                    loaded = loaded + 1;
                };
            };
            callback(imgs.length - loaded);
         }).then(function (brokenImagesCount) {
            expect(brokenImagesCount).toBe(2);
            console.log("Images broken " + brokenImagesCount);
        });
        // var imgs = element.all(by.tagName('img')),
        // loaded = 0;
        // for (var i = 0; i < imgs.length; i++) {
        //     console.log("for");
        //     if (imgs[i].naturalWidth > 0) {
        //         console.log("if");
        //         loaded = loaded + 1;
        //     };
        // }
        // var brokenImagesCount=imgs.length - loaded;
        // console.log(brokenImagesCount)
        // 
//         var elems = element.all(by.tagName('img'));
//         elems.first().getAttribute('src').then(function(attr) {
//        console.log(attr);
//    });
// img1 = element(by.css("img[src*='asdf.jpg']"));

// browser.isElementPresent(img1).then(function (result) {
//     if(result){
//        console.log("img1 is present");

//     }
// });

// img2 = element(by.css("img[src*='hjkl.jpg']"));
// browser.isElementPresent(img2).then(function (result) {
//     if(result){
//        console.log("img2 is present");

//     }
// });

// img3=element(by.css("img[src*='img/avatar-blank.jpg']"));
// browser.isElementPresent(img3).then(function (result) {
//     if(result){
//        console.log("img3 is present");

//     }
// });

 });
});