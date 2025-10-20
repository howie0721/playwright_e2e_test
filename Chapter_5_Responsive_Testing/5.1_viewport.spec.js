// 5.1 不同裝置尺寸模擬範例
const { test, expect } = require('@playwright/test');

test('手機版顯示測試', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 }); // iPhone 尺寸
  await page.goto('https://playwright.dev/');
  // 假設有手機版 menu
  // await expect(page.locator('.mobile-menu')).toBeVisible();
});

test('桌機版顯示測試', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 }); // 桌機尺寸
  await page.goto('https://playwright.dev/');
  // 假設有桌機版 menu
  // await expect(page.locator('.desktop-menu')).toBeVisible();
});
