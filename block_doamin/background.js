chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get('blockedDomains', function(data) {
      if (!data.blockedDomains) {
        chrome.storage.sync.set({ 'blockedDomains': [] });
      }
    });
  });
  