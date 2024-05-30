/// <reference types="cypress" />

describe('Browser Actions',() =>{
    
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
    });

    it('Should visit website', () => {
        cy.url().should('include', 'login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });
    it('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });
    it('Should not be able to login', () => {
        cy.get('.btn.btn-primary').click()
        cy.get('.alert.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')  

    });
})

    describe('Remember me box',() =>{
        beforeEach(()=>{
            cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
            cy.url().should('include', 'login.html')
        });
        
        it('Should be unchecked by default', () => {
            cy.get('#user_remember_me').should('not.be.checked')
        });
        it('Should be checked by user', () => {
            cy.get('#user_remember_me').check().should('be.checked')
        });
        it('Should be unchecked by user', () => {
            cy.get('#user_remember_me').uncheck().should('not.be.checked')
        });
    })
    
    describe('Forgot Password', ()=>{
        beforeEach(()=>{
            cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
            cy.url().should('include', 'login.html')
        });
        it('Should visit forgot password page', () => {
            cy.get('a[href="/forgot-password.html"]').click()
            cy.url().should('include', '/forgot-password.html')
        });
    })
