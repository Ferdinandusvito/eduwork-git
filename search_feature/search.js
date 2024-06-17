import searchPage from './search.page.js';
const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the homepage', () =>{
    searchPage.visit()
});

When('I put the keyword "transfer" into the search box', () =>{
    searchPage.searchBox('transfer')
});

When('I press enter on keyboard', () =>{
    searchPage.searchBox('{enter}')
});

Then('I see search result for "transfer"', () =>{
    searchPage.messageBox('The following pages were found for the query: transfer')
    searchPage.listBox('Zero - Transfer Funds')
});

When('I put the keyword "xxx" into the search box', () =>{
    searchPage.searchBox('xxx')
});

Then('I see search result "No results were found for the query: xxx"', () =>{
    searchPage.messageBox('No results were found for the query: xxx')
});

When('I put nothing into the search box', () =>{
    searchPage.searchBox('{selectall}{backspace}')
});

Then('I see search result for all available transactions', () =>{
    searchPage.listBox('Zero - Personal Banking - Loans - Credit Cards')
    searchPage.listBox('Zero - Log in')
    searchPage.listBox('Zero - FAQ - Frequently Asked Questions')
    searchPage.listBox('Zero - Contact Us')
    searchPage.listBox('Zero - Help')
    searchPage.listBox('Zero - Free Access to Online Banking')
    searchPage.listBox('Zero - Account Summary')
    searchPage.listBox('Zero - Account Activity')
    searchPage.listBox('Zero - Transfer Funds')
    searchPage.listBox('Zero - Pay Bills')
    searchPage.listBox('Zero - My Money Map')
    searchPage.listBox('Zero - Online Statements')
});