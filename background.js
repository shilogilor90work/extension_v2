// List of sites to block
const blockedSites = [
    "facebook.com",
    "twitter.com",
    "instagram.com"
  ];
  
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      for (let site of blockedSites) {
        if (details.url.includes(site)) {
          return { redirectUrl: chrome.runtime.getURL("blocked.html") };
        }
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  