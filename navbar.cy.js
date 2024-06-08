/// <reference types="cypress" />

describe('Navbar Test',{testIsolation: false},() =>{
    before(() =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content',() =>{
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').contains('Online Banking').should('be.visible')
        cy.get('p').contains('Pay bills easily').should('be.visible')
        cy.get('#account_summary_link').should('contain', 'Account Summary')
        cy.get('#account_activity_link').should('contain', 'Account Activity')
        cy.get('#transfer_funds_link').should('contain', 'Transfer Funds')
        cy.get('#pay_bills_link').should('contain', 'Pay Bills')
        cy.get('#money_map_link').should('contain', 'My Money Map')
        cy.get('#online_statements_link').should('contain', 'Online Statements')
    });

    it('Should display feedback content',() =>{
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('contain', 'Feedback')
        cy.get('#name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#subject').should('be.visible')
        cy.get('#comment').should('be.visible')
        cy.get('.btn-signin').should('have.value', 'Send Message')
        cy.get('input[name="clear"]').should('have.value', 'Clear')
    });

    it('Should display homepage content', () => {
        cy.get('.brand').click()
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').should('contain', 'Signin')
        cy.get('h4').should('contain', 'Online Banking')
    });
});