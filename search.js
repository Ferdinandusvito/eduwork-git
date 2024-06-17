const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the homepage', () =>{
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When('I put the keyword "transfer" into the search box', () =>{
    cy.get('#searchTerm').type('transfer')
});

When('I press enter on keyboard', () =>{
    cy.get('#searchTerm').type('{enter}')
});

Then('I see search result for "transfer"', () =>{
    cy.get('.top_offset').should('contain.text', 'The following pages were found for the query: transfer')
    cy.get('a').should('contain', 'Zero - Transfer Funds')
});

When('I put the keyword "xxx" into the search box', () =>{
    cy.get('#searchTerm').type('xxx')
});

Then('I see search result "No results were found for the query: xxx"', () =>{
    cy.get('.top_offset').should('contain.text', 'No results were found for the query: xxx')
});

When('I put nothing into the search box', () =>{
    cy.get('#searchTerm').click()
});

Then('I see search result for all available transactions', () =>{
    cy.get('a').should('contain', 'Zero - Personal Banking - Loans - Credit Cards')
    cy.get('a').should('contain', 'Zero - Log in')
    cy.get('a').should('contain', 'Zero - FAQ - Frequently Asked Questions')
    cy.get('a').should('contain', 'Zero - Contact Us')
    cy.get('a').should('contain', 'Zero - Help')
    cy.get('a').should('contain', 'Zero - Free Access to Online Banking')
    cy.get('a').should('contain', 'Zero - Account Summary')
    cy.get('a').should('contain', 'Zero - Account Activity')
    cy.get('a').should('contain', 'Zero - Transfer Funds')
    cy.get('a').should('contain', 'Zero - Pay Bills')
    cy.get('a').should('contain', 'Zero - My Money Map')
    cy.get('a').should('contain', 'Zero - Online Statements')
});