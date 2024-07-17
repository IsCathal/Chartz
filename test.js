const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    await page.goto('https://google.com');
    await page.screenshot({ path: 'example.png' });
    console.log("Screenshot taken successfully");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
})();
