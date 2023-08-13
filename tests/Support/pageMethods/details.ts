import { expect ,Locator, Page } from "@playwright/test"
import * as detailsData from "../testData/details.json"
import * as loginData from "../testData/login.json"
const path = require("path")

class details {
    page: Page
    fullName: Locator
    email: Locator
    phoneNumber: Locator
    dob: Locator
    country: Locator
    sex: Locator
    city: Locator
    zipCode: Locator
    uploadImage: Locator
    checkBox: Locator
    paymentButton: Locator

    constructor(page){
        this.page = page
        this.fullName = page.locator("#fullName")
        this.email = page.locator("#email")
        this.phoneNumber = page.locator("#phone")
        this.dob = page.locator("#dateOfBirth")
        this.country = page.locator("#country")
        this.sex = page.locator("input[value='male']")
        this.city = page.locator("#city")
        this.zipCode = page.locator("#zipCode")
        this.uploadImage = page.locator("#profileImage")
        this.checkBox = page.locator("#confirmCheckbox")
        this.paymentButton = page.locator("#submit-details")

    }

    async fillAlldetailsAndProcessedToPaymentPage() {

        await this.fullName.type(detailsData.fullName)
        await expect(this.fullName).toHaveValue(detailsData.fullName)

        await this.email.type(detailsData.email)
        await expect(this.email).toHaveValue(detailsData.email)

        await this.phoneNumber.type(detailsData.phone)
        await expect(this.phoneNumber).toHaveValue(detailsData.phone)

        await this.dob.fill(detailsData.DOB)

       await this.sex.click()
        await expect(this.sex).toBeChecked()

        await this.country.selectOption(detailsData.country)

       await this.city.type(detailsData.city)
       await expect(this.city).toHaveValue(detailsData.city)

        await this.zipCode.type(detailsData.zipCode)
        await expect(this.zipCode).toHaveValue(detailsData.zipCode)

        const filePath = path.join(__dirname+"/imgData/profile.png")

        await this.uploadImage.setInputFiles(filePath)

        await this.checkBox.click()
        await this.paymentButton.click()
        await expect(this.page).toHaveURL(loginData.url + "payment.html")
       
    }
    
}
export default details