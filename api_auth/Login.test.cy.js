/// <reference types = "cypress"/>

describe('Login using API', () =>{
    it('Successfully Login', () => {
        cy.loginViaAPI()
    });
})