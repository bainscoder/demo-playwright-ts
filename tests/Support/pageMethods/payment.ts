import * as paymentData from "../testData/paymentDetails.json";
import * as loginData from "../testData/login.json"
import { expect,Locator, Page } from "@playwright/test";


class payment {
    page: Page
    cardNumber: Locator
    cardHolderName: Locator
    expiryDate: Locator
    CVV : Locator
    payNowBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.cardNumber = page.locator("#cardNumber")
        this.cardHolderName = page.locator("#cardName")
        this.expiryDate = page.locator("#expiryDate")
        this.CVV = page.locator("#cvv")
        this.payNowBtn = page.locator("#payNowBtn")
    }

    async fillPaymentDetailsAndCompletePayment() {
        await this.cardNumber.type(paymentData.cardNumber)
        await expect(this.cardNumber).toHaveValue(paymentData.cardNumber)
        await this.cardHolderName.type(paymentData.cardHolderName)
        await expect(this.cardHolderName).toHaveValue(paymentData.cardHolderName)
        await this.expiryDate.type(paymentData.expiryDate)
        await expect(this.expiryDate).toHaveValue(paymentData.expiryDate)
        await this.CVV.type(paymentData.cvv)
        await expect(this.CVV).toHaveValue(paymentData.cvv)
        await this.payNowBtn.click()
        await expect(this.page).toHaveURL(loginData.url + "orderPlaced.html")

    }

}
export default payment