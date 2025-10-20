# Chapter 1：Playwright 基礎認識

## 1.1 什麼是 Playwright？
Playwright 是由 Microsoft 開發的現代化端對端自動化測試框架，支援多瀏覽器（Chromium、Firefox、WebKit），可用於網頁自動化測試、爬蟲、截圖等。

## 1.2 Playwright 與其他測試框架比較
- Selenium：老牌自動化工具，支援多語言，但速度較慢、API 較舊。
- Cypress：前端測試新星，易用但僅支援 Chrome 家族。
- Playwright：速度快、API 現代化、支援多瀏覽器與多平台。

## 1.3 安裝與環境建置
1. 安裝 Node.js（建議 LTS 版本）
2. 開啟終端機，執行：
   ```powershell
   npm init -y
   npm install -D playwright @playwright/test
   ```
3. 安裝 Playwright 依賴瀏覽器：
   ```powershell
   npx playwright install
   ```

## 1.4 第一個測試腳本
1. 建立 `example.spec.js` 檔案，內容如下：
   ```js
   const { test, expect } = require('@playwright/test');

   test('首頁標題驗證', async ({ page }) => {
     await page.goto('https://playwright.dev/');
     await expect(page).toHaveTitle(/Playwright/);
   });
   ```
2. 執行測試：
   ```powershell
   npx playwright test example.spec.js
   ```

---

下一步：請確認已完成本章所有步驟，準備進入 Chapter 2！