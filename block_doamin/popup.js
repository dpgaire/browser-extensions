// Display the list of blocked domains in the popup
function displayBlockedDomains() {
  chrome.storage.sync.get('blockedDomains', function(data) {
    const blockedList = document.getElementById('blockedList');
    blockedList.innerHTML = '';

    const blockedDomains = data.blockedDomains || [];
    blockedDomains.forEach(function(domain) {
      const listItem = document.createElement('li');
      listItem.textContent = domain;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', function() {
        // Remove domain from the blocked list when the button is clicked
        const updatedBlockedDomains = blockedDomains.filter(blocked => blocked !== domain);
        chrome.storage.sync.set({ 'blockedDomains': updatedBlockedDomains }, function() {
          // Update the displayed list after removal
          displayBlockedDomains();
        });
      });

      listItem.appendChild(removeBtn);
      blockedList.appendChild(listItem);
    });
  });
}

// Add domain to the blocked list
function addDomain() {
  const domainInput = document.getElementById('domainInput');
  const domain = domainInput.value.trim();

  if (domain !== '') {
    chrome.storage.sync.get('blockedDomains', function(data) {
      const blockedDomains = data.blockedDomains || [];
      blockedDomains.push(domain);

      chrome.storage.sync.set({ 'blockedDomains': blockedDomains }, function() {
        // Update the displayed list after adding
        displayBlockedDomains();
        domainInput.value = ''; // Clear the input field
      });
    });
  }
}

// Event listener for the "Add Domain" button
document.getElementById('addBtn').addEventListener('click', addDomain);

// Display the blocked domains when popup opens
displayBlockedDomains();
