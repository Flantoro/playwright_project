import { test, expect, chromium } from '@playwright/test';
import { loginPage } from '../page-objects/loginPage';
import { inventoryPage } from '../page-objects/inventoryPage';
import { cartPage } from '../page-objects/cartPage';
import { checkPrime } from 'crypto';
import { checkoutPage } from '../page-objects/checkoutPage';

const firstName = "Flantoro";
const lastName = "Batkovich";
const zipCode = "71000";

test('Purchase path', async ({ page }) => {

  const login = new loginPage(page);
  const inventory = new inventoryPage(page);
  const cart = new cartPage(page);
  const checkout = new checkoutPage(page);

  await login.goto();
  await login.standartUserLogin();

  await inventory.checkIfThePageIsOpened(page);
  await inventory.addBackpackToCart();
  await inventory.clickOnTheCart();

  await cart.checkIfCartIsOpened(page);
  await cart.clickOnTheContinueShopButton();

  await inventory.checkIfThePageIsOpened(page);
  await inventory.addBikeLightToCart();
  await inventory.clickOnTheCart();

  await cart.clickOnTheCheckoutButton();

  await checkout.fillCheckputFormFileds(firstName, lastName, zipCode);
  await checkout.clickOnContinueButton();
  await checkout.clickOnTheFinishButton();

  await checkout.checkIfOrderCompleted(page);
 //fosdfiofguiodfygiudr
 //ghofgiho
});