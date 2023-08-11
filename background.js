chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'scrape') {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        function: scrapeFunction,
        args: [{ /* any args you want to pass */ }],
        // use a userGesture to interact with the page if needed
      });
    }
  });
  
  function scrapeFunction(args) {
    // Your scraping logic here
    // Use DOM manipulation or fetch to scrape data from the webpage
    const scrapedData = "Scraped data goes here";
    return scrapedData;
  }
  