function hideAdsAndContent() {
    const adSelectors = [
      'img[src$=".gif"]', // GIF images
      '.ad', // Generic ad class
      '.ad-banner',
      '#popup', // Assuming popup elements are ads
      '.ad-container',
      '.ytd-display-ad-renderer',
      '.video-ad',
      '.native-ad',
      '.interstitial-ad',
      '.sponsored-content',
      '.affiliate-link',
      '.social-media-ad',
      '.retargeting-ad',
      '.email-marketing',
      '.okam-each-ad',
      '#adverts10611',
      '#ad-inline-playback-metadata',
      'Advertisement'
    ];
  
    adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => {
        ad.style.display = 'none'; // Hide the ad element
      });
    });
  }
  
  // Run the function when the page loads
  window.addEventListener('load', hideAdsAndContent);
  