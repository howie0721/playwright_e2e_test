# Chapter 2：Playwright 核心概念

## 2.1 瀏覽器自動化原理
Playwright 透過程式碼控制瀏覽器行為，模擬使用者操作（點擊、輸入、瀏覽等），並可跨瀏覽器執行（Chromium、Firefox、WebKit）。

## 2.2 Page、Browser、Context 介紹
- **Browser**：瀏覽器實例，代表一個瀏覽器程式。
- **Context**：瀏覽器上下文，類似獨立的分頁或使用者 Session，可同時開啟多個 Context 互不干擾。
- **Page**：網頁分頁，代表一個瀏覽器分頁，可操作 DOM、執行測試。

範例程式：
```js
const { test, expect } = require('@playwright/test');

test('能夠開啟分頁並前往指定網址', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://playwright.dev/');
  // 驗證標題有 Playwright 字樣
  await expect(page).toHaveTitle(/Playwright/);
  await context.close();
});
```

## 2.3 元素選取與操作
Playwright 支援多種選取器（CSS、text、XPath），可用於點擊、輸入、取得元素內容等。

範例程式：
```js
await page.click('text=Docs'); // 以文字選取並點擊
await page.click('button.DocSearch.DocSearch-Button'); // 點擊搜尋按鈕
await page.waitForSelector('input.DocSearch-Input', { state: 'visible' }); // 等待搜尋框出現
```

## 2.4 等待與同步機制
Playwright 內建智慧等待，常用 `await` 等待元素出現或狀態改變，避免同步問題。

範例：
```js
await page.waitForSelector('h1'); // 等待 h1 元素出現
```

---

完成本章後，將能理解 Playwright 的核心物件與基本操作，為後續測試撰寫打下基礎。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 3！