# Chapter 7：電商網站專屬測試場景

## 7.1 商品瀏覽與搜尋流程
- 驗證商品列表、搜尋功能、分頁切換。
- 範例：
```js
await page.goto('https://demo.playwright.dev/todomvc');
await page.fill('input.search', '商品名稱');
await page.click('button.search');
await expect(page.locator('.product-list')).toContainText('商品名稱');
```

## 7.2 購物車操作與結帳流程
- 加入購物車、修改數量、結帳驗證。
- 範例：
```js
await page.click('button.add-to-cart');
await page.click('a.cart');
await expect(page.locator('.cart-item')).toBeVisible();
await page.click('button.checkout');
```

## 7.3 會員註冊、登入、訂單查詢
- 註冊新會員、登入、查詢訂單。
- 範例：
```js
await page.click('a.register');
await page.fill('input[name="email"]', 'test@example.com');
await page.fill('input[name="password"]', '123456');
await page.click('button.submit');
await expect(page.locator('.user-info')).toBeVisible();
```

## 7.4 行銷活動（折扣、優惠券）驗證
- 驗證折扣碼、優惠券套用流程。
- 範例：
```js
await page.fill('input.coupon', 'DISCOUNT2025');
await page.click('button.apply-coupon');
await expect(page.locator('.discount-info')).toBeVisible();
```

## 7.5 後台管理功能測試
- 驗證商品新增、訂單管理、權限控管。
- 範例：
```js
await page.goto('https://demo.playwright.dev/admin');
await page.click('button.add-product');
await expect(page.locator('.product-form')).toBeVisible();
```

---

完成本章後，將能掌握電商網站常見場景的自動化測試技巧，提升專案品質與穩定性。

下一步：請確認已完成本章所有步驟，準備進入 Chapter 8！
