const {test, chromium, expect} = require('@playwright/test'); 


test('Rahul Shetty Academy Students', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const email = page.locator('#userEmail');
    const password = page.locator(' #userPassword');
    const signInbtn = page.locator('#login');

    await email.fill('testauto@pr.com');
    await password.fill('OpenUp@1');
    await signInbtn.click();

    console.log(await page.locator('h5 b').nth(1).textContent());
});

// test.only('Browser Context-Validation Error login', async ({page})=>
//     {
//     await page.goto('https://rahulshettyacademy.com/client');
//     await page.locator('#userEmail').fill('anshika@gmail.com');
//     await page.locator('#userPassword').fill('Iamking@000');
//     await page.locator("[value='Login']").click();
//     // await page.waitForLoadState('networkidle');
//     // await page.locator('.card-body b').first().waitFor();
//     const titles = await page.locator('.card-body b').allTextContents();

//     console.log(titles);

// });