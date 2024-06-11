import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
// import { link, issue } from "allure-js-commons";

test('has title', async ({ page }) => {
  await allure.step('Open url', async () => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
});

test('get started link', async ({ page }) => {
  await allure.step('Open url', async () => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
});
