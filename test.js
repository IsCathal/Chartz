const { chromium } = require('playwright');

(async () => {
  // Launch browser with video recording settings
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/' // Directory to store videos
    }
  });
  const page = await context.newPage();

  try {
    // Navigate to the localhost URL
    await page.goto('http://localhost:3000/');
    // Wait for 10 seconds
    await page.waitForTimeout(10000);
    console.log("Video recording completed");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    // Close the page and browser
    await page.close();
    await browser.close();
  }
})();
