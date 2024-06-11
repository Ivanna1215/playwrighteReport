import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.ts'],
  timeout: 60*1000,
  expect:{
    timeout: 20000
  },
  reportSlowTests: null,
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 
  [['json', {  outputFile: './test-results/report.json' }]] : 
    [['json', {  outputFile: './test-results/report.json' }],
    ['allure-playwright',{
        detail: true,
          suiteTitle: true,
          outputFolder: "allure-results",
          environmentInfo: {
            url: 'https://playwright.dev/',
          }
        }
      ]],
      use: {
        trace: 'retain-on-failure',
        video: 'off',
        screenshot: 'on',
        headless: true
      },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome']},
    },

    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox']},
    // },

    {
      name: 'Safari',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
