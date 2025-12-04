// const { test, expect } = require('@playwright/test');
 

// test('@Webst Client App login', async ({ page }) => {
//    //js file- Login js, DashboardPage
//    const email = "anshika@gmail.com";
//    const productName = 'ZARA COAT 3';
//    const products = page.locator(".card-body");
//    await page.goto("https://rahulshettyacademy.com/client");
//    await page.getByPlaceholder("email@example.com").fill(email);
//    await page.getByPlaceholder("enter your password").fill("Iamking@000");
//    await page.getByRole('button', {name:'Login'}).click();
//    await page.waitForLoadState('networkidle');
//    await page.locator(".card-body b").first().waitFor();
    
//    await page.locator('.card-body').filter({hasText: 'ZARA COAT 3'}).getByRole('button', {name: 'Add to Cart'}.click());
 
//    await page.getByRole('listitem').getByRole('button', {name: 'Cart'}).click();

//    //await page.pause();
//    await page.locator("div li").first().waitFor();
//    await expect(page.getByText('ZARA COAT 3')).toBeVisible();

  
//    await page.getByRole('button', {name: 'Checkout'}).click();
 
//    await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   
   
    
   

   

//    await page.locator(".field [type='text']").nth(1).fill('377');
//    await page.locator(".field [type='text']").nth(2).fill('Payer');
//    await page.locator(".field [type='text']").nth(3).fill('C011XP');

//    // await page.pause();
 
//    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
//    await page.locator(".action__submit").click();

//    // Order confirmation page

//    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
//    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
//    console.log(orderId);
 
//    await page.locator("button[routerlink*='myorders']").click();
//    await page.locator("tbody").waitFor();
//    const rows = await page.locator("tbody tr");
 
//    //Dynamically searchs for the order ID and clicks the accociated button. #1 of the interview question
//    for (let i = 0; i < await rows.count(); ++i) {
//       const rowOrderId = await rows.nth(i).locator("th").textContent();
//       if (orderId.includes(rowOrderId)) {
//          await rows.nth(i).locator("button").first().click();
//          break;
//       }
//    }

//    const orderIdDetails = await page.locator(".col-text").textContent();
//    expect(orderId.includes(orderIdDetails)).toBeTruthy();

 
// });

const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
   await page.getByRole('button',{name:"Login"}).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})