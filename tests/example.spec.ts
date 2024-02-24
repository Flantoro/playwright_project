import { test, expect, chromium } from '@playwright/test';

test('Purchase path', async ({ page }) => {
  //const browser = await chromium.launch();
  //const context = await browser.newContext();
  //const page = context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.locator("[data-test='username']").fill("standard_user");

  await page.locator("[data-test='password']").fill("secret_sauce");

  await page.locator("[name='login-button']").click();
  expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

  expect(page.locator("[id='header_container'] span").first()).toHaveText("Products");

  await page.locator("[data-test='add-to-cart-sauce-labs-backpack']").click();
  await page.locator("[class='shopping_cart_container'] a").click();

  //expect(page.locator("[class='cart_item'] [class='cart_quantity']")).toHaveValue(/[1]/);
  await page.locator("[name='checkout']").click();
  expect(page.url()).toBe("https://www.saucedemo.com/checkout-step-one.html");

  await page.locator("[placeholder='First Name']").fill("Flantoro");
  await page.fill("[placeholder='Last Name']" ,"Batkovich"); // fields can be filled in this wayt
  await page.locator("[placeholder='Zip/Postal Code']").fill("71000");

  await page.waitForTimeout(1000);

  await page.locator("[data-test='continue']").click();

  expect(page.url()).toBe("https://www.saucedemo.com/checkout-step-two.html");

  await page.waitForTimeout(1000);

  await page.locator("[data-test='finish']").click();

  expect(page.url()).toBe("https://www.saucedemo.com/checkout-complete.html");

  await page.waitForTimeout(1000);

  await page.locator("[data-test='back-to-products']").click();

  expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

  await page.waitForTimeout(1000);
});