# Chapter 4：進階功能

## 4.1 處理表單與檔案上傳
- Playwright 可自動填寫表單、選擇下拉選單、上傳檔案。
- 範例：
```js
await page.fill('input[name="username"]', 'howie');
await page.selectOption('select#country', 'TW');
await page.setInputFiles('input[type="file"]', 'path/to/file.png');
```

## 4.2 截圖與錄影
- 可針對整頁或指定元素截圖，支援自動錄影測試過程。
- 範例：
```js
await page.screenshot({ path: 'screenshot.png' });
await page.locator('h1').screenshot({ path: 'h1.png' });
```

## 4.3 網路攔截與模擬
- 可攔截 API 請求、回應，模擬網路狀態。
- 範例：
```js
await page.route('**/api/**', route => route.fulfill({ status: 200, body: '{"ok":true}' }));
```

## 4.4 處理多分頁與彈跳視窗
- 支援多分頁、彈跳視窗自動化操作。
- 範例：
```js
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('a[target="_blank"]'),
]);
await newPage.goto('https://example.com');
```

---

完成本章後，將能掌握 Playwright 進階自動化技巧，處理複雜互動與多種網頁場景。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 5！
