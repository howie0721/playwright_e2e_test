// 4.2 截圖與錄影範例
const { test } = require('@playwright/test');

test('截圖與元素截圖', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screenshot.png' });
  await page.locator('h1').screenshot({ path: 'h1.png' });
});
