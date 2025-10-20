// 2.2 Browser、Context、Page 測試範例（Playwright Test 版）
const { test, expect } = require('@playwright/test');

test('能夠開啟分頁並前往指定網址', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://playwright.dev/');
  // 驗證標題有 Playwright 字樣
  await expect(page).toHaveTitle(/Playwright/);
  await context.close();
});
