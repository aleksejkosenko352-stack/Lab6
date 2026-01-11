const { test, expect } = require('@playwright/test');

// 1. Скріншот всієї сторінки
test('Скріншот всієї сторінки', async ({ page }) => {
  await page.goto('/');
  expect(await page.screenshot())
    .toMatchSnapshot('full-page.png');
});

// 2. Скріншот окремого елемента
test('Скріншот заголовка', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('h1');
  expect(await title.screenshot())
    .toMatchSnapshot('title.png');
});
