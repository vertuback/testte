import { expect, test } from '@playwright/test';
const { PageObjectManager } = require("../../page_objects/PageObjectManager");

  test("test 1" , async ({ page }) => {
    let response = await page.goto("https://www.google.com/");
    //expect that page response code isn't 404
    expect(response.status()).not.toBe(404);
  });
  test("test 2" , async ({ page }) => {
    console.log(process.env.BASE_URL_WITH_AUTH);
    await page.goto(process.env.BASE_URL_WITH_AUTH);
    let response = await page.goto("https://www.google.com/");
    //expect that page response code isn't 404
    expect(response.status()).not.toBe(404);
  });
  test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const title = page.locator('.App-link');
    await expect(title).toContainText('Playwright');
  });

