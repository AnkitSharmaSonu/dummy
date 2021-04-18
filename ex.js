

describe('website_testing',function(){

    it('button',function(){
        browser.get('https://juliemr.github.io/protractor-demo/')
        element(by.model("first")).sendKeys('6')

        element(by.model("second")).sendKeys('6')

        element(by.css('[ng-click="doAddition()"]  ')).click()
        browser.sleep(10000)
    })
})