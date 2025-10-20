// 4.1 表單與檔案上傳範例
const { test, expect } = require('@playwright/test');

test('表單填寫與檔案上傳', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.fill('input.new-todo', 'Playwright 任務');
  // 假設有檔案上傳欄位
  // await page.setInputFiles('input[type="file"]', 'path/to/file.png');
  await expect(page.locator('.new-todo')).toHaveValue('Playwright 任務');
});
