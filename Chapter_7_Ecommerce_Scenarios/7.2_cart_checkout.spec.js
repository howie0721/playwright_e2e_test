// 7.2 購物車操作與結帳流程範例
const { test, expect } = require('@playwright/test');

test('購物車與結帳流程', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.click('button.add-to-cart');
  await page.click('a.cart');
  await expect(page.locator('.cart-item')).toBeVisible();
  await page.click('button.checkout');
});
