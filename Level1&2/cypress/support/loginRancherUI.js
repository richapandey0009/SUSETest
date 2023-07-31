//Re-usuable code to perform Rancher UI login
//In test file (e2e/*.cy.js) below code can be used as "cy.loginRancherUI"
Cypress.Commands.add(
    "loginRancherUI",
    ( 
      username = Cypress.env("adminUser"),
      password = Cypress.env("adminPassword")
    ) => {
      cy.visit('/');
      cy.get('input[id="username"]').should('have.value','').type(username);
      cy.get('input[type="password"]').should('have.value','').type(password);
      cy.get('button[id="submit"]').should('have.class','btn role-primary').click();
      cy.get('.loader').should('not.exist');
      cy.url().should('include', '/dashboard/home')
      
    }
  );