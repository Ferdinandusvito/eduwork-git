/// <reference types="cypress" />

describe('Pay bills page test', () =>{

    beforeEach(() => {
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password
            cy.visit('http://zero.webappsecurity.com/login.html')
            cy.url().should('include', 'login.html')
            cy.login(username, password)
            cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        });
    });

  it('Should select Sprint on Payee', () =>{
    cy.selectPayee('sprint')
    cy.get('#sp_payee').find('option:selected').should('have.text', 'Sprint')
  });

  it('Should select Bank of America on Payee', () =>{
    cy.selectPayee('bofa')
    cy.get('#sp_payee').find('option:selected').should('have.text', 'Bank of America')
  });

  it('Should select Apple on Payee', () =>{
    cy.selectPayee('apple')
    cy.get('#sp_payee').find('option:selected').should('have.text', 'Apple')
  });

  it('Should select Wells Fargo on Payee', () =>{
    cy.selectPayee('wellsfargo')
    cy.get('#sp_payee').find('option:selected').should('have.text', 'Wells Fargo')
  });

  it('Should select Savings on Account', () =>{
    cy.selectAccount('1')
    cy.get('#sp_account').find('option:selected').should('have.text', 'Savings')
  });

  it('Should select Checking on Account', () =>{
    cy.selectAccount('2')
    cy.get('#sp_account').find('option:selected').should('have.text', 'Checking')
  });

  it('Should select Savings on Account', () =>{
    cy.selectAccount('3')
    cy.get('#sp_account').find('option:selected').should('have.text', 'Savings')
  });

  it('Should select Loan on Account', () =>{
    cy.selectAccount('4')
    cy.get('#sp_account').find('option:selected').should('have.text', 'Loan')
  });

  it('Should select Credit Card on Account', () =>{
    cy.selectAccount('5')
    cy.get('#sp_account').find('option:selected').should('have.text', 'Credit Card')
  });

  it('Should select Brokerage on Account', () =>{
    cy.selectAccount('6')
    cy.get('#sp_account').find('option:selected').should('have.text', 'Brokerage')
  });

  it('should input the correct amount', () => {
    cy.get('#sp_amount').type('100')
    cy.get('#sp_amount').should('have.value', '100')
  });

  it('should input the current date', () => {
    const currentDate = new Date()
    const currentDateString = currentDate.toISOString().substring(0, 10)
    cy.get('#sp_date').invoke('val', currentDateString).trigger('change')
    cy.get('#sp_date').should('have.value', currentDateString)
  });

  it('should be able to fill the description ', () => {
    const description = 'Pay Bills'
    cy.get('#sp_description').type(description)
    cy.get('#sp_description').should('have.value', description)
  });

  it('should be able to submit the payment', () => {
    cy.get('#sp_amount').type('100')
    cy.get('#sp_amount').should('have.value', '100')
    const currentDate = new Date()
    const currentDateString = currentDate.toISOString().substring(0, 10)
    cy.get('#sp_date').invoke('val', currentDateString).trigger('change')
    cy.get('#sp_date').should('have.value', currentDateString)
    const description = 'Pay Bills'
    cy.get('#sp_description').type(description)
    cy.get('#sp_description').should('have.value', description)
    cy.get('#pay_saved_payees').click()
    cy.get('#alert_content').should('contain', 'The payment was successfully submitted.')
  });
});