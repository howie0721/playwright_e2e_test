// 5.2 元素顯示與隱藏驗證範例
const { test, expect } = require('@playwright/test');

test('響應式元素顯示/隱藏', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://playwright.dev/');
  // await expect(page.locator('.mobile-menu')).toBeVisible();
  // await expect(page.locator('.desktop-menu')).toBeHidden();
});
