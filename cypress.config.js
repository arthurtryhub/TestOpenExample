const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    viewportHeight: 1080,
    viewportWidth: 1920,

    baseUrl: "https://example.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
