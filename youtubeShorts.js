const { chromium } = require('playwright');

(async () => {
  // Launch browser with video recording settings
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 }, // Set viewport size to 1080x1920
    recordVideo: {
      dir: 'videos/', // Directory to store videos
      size: { width: 1080, height: 1920 } // Set video size to 1080x1920 for TikTok
    },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' // Set a generic user agent
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
