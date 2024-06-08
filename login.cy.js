/// <reference types="cypress" />

describe('Login/Logout Test',{testIsolation: false},() =>{
    before(() =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should try to login with invalid data',() =>{
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid_username')
        cy.get('#user_password').type('invalid_password')
        cy.get('.btn-primary').click()
    });

    it('Should display error message',() =>{
        cy.get('.alert-error').contains('Login and/or password are wrong.').should('be.visible')
    });

    it('Should be able to login with valid data', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').contains('username').should('be.visible')
    });

    it('Should be able to logout', () => {
       cy.get('.dropdown-toggle').contains('username').click()
       cy.get('#logout_link').click()
       cy.get('#signin_button').should('be.visible')
    });
});