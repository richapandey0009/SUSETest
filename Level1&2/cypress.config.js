const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://10.71.144.31:443'
  },
  env: {
    adminUser:"admin",
    adminPassword:"adminuser@2023"
  }
});
