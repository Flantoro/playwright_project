import { expect, type Locator, type Page } from "@playwright/test";

export class cartPage {

    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly yourCartTitle: Locator;
  
    constructor(page: Page){
        this.checkoutButton = page.locator("[data-test='checkout']");
        this.continueShoppingButton = page.locator("[data-test='continue-shopping']");
        this.yourCartTitle = page.locator("[class='title']");
    }

    async checkIfCartIsOpened(page){
        expect(page.url()).toBe("https://www.saucedemo.com/cart.html");
        expect(this.yourCartTitle).toHaveText("Your Cart");
    }

    async clickOnTheCheckoutButton(){
        await this.checkoutButton.click();
    }

    async clickOnTheContinueShopButton(){
        await this.continueShoppingButton.click();
    }
}