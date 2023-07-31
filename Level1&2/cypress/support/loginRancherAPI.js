//Re-usuable code to perform Rancher login using API
//In test file (e2e/*.cy.js) below code can be used as "cy.loginRancherAPI"
Cypress.Commands.add("loginRancherAPI",() => {
      cy.request({
        method: 'GET',
        url: '/dashboard/auth/login',
        headers: {
          authorization: 'Basic YWRtaW46YWRtaW51c2VyQDIwMjM='
        },
        failOnStatusCode: false,
        
      })      
    }
  );