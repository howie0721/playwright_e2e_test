// 8.2 參數化與環境變數範例
const { test, expect } = require('@playwright/test');

test('參數化測試', async ({ page }) => {
  const baseUrl = process.env.BASE_URL || 'https://playwright.dev/';
  await page.goto(baseUrl);
  await expect(page).toHaveTitle(/Playwright/);
});