// 4.4 多分頁與彈跳視窗範例
const { test, expect } = require('@playwright/test');

test('多分頁與彈跳視窗', async ({ context, page }) => {
  await page.goto('https://playwright.dev/');
  // 假設有 target="_blank" 的連結
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]'),
  ]);
  await newPage.goto('https://example.com');
  await expect(newPage).toHaveURL('https://example.com');
});
