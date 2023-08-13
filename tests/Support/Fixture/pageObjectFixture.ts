import login from "../pageMethods/loginPage"
import products from "../pageMethods/selectProduct"
import details from "../pageMethods/details"
import payment from "../pageMethods/payment"
import {test as base} from "@playwright/test"

const test = base.extend<{
    loginPage: login;
    selectProduct: products
    personDetails: details
    paymentDetails: payment
}>(
{
    loginPage: async ({page}, use)=> {
        const loginPage = new login(page)
        await use(loginPage)

    },
    selectProduct: async ({page}, use)=> {
        const selectProduct = new products(page)
        await use(selectProduct)
    },
    personDetails: async ({page}, use)=> {
        const personDetails = new details(page)
        await use (personDetails)
    },
    paymentDetails: async ({page}, use)=> {
        const paymentDetails = new payment(page)
        await use (paymentDetails)
    }
})
export default test