const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },

    "baseUrl": "https://www.google.com/",
    "defaultCommandTimeout": 8000,
    "pageLoadTimeout": 100000,
    "viewportHeight": 800,

    "viewportWidth": 1500
  },
});
