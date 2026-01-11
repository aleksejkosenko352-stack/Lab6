const { test, expect } = require('@playwright/test');

// 4. Заголовок сайту Playwright
test('Перевірка заголовка playwright.dev', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// 5. Перевірка навігаційного меню
test('Наявність меню навігації', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('nav')).toBeVisible();
});
