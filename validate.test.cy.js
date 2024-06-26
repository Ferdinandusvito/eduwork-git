///<reference types="cypress"/>

describe('Validate API with pokeapi', () =>{
    it('validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    });

    it('validate respons boody', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('exist')
        cy.get('@pokemon').its('body').should('have.property', 'abilities')
        cy.get('@pokemon').its('body').its('name').should('eq', 'ditto')
    });

    it('validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('eq', 200)
    });

    it.only('validate abilities', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
        expect(response.body.abilities[0].ability.name).to.eq('limber')
    })
    });
})