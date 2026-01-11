const { test, expect } = require('@playwright/test');

// 1. Перевірка заголовка сторінки
test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText(
    'Вітаємо на локальній сторінці'
  );
});

// 2. Перевірка форми входу
test('Перевірка форми логіну', async ({ page }) => {
  await page.goto('/');
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');

  await expect(page.locator('#successMessage')).toBeVisible();
});

// 3. Валідація обовʼязкових полів
test('Валідація обовʼязкових полів', async ({ page }) => {
  await page.goto('/');
  await page.click('#loginButton');

  const invalidElement = await page.evaluate(() =>
    document.querySelector(':invalid')
  );

  expect(invalidElement).not.toBeNull();
});
