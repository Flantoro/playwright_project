import { test, expect, chromium } from '@playwright/test';

test('fill the search field', async ({ page }) => {
  //const browser = await chromium.launch();
  //const context = await browser.newContext();
  //const page = context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.locator("[data-test='username']").fill("standard_user");

  await page.locator("[data-test='password']").fill("secret_sauce");

  await page.locator("[name='login-button']").click();
  expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

  expect(page.locator("[id='header_container'] span").first()).toHaveText("Products");
});