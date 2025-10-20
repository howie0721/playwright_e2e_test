// 5.3 斷點切換行為測試範例
const { test, expect } = require('@playwright/test');

test('斷點切換行為', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.setViewportSize({ width: 1024, height: 768 }); // 平板
  // await expect(page.locator('.tablet-menu')).toBeVisible();
  await page.setViewportSize({ width: 375, height: 667 }); // 手機
  // await expect(page.locator('.mobile-menu')).toBeVisible();
});
