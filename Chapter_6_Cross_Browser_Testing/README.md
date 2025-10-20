# Chapter 6：跨瀏覽器測試

## 6.1 支援 Chrome、Firefox、Safari、Edge
- Playwright 可同時測試多種瀏覽器，確保相容性。
- 範例：
```js
// 在 config 設定 projects
projects: [
  { name: 'chromium', use: { browserName: 'chromium' } },
  { name: 'firefox', use: { browserName: 'firefox' } },
  { name: 'webkit', use: { browserName: 'webkit' } },
]
```

## 6.2 瀏覽器相容性問題排查
- 可針對不同瀏覽器執行測試，找出相容性問題。
- 範例：
```js
// test.only('僅在 Firefox 執行', async ({ page, browserName }) => {
//   if (browserName !== 'firefox') test.skip();
//   await page.goto('https://playwright.dev/');
// });
```

## 6.3 自動化多瀏覽器執行
- 一次執行所有瀏覽器測試，提升覆蓋率。
- 指令：
```
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

完成本章後，將能掌握多瀏覽器自動化測試技巧，確保網站在各主流瀏覽器下都能正常運作。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 7！
