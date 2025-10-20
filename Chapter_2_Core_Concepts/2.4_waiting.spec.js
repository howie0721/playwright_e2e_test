// 2.4 等待與同步機制測試範例（Playwright Test 版）
const { test, expect } = require('@playwright/test');

test('等待 h1 標籤出現並驗證內容', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // 等待 h1 標籤出現
  await page.waitForSelector('h1');
  const h1Text = await page.textContent('h1');
  expect(h1Text).toMatch(/Playwright/);
});
