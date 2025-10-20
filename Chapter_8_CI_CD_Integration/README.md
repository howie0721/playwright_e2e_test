# Chapter 8：整合與 CI/CD

## 8.1 與 CI 工具整合（GitHub Actions、Jenkins 等）
- Playwright 可輕鬆整合主流 CI 工具，實現自動化測試。
- 範例：GitHub Actions 設定
```yaml
name: Playwright Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm ci
      - run: npx playwright install
      - run: npx playwright test
```

## 8.2 參數化與環境變數
- 可用環境變數、參數化測試提升彈性。
- 範例：
```js
process.env.BASE_URL = 'https://playwright.dev/';
await page.goto(process.env.BASE_URL);
```

## 8.3 測試維護與最佳實踐
- 保持測試簡潔、可讀、易維護。
- 建議：分群管理、善用 fixture、定期重構。

---

完成本章後，將能掌握 Playwright 與 CI/CD 整合、參數化、測試維護等實務技巧。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 9！
