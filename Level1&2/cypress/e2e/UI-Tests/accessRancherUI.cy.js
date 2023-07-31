const { loginRancherUI } = require("../../support/loginRancherUI")
describe('Access Rancher UI', () => {
    it('Login Rancher UI',() => {
      //Test Case#1: Login into Rancher UI
      cy.loginRancherUI().then((response) => {
        
        //Test Case#2: Validate main web page opens up
        cy.url().should('include', '/dashboard/home');

        //Test Case#3: Validate main web page title is correct
        cy.title().should('eq', 'Rancher');
      })
    })
  })