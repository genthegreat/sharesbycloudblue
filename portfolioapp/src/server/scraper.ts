import puppeteer from 'puppeteer-core';

export async function scrapeWebsite() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://luse.co.zm'); // Navigate to the website
  await page.click('.buttons-csv'); // Click the CSV button
  await browser.close();
}
