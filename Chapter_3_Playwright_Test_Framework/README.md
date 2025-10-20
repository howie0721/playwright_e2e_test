# Chapter 3：Playwright Test 框架

## 3.1 Playwright Test 介紹
Playwright Test 是官方提供的 E2E 測試框架，支援自動化執行、斷言、分群、報告等功能。

## 3.2 測試結構與語法
- `test`：定義一個測試案例。
- `expect`：斷言結果是否符合預期。
- 支援 before/after hook、分群、參數化等。

範例程式：
```js
const { test, expect } = require('@playwright/test');

test('首頁標題應包含 Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

## 3.3 測試組織與分群
可用 `test.describe` 分群管理測試案例，提升可讀性與維護性。

範例：
```js
test.describe('首頁相關測試', () => {
  test('標題驗證', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});
```

## 3.4 使用 fixtures
Playwright Test 內建 fixture 機制，可自動提供 browser/page 等物件，並支援自訂。

- 預設 fixture：每個 test 都自動取得 `page`、`browser` 等物件，無需手動建立。
- 自訂 fixture：可在 `test.extend` 裡擴充自己的資料、物件或流程。
- 支援 beforeEach/afterEach hook，方便測試前後初始化與清理。

範例：
```js
const { test, expect } = require('@playwright/test');

test('預設 fixture 提供 page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// 自訂 fixture 範例
const myTest = test.extend({
  myData: async ({}, use) => {
    await use('Hello Fixture!');
  },
});

myTest('可以取得自訂 fixture', async ({ myData }) => {
  expect(myData).toBe('Hello Fixture!');
});
```

更多用法可參考官方文件：[Playwright Test Fixtures](https://playwright.dev/docs/test-fixtures)

## 3.5 報告與除錯
Playwright Test 提供多種報告與除錯工具，方便追蹤測試結果與分析失敗原因。

- 內建報告格式：
  - `list`（預設）：終端機文字列表
  - `dot`：每個測試一個點
  - `html`：圖形化互動報告，可用 `npx playwright show-report` 開啟
  - 可在 `playwright.config.js` 設定 `reporter` 欄位

- 除錯工具：
  - `--headed`：以有頭模式執行，直接看到瀏覽器操作
  - `--debug`：進入 Playwright Inspector，逐步執行、即時觀察
  - `--trace`：產生 trace 檔案，失敗時可用 `npx playwright show-trace` 互動式回溯
  - 自動截圖、錄影：可在 config 設定 `screenshot`、`video`，失敗時自動保存

範例指令：
```
npx playwright test --headed           # 有頭模式
npx playwright test --debug            # 進入 Inspector
npx playwright test --trace on         # 開啟 trace
npx playwright show-report             # 查看 HTML 報告
npx playwright show-trace trace.zip    # 查看 trace 詳細流程
```

更多用法可參考官方文件：[Playwright Test Reports & Debugging](https://playwright.dev/docs/test-reporters)

---

完成本章後，將能熟練 Playwright Test 框架的基本用法，並能撰寫結構化的自動化測試。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 4！
