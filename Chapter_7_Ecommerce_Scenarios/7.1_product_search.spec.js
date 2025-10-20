// 7.1 商品瀏覽與搜尋流程範例
const { test, expect } = require('@playwright/test');

test('商品搜尋流程', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.fill('input.search', '商品名稱');
  await page.click('button.search');
  await expect(page.locator('.product-list')).toContainText('商品名稱');
});
