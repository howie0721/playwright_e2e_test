// 1.4 第一個測試腳本範本
const { test, expect } = require('@playwright/test');

test('首頁標題驗證', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
