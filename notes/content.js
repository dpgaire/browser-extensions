chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'showCopyIcon') {
      showCopyIcon(request.selectedText);
    }
  });
  
  function showCopyIcon(selectedText) {
    const selectedContentDiv = document.createElement('div');
    selectedContentDiv.id = 'selectedContent';
    selectedContentDiv.innerHTML = '';
  
    const selectedTextParagraph = document.createElement('p');
    selectedTextParagraph.textContent = selectedText;
  
    const copyIcon = document.createElement('span');
    copyIcon.classList.add('copy-icon');
    copyIcon.textContent = '📋';
    copyIcon.addEventListener('click', function () {
      copyToClipboard(selectedText);
      alert('Text copied to clipboard!');
    });
  
    selectedTextParagraph.appendChild(copyIcon);
    selectedContentDiv.appendChild(selectedTextParagraph);
    
    // Remove any existing selectedContent element
    const existingSelectedContent = document.getElementById('selectedContent');
    if (existingSelectedContent) {
      existingSelectedContent.remove();
    }
  
    // Append the selectedContentDiv to the body
    document.body.appendChild(selectedContentDiv);
  }
  
  function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
  