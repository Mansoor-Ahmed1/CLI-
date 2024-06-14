#! /usr/bin/env node

import inquirer from "inquirer"

let currency = {
    USD: 0.0036,
    PKR: 1,       // base currency
    GBP: 0.0028,
    CNY: 0.0049,
    AED: 0.013,
    RUB: 0.32,
    SAR: 0.013
} // currency rates on 14th june(2024) at about 6pm


let user_input = await inquirer.prompt(
    [
        {
            name: "fromCurrency",
            type: "list",
            choices: ["USD", "PKR", "GBP", "CNY", "AED", "RUB", "SAR"],
            message: "Enter the currency (from which you would like to convert)",
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the amount ofcurrency from which you would like to convert",
        },
        {
            name: "toCurrency",
            type: "list",
            choices: ["USD", "PKR", "GBP", "CNY", "AED", "RUB", "SAR"],
            message: "Enter the currency to which you would like to convert",
        }
    ]
)


console.log(user_input.fromCurrency)

let amount_to_convert: number = user_input.amount // obtaining value wih relation to base currency

let fromAmount: number = currency[user_input.fromCurrency as keyof typeof currency] // obtaining value wih relation to base currency

let toAmount: number = currency[user_input.toCurrency as keyof typeof currency] // obtaining value wih relation to base currency

let base_amount: number = amount_to_convert / fromAmount // conversion of given amount to base amount. 

let finalAmount: number = base_amount * toAmount // conversion of base amount to required amount.

// console.log(finalAmount)

console.log(`Converted Amount: ${finalAmount.toFixed(2)} ${user_input.toCurrency}`);