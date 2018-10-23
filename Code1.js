/**
 *   @author Murdock, Matthew (murdockm@student.ncmich.edu)
 *   @version 0.0.5
 *   @summary Midterm || created: 10.22.18
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let savingsBal, checkingBal, transactionType, moveToChecking, moveToSavings;
let amount, amount2;
let customer = [];
let numCustomers;

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setNumCustomers();
        populateCustomer();
        setContinueResponse();
        setCheckingBal();
        setSavingsBal();
    }
    while (continueResponse === 1) {
        setTransactionType();
        setContinueResponse();
    }
    printCheers();
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nWould you like to do something else? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nWould you like to do something else? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setSavingsBal() {
    savingsBal = 1000.00;
}

function setCheckingBal() {
    checkingBal = 1000.00;
}

function printCheers() {
    console.log(`Have a good day!`)
}

function setTransactionType() {
    transactionType = Number(PROMPT.question(`\nWhat action would you like to take? 
     1 = Add/Remove funds, 
     2 = ...move funds to checking,
     3 = ...move funds to savings, 
     4 = Move funds from checking to savings, 
     5 = Move funds from savings to checking, 
     6 = Check current savings balance,
     7 = Check current checking balance, 
     8 = Cancel. 
     Note: before moving funds to an account you must first set an amount.`));
    switch (transactionType) {
        case 1: amount = Number(PROMPT.question(`\nWhat is the amount you would wish to add/subtract? If taking funds please use "-" before your amount. `));
                amount2 = amount;
        console.log(amount);
        console.log(amount2);
            break;
        case 2: checkingBal = amount + checkingBal;
            console.log(`\nDone!`);
            break;
        case 3: savingsBal = amount + savingsBal;
            console.log(`\nDone!`);
            break;
        case 4: moveToSavings = amount2 - checkingBal;
                moveToChecking = amount + moveToChecking;
            console.log(`\nDone!`);
            break;
        case 5: moveToChecking = amount + checkingBal;
                moveToSavings = amount2 - moveToSavings;
            console.log(`\nDone!`);
            break;
        case 6: console.log(`\nYour current balance in your savings account is $${savingsBal}!`);
            break;
        case 7: console.log(`\nYour current balance in your Checking account is $${checkingBal}!`);
            break;
        case 8: console.log(`\nSorry to see you go!`);
            return continueResponse;
    }
}

function populateCustomer() {
    for (let i = 0; i < numCustomers; i++) {
        console.log(`\nCustomer ${i + 1}:`);
        while (! customer[i][0] || !/^[a-zA-z -]{1,30}$/.test(customer[i][0])) {
            customer[i][0] = PROMPT.question(`Please enter your last name: `);
            if (! /^[a-zA-z -]{1,30}$/.test(customer[i][0])) {
                console.log(`${customer[i][0]} is invalid. Please try again. `);
            }
        }
        while (! customer[i][0] || !/^[a-zA-z -]{1,30}$/.test(customer[i][0])) {
            customer[i][0] = PROMPT.question(`Please enter your first name: `);
            if (! /^[a-zA-z -]{1,30}$/.test(customer[i][0])) {
                console.log(`${customer[i][0]} is invalid. Please try again. `);
            }
        }
        while (! customer[i][0] || !/^[0-9]{4}$/.test(customer[i][0])) {
            customer[i][0] = PROMPT.question(`Please enter your desired pin xxxx: `);
            if (! /^[0-9]{1,4}$/.test(customer[i][0])) {
                console.log(`${customer[i][0]} is invalid. Please try again. `);
            }
        }
        while (! customer[i][0] || !/^[1-9]{16}$/.test(customer[i][0])) {
            customer[i][0] = PROMPT.question(`Please enter your card number xxxxxxxxxxxxxxxx: `);
            if (! /^[a-zA-z -]{1,30}$/.test(customer[i][0])) {
                console.log(`${customer[i][0]} is invalid. Please try again. `);
            }
        }
    }

}
