const { chromium } = require('playwright');

(async () => {
  // Launch browser with video recording settings
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/', // Directory to store videos
      size: { width: 1280, height: 720 } // Set video size to 1280x720 (HD)
      // size: { width: 3840, height: 2160 } // Set video size to 3840x2160 (4K)

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
