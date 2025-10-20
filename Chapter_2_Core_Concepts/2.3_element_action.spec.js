// 2.3 元素選取與操作測試範例（Playwright Test 版）
const { test, expect } = require('@playwright/test');

test('能夠點擊 Docs 並叫出搜尋框', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('text=Docs');
  await page.click('text=Docs');
  await page.waitForURL('**/docs/intro');
  // 點擊搜尋按鈕
  await page.waitForSelector('button.DocSearch.DocSearch-Button', { state: 'visible' });
  await page.waitForTimeout(200);
  await page.click('button.DocSearch.DocSearch-Button');
  // 等待搜尋 input 出現並驗證
  await page.waitForSelector('input.DocSearch-Input', { state: 'visible' });
  const inputVisible = await page.isVisible('input.DocSearch-Input');
  expect(inputVisible).toBeTruthy();
});
