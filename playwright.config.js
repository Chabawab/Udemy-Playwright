// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //timeout is for every step
  timeout: 30000,
  //expect is for assertion validations
  expect: {
    timeout: 5000,
  },

  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless : false
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
  },

});

