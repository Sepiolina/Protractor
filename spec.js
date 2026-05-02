describe('Protractor Test', function() {

  it('should add a todo', function() {
	browser.get('https://www.globalsqa.com/angularJs-protractor/ConsumptionCalculator/');
	//check coffee
	element(by.xpath('/html/body/form[1]/p/input')).sendKeys('11');
	console.log("set quantity to 11");
	//expect(element(by.name('perUnit')).getText()).toEqual('370');
	//expect(element(by.css('[ng-show="isMaximumExceeded()"]')).isDisplayed()).toBe(true);
	expect(element(by.xpath('/html/body/form[1]/div/p[3]')).isDisplayed()).toBe(true);
	console.log("check coffee Success");
	//check cigarettes
	element(by.xpath('/html/body/form[2]/p/input')).sendKeys('5');
	expect(element(by.xpath('/html/body/form[2]/div/p[3]')).isDisplayed()).toBe(true);
	console.log("check Cigarettes Success");
  });

});
