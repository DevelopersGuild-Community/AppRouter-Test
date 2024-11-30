import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // TOPページ
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Log in' }).click();
  // ログインページ
  await expect(page.locator('h1')).toContainText('Please log in to continue.');
  await page.getByPlaceholder('Enter your email address').fill('user@nextmail.com');
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  // ダッシュボード
  await expect(page.locator('h1')).toContainText('Dashboard');
  // await expect(page.locator('body')).toMatchAriaSnapshot(`
  //   - link "Invoices":
  //     - paragraph: Invoices
  //   `);
  // Invoice
  await page.getByRole('link', { name: 'Invoices' }).click();
  await expect(page.locator('h1')).toContainText('Invoices');

  // TODO: pagination のテストの期待値を考える
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: '3' }).click();

  await page.getByRole('link', { name: 'Create Invoice' }).click();
  await page.getByRole('combobox', { name: 'Choose customer' }).selectOption({ label: 'Amy Burns' });
  await page.getByRole('spinbutton', { name: 'choose an amount' }).fill("123456");
  await page.locator('input[value="pending"]').click();

  await page.getByRole('button', { name: 'Create Invoice' }).click();

  // TODO: 一番最初の要素に表示されることを検証したい
  await expect(page.locator('tbody')).toContainText('Amy Burns');
  await expect(page.locator('tbody')).toContainText('$123,456.00');

  // カスタマーページ
  await page.getByRole('link', { name: 'Customers' }).click();

  await page.getByRole('button', { name: 'Sign Out' }).click();
  await expect(page.locator('h1')).toContainText('Please log in to continue.');  
});