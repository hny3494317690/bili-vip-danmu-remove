chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: 'block' },
        condition: {
          urlFilter: 'b4f545290caf5a90bd9a96c8d4edefd09bca79bc.png',
          resourceTypes: ['image']
        }
      }]
    });
  });
  