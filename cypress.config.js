const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "e2e/**/*.cy.js",
    fixturesFolder: "fixtures",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
