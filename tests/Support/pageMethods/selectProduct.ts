import * as productData from "../testData/product.json"
import * as loginData from "../testData/login.json"
import { expect, Locator, Page } from "@playwright/test"

class products {
    page: Page
    getproduct: Locator
    addProductInCart: Locator
    productNameText: Locator
    productDescription: Locator
    productCount: Locator
    placeOrderBtn: Locator
    productVerify: Locator
    constructor(page: Page) {
        this.page = page;
        this.getproduct = page.getByText(productData.productName)
        this.addProductInCart = page.locator("#button button")
        this.productNameText = page.locator("#productDetails h1")
        this.productDescription = page.locator("#details p")
        this.productCount = page.locator("#badge")
        this.placeOrderBtn = page.locator("#button a")
        this.productVerify = page.locator("#box h3")
    }

    async selectproductToBuy() {
        await this.getproduct.click()
        await expect(this.page).toHaveURL(loginData.url + "contentDetails.html?3")
        await expect(this.productNameText).toHaveText(productData.productName)
        await expect(this.productDescription).toHaveText(productData.productdescription)
        await expect(this.productCount).toHaveText("0")
        await this.addProductInCart.click()
        await expect(this.productCount).toHaveText("1")
    }

    async placeOrder() {
        await this.productCount.click()
        await expect(this.page).toHaveURL(loginData.url + "cart.html")
        await expect(this.productVerify).toHaveText(productData.productName + " × 1")
        await this.placeOrderBtn.click()
        await expect(this.page).toHaveURL(loginData.url + "enter_details.html")
    }

}
export default products