// 6.2 瀏覽器相容性問題排查範例
const { test, expect } = require('@playwright/test');

test('僅在 Firefox 驗證相容性', async ({ page, browserName }) => {
  test.skip(browserName !== 'firefox', '只在 Firefox 執行');
  await page.goto('https://playwright.dev/');
  // 這裡可加上 Firefox 專屬驗證
  await expect(page).toHaveTitle(/Playwright/);
});
