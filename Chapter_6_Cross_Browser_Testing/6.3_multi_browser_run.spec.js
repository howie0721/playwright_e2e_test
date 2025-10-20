// 6.3 自動化多瀏覽器執行範例
const { test, expect } = require('@playwright/test');

test('多瀏覽器自動化測試', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
