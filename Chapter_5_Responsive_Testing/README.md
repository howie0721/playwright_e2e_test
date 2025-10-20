# Chapter 5：響應式設計測試

## 5.1 不同裝置尺寸模擬（手機、平板、桌機）
- Playwright 可模擬多種裝置尺寸，驗證網頁在不同螢幕下的顯示效果。
- 範例：
```js
const iPhone = { width: 375, height: 667 };
await page.setViewportSize(iPhone);
```

## 5.2 元素顯示與隱藏驗證
- 驗證響應式設計下，特定元素是否正確顯示或隱藏。
- 範例：
```js
await expect(page.locator('.mobile-menu')).toBeVisible();
await expect(page.locator('.desktop-menu')).toBeHidden();
```

## 5.3 斷點切換行為測試
- 可模擬不同斷點，測試網頁在各種寬度下的互動行為。
- 範例：
```js
await page.setViewportSize({ width: 1024, height: 768 });
// 驗證桌機版行為
await page.setViewportSize({ width: 375, height: 667 });
// 驗證手機版行為
```

---

完成本章後，將能掌握 Playwright 在響應式設計測試上的應用，確保網站在各種裝置下都能正常運作。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 6！
