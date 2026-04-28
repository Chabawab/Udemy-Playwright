const {test, expect} = require ('@playwright/test');

test('Popup Validations', async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("http://google.com");
    // await page.goBack();
    // await page.goForward();

    // Checks if an element is hidden or visible
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    // JavaSript Ppoup. Handling Dialogue
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    
    await page.locator('#mousehover').hover();

    //Handling frames(iframe and frameset frame set)
    const framespace = page.frameLocator('#courses-iframe');
    framespace.locator("li a[href*='lifetime-access']:visible").click();
    const textContent = await framespace.locator('.text h2').textContent();
    console.log(textContent.split(' ')[1]);


})

test("Screenshot & Visual comparision", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path: 'ParticialScreenshot.png'});//screenshot of a specific element
    await page.locator('#hide-textbox').click();
    await page.screenshot({path: 'screenshot.png'}); //Screenshot of the whole page.
    await expect(page.locator('#displayed-text')).toBeHidden();

});


//Compare original screenshot of a page to future versions of screenshots on the page. Throws errors if theres a difference
//First run will fail because there no initial image and the program will create one
test.only('Visual testing' , async({page})=>{
    await page.goto('https://www.flightaware.com/');
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
})