const {test, chromium, expect} = require('@playwright/test'); 
const { text } = require('stream/consumers');

/*npx playwright codegen https://website
Record and playback allows you to do manual testing while playwrite generates scripts
*/

//Opens browser and sets cookies
test('Browser Context Playwright test', async ({browser})=>
{
        
        const context = await browser.newContext();
        const page = await context.newPage();

        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const cardTitiles = page.locator('.card-body a');

        //Kick start the Playwright test
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title()); //Prints the title of the page in the console

        //CSS / XPath to locate elemets(Fields). CSS is prefered
        await userName.fill("rahulshetty");
        await page.locator("[type='password']").fill("learning");
        await signIn.click();
        console.log(await page.locator("[style*='block']").textContent());
        //Assertion to checkif the values have been entered and save
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');

        await userName.fill('');
        await userName.fill('rahulshettyacademy');
        await signIn.click();

        //.nth() is a method that retrieves the indexed element
        //.first() retieves the first element
        // console.log(await cardTitiles.nth(0).textContent());
        const allTitles = await cardTitiles.allTextContents();
        console.log(allTitles);

});

//Opens page
test.only('UI Controls', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator('select.form-control');

    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();

    console.log(await page.locator('.radiotextsty').last().isChecked());
    //Assertion
    await expect (page.locator('.radiotextsty').last()).toBeChecked();
    // await page.locator(".radioextsty").last().isChecked();

    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect( await page.locator('#terms').isChecked()).toBeFalsy();
    //Check to see if an element is blicking
    await expect(documentLink).toHaveAttribute('class','blinkingText');


    // await page.pause();
});

test('Child Windows Handling', async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //listens for any new page. Promise(Pending, Rejected, Fulfilled)
        documentLink.click(),
    ]) // new page is opened
    
    const text = await newPage.locator('.red').textContent();
    const arrayText =text.split('@');
    const domain = arrayText[1].split(' ')[0];
    console.log('Domain:' + domain);

    await page.locator('#username').fill(domain);
    // await page.pause();
    //Instead of textConent() use inputValue to grab input that has been entered at run time. textContent() pull values in the DOM so will return blank
    console.log(await page.locator('#username').inputValue());  
})