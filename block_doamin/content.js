// Get the current URL
const currentUrl = window.location.href;

// Retrieve the list of blocked domains from storage
chrome.storage.sync.get('blockedDomains', function(data) {
  const blockedDomains = data.blockedDomains || [];

  // Check if the current URL matches any blocked domain
  if (blockedDomains.some(domain => currentUrl.includes(domain))) {
    // Redirect the user or modify the page as desired
    // For example, you can redirect the user to another page or block content
    // Here, we'll redirect to a blank page
    // window.location.href = 'about:blank';
    window.location.href = chrome.runtime.getURL('blocked.html');
  }
});
