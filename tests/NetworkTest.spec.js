const {test, expect, request} = require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');
const loginPayLoad = {userEmail:"testemail@shettyacademy.global",userPassword:"Just@1Open"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
 const fakePayLoadOrders = {data: [], message: "No Orders"};
 
let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext,loginPayLoad);
   response =  await apiUtils.createOrder(orderPayLoad);
 
})
 
 
//create order is success
test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
    await page.goto("https://rahulshettyacademy.com/client");

    // await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*', 
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/695b753bc941646b7a7ed781', 

        async route=> {
            // Intercepting the API response, hijack and incert fake response adn send to the browser to render the data on the frontend
            const response = await page.request.fetch(route.request());// Fetching the API response
            let body = JSON.stringify(fakePayLoadOrders);
            route.fulfill({
                response, body,
            }); //Sends back to the browser to render
        });
    // await page.pause();
    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*');
    console.log(await page.locator(".mt-4").textContent());

    // await page.locator("tbody").waitFor();
    // const rows = await page.locator("tbody tr");
 
 
    });
