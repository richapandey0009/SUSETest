const { loginRancherUI } = require("../../support/loginRancherAPI")
describe('Access Rancher UI using API', () => {
    it('Login Rancher using API',() => {
      //Test Case#1: Login into Rancher UI using API
      cy.loginRancherAPI().then((response) => {

        //Validate that login API request is successful
        expect(response.status).to.eq(200)

        //Validate main web page opens up after login
        expect(response.body).contain('<title>Rancher</title>')
        //cy.log(response.body)
      })
    })
  })