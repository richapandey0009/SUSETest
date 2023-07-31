1. User Configurable Parameters in cypress.config.js: <br/>
    a. baseURL <br/>
    b. Rancher Username (adminUser) <br/>
    c. Rancher password (adminPassword) <br/>

2. Level 1: Login into Rancher UI <br/>
    a. Test file: cypress/e2e/UI-Tests/accessRancherUI.cy.js <br/>
    b. Re-usable code: cypress/support/loginRancherUI.js <br/>

3. Level 2: Login into Rancher using API <br/>
NOTE: Instead of Go lang, I have used cypress itself <br/>
    a. Test file: cypress/e2e/UI-Tests/accessRancherAPI.cy.js <br/>
    b. Re-usable code: cypress/support/loginRancherAPI.js <br/>

4. Level 3: Folder Level3 contains terraform code to create VM in gcp