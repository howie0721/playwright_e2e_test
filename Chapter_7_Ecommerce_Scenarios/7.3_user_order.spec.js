// 7.3 會員註冊、登入、訂單查詢範例
const { test, expect } = require('@playwright/test');

test('會員註冊與登入', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.click('a.register');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', '123456');
  await page.click('button.submit');
  await expect(page.locator('.user-info')).toBeVisible();
});
