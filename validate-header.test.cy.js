describe('Validate Header', () =>{
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
})