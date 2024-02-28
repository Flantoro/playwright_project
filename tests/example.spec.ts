import { test, expect, chromium } from '@playwright/test';
import { loginPage } from '../page-objects/loginPage';
import { inventoryPage } from '../page-objects/inventoryPage';

test('Purchase path', async ({ page }) => {

  const login = new loginPage(page);
  const inventory = new inventoryPage(page);
  await login.goto();
  await login.standartUserLogin();
  await inventory.checkIfThePageIsOpened(page);
  await inventory.addBackpackToCart();
  // expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

  // expect(page.locator("[id='header_container'] span").first()).toHaveText("Products");

  // await page.locator("[data-test='add-to-cart-sauce-labs-backpack']").click();
  // await page.locator("[class='shopping_cart_container'] a").click();

  // //expect(page.locator("[class='cart_item'] [class='cart_quantity']")).toHaveValue(/[1]/);
  // await page.locator("[name='checkout']").click();
  // expect(page.url()).toBe("https://www.saucedemo.com/checkout-step-one.html");

  // await page.locator("[placeholder='First Name']").fill("Flantoro");
  // await page.fill("[placeholder='Last Name']" ,"Batkovich"); // fields can be filled in this wayt
  // await page.locator("[placeholder='Zip/Postal Code']").fill("71000");

  // await page.locator("[data-test='continue']").click();

  // expect(page.url()).toBe("https://www.saucedemo.com/checkout-step-two.html");

  // await page.locator("[data-test='finish']").click();

  // expect(page.url()).toBe("https://www.saucedemo.com/checkout-complete.html");

  // await page.locator("[data-test='back-to-products']").click();

  // expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

});