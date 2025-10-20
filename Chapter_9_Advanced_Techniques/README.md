# Chapter 9：高級技巧與實戰

## 9.1 自訂命令與擴充
- Playwright 支援自訂 helper、擴充 test API。
- 範例：
```js
test('自訂登入指令', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.fill('input[name="account"]', 'user');
  await page.fill('input[name="password"]', 'pw');
  await page.click('button.login');
});
```

## 9.2 API 測試
- Playwright 可直接發送 API 請求，驗證回應。
- 範例：
```js
const response = await page.request.get('https://api.example.com/data');
expect(response.ok()).toBeTruthy();
```

## 9.3 效能測試
- 可量測網頁載入時間、資源大小等。
- 範例：
```js
const start = Date.now();
await page.goto('https://playwright.dev/');
const duration = Date.now() - start;
console.log('載入時間(ms):', duration);
```

## 9.4 真實專案案例分析
- 分享 Playwright 在實際專案中的應用與優化經驗。
- 範例：
```js
// 依專案需求設計測試流程
```

---

完成本章後，將能掌握 Playwright 進階技巧與實戰經驗，提升自動化測試能力。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 10！
