// 9.2 API 測試範例
const { test, expect } = require('@playwright/test');

test('API 請求驗證', async ({ request }) => {
  const response = await request.get('https://api.example.com/data');
  expect(response.ok()).toBeTruthy();
});
