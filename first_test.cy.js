/// <reference types="cypress" />

describe('My First Test',() =>{
    it('Visit the Kitchen Sink',() =>{
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')

        cy.get('.action-email').type('vito@gmail.com').should('have.value','vito@gmail.com')
    })
})