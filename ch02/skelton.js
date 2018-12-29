const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 800,
  });

  await page.goto('http://www.google.co.jp/');

  await browser.close();
})();
