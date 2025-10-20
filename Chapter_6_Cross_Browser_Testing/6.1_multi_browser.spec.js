// 6.1 支援多瀏覽器範例
const { test, expect } = require('@playwright/test');

test('Chromium 測試', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', '只在 Chromium 執行');
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Firefox 測試', async ({ page, browserName }) => {
  test.skip(browserName !== 'firefox', '只在 Firefox 執行');
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('WebKit 測試', async ({ page, browserName }) => {
  test.skip(browserName !== 'webkit', '只在 WebKit 執行');
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
