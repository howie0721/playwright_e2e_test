// 9.3 效能測試範例
const { test } = require('@playwright/test');

test('網頁載入效能測試', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://playwright.dev/');
  const duration = Date.now() - start;
  console.log('載入時間(ms):', duration);
});
