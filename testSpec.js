var selenium = require('selenium-webdriver');

describe('GameTwist Test cases', function() {

var chromeCapabilities = selenium.Capabilities.chrome();
//setting chrome options
var chromeOptions = {
    prefs: {
                'credentials_enable_service': false,
                'profile': {
                    'password_manager_enabled': false
                }
            },
    'args': ['--disable-notifications']
};
chromeCapabilities.set('chromeOptions', chromeOptions);

    // Open the gametwist website in the browser before test is run

    beforeAll(function(done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
        this.driver = new selenium.Builder().
           // withCapabilities(selenium.Capabilities.chrome()).
            withCapabilities(chromeCapabilities).
            build();
        this.driver.get('https://www.gametwist.com').then(done);
    }, 300000);

    // Close the website after all tests are run
    afterAll(function(done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
        this.driver.quit().then(done);
    }, 500000);

// Test for successful login 
    it('Login home page', function(done) {
        var element1 = this.driver.findElement(selenium.By.name('login-nickname')).sendKeys('suresh55');
        var element2 = this.driver.findElement(selenium.By.css('#login-password')).sendKeys('SampleTest@');
        var element3 = this.driver.findElement(selenium.By.xpath("//div[@id='branding__login']/div/fieldset/div[5]/div/button")).click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('gametwist');
           done();
        });
    });

// Test the navigation bar by clicking on the 'Slots' link and checking the URL changes to '/slots'
    it('Has a working nav', function(done) {
        this.driver.sleep(5000); 
        var element4 = this.driver.findElement(selenium.By.xpath("//a[contains(text(),'Slots')]"));

        element4.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('slots');
            done();
        });
    });

// Test the navigation bar by clicking on the 'Bingo' link and checking the URL changes to '/bingo'
    it('Has a working nav', function(done) {
        var element4 = this.driver.findElement(selenium.By.xpath("//a[contains(text(),'Bingo')]"));

        element4.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('bingo');
            done();
        });
    });

// Test the navigation bar by clicking on the 'Casino' link and checking the URL changes to '/casino'
    it('Has a working nav', function(done) {
        var element4 = this.driver.findElement(selenium.By.xpath("//a[contains(text(),'Casino')]"));

        element4.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('casino');
            done();
        });
    });

// Test the navigation bar by clicking on the 'Poker' link and checking the URL changes to '/slots'
    it('Has a working nav', function(done) {
        var element4 = this.driver.findElement(selenium.By.xpath("//a[contains(text(),'Poker')]"));

        element4.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('poker');
            done();
        });
    });

// Test sending text
    it('Sending text', function(done) {
        var element = this.driver.findElement(selenium.By.name('ctl00$cphNavAndSearch$ctl01$gameSearch'));

        element.sendKeys('Slot');

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('poker');
            done();
        });
    });

// Selecting game 
    it('Selecting game', function(done) {
        this.driver.sleep(5000); 
        var element = this.driver.findElement(selenium.By.xpath("//li[2]/a/div[2]/span"));

        element.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('party');
            done();
        });
    });

// Logout 
    it('Sending text', function(done) {
        this.driver.sleep(5000); 
        var element = this.driver.findElement(selenium.By.xpath("//*[@id='branding']/div[2]/div[1]/div[4]/ul/li[2]/div/span/span"));
        
	element.click();
        
	this.driver.sleep(5000); 
        var element = this.driver.findElement(selenium.By.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[2]/div/ul/li[7]/button"));

        element.click();
	this.driver.sleep(5000); 

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('en');
            done();
        });
    });
});
