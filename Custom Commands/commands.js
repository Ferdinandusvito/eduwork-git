
Cypress.Commands.add('login', (username,password) =>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
});

Cypress.Commands.add('selectPayee', (payeeKey) => {
  cy.fixture('payees').then((payees) => {
    const payeeValue = payees[payeeKey];
    cy.get('#sp_payee').select(payeeKey);
    cy.get('#sp_payee').find('option:selected').should('have.value', payeeKey);
    cy.get('#sp_payee').find('option:selected').should('have.text', payeeValue);
  });
});

Cypress.Commands.add('selectAccount', (accountKey) => {
  cy.fixture('accounts').then((accounts) => {
    const account = accounts[accountKey];
    cy.get('#sp_account').select(accountKey);
    cy.get('#sp_account').find('option:selected').should('have.value', accountKey);
    cy.get('#sp_account').find('option:selected').should('have.text', account);
  });
});



  