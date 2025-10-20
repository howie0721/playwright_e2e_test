// 3.2 Playwright Test 結構與語法範例
const { test, expect } = require('@playwright/test');

test('首頁標題應包含 Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
