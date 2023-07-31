1. User Configurable Parameters in cypress.config.js:
    a. baseURL
    b. Rancher Username (adminUser)
    c. Rancher password (adminPassword)

2. Level 1: Login into Rancher UI
    a. Test file: cypress/e2e/UI-Tests/accessRancherUI.cy.js
    b. Re-usable code: cypress/support/loginRancherUI.js

3. Level 2: Login into Rancher using API
NOTE: Instead of Go lang, I have used cypress itself
    a. Test file: cypress/e2e/UI-Tests/accessRancherAPI.cy.js
    b. Re-usable code: cypress/support/loginRancherAPI.js

4. Level 3: Folder Level3 contains terraform code to create VM in gcp