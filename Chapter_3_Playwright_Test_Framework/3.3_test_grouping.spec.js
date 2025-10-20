// 3.3 測試分群範例
const { test, expect } = require('@playwright/test');

test.describe('首頁相關測試', () => {
  test('標題驗證', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});
