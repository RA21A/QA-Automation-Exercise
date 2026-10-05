const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'reports',
    charts: true,
    reportPageTitle: 'Automation Exercise Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  e2e: {
    baseUrl: 'https://automationexercise.com',

    specPattern: 'cypress/e2e/**/*.cy.js',

    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    }
  },

  viewportWidth: 1280,
  viewportHeight: 720,

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  requestTimeout: 15000,
  responseTimeout: 30000,

  video: true,
  screenshotOnRunFailure: true,

  retries: {
    runMode: 1,
    openMode: 0
  },

  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads'
});
