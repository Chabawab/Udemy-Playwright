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