chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'scrape') {
      const scrapedData = scrapeFunction();
      sendResponse({ data: scrapedData });
    }
  });
  
  function scrapeFunction() {
    // Your scraping logic here
    // Use DOM manipulation or fetch to scrape data from the webpage
    const scrapedData = "Scraped data goes here";
    return scrapedData;
  }
  