const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'file:///C:/Users/27618/Documents/Codecademy/PersonalPortfolio/index.html',
    browserName: 'chromium',
  },
});
