// 4.3 網路攔截與模擬範例
const { test } = require('@playwright/test');

test('API 攔截與回應模擬', async ({ page }) => {
  await page.route('**/api/**', route => route.fulfill({ status: 200, body: '{"ok":true}' }));
  await page.goto('https://playwright.dev/');
  // 這裡可加驗證 API 行為
});
