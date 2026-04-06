import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://medcaptain.com/zh-cn');
});