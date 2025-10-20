// 9.1 自訂命令與擴充範例
const { test, expect } = require('@playwright/test');

test('自訂登入指令', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.fill('input[name="account"]', 'user');
  await page.fill('input[name="password"]', 'pw');
  await page.click('button.login');
});
