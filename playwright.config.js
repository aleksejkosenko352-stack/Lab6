import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Де шукати тести
  testDir: './tests',

  // HTML-звіт після тестів
  reporter: 'html',

  // Загальні налаштування для всіх тестів
  use: {
    // Базова адреса сайту
    baseURL: 'http://localhost:3000',

    // Запис трейсів при повторному запуску впалих тестів
    trace: 'on-first-retry',

    // Запуск у headless-режимі (без UI)
    headless: true
  },

  // Браузери для тестування
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }
    }
  ],

  // Локальний сервер, який запускається перед тестами
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI
  }
});