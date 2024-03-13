chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
      title: "Save to Note Saver",
      contexts: ["selection"],
      id: "saveToNoteSaver"
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "saveToNoteSaver") {
      const selectedText = info.selectionText;
      saveToNotes(selectedText);
      alert("Text saved to Note Saver!");
    }
  });
  
  function saveToNotes(text) {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    savedNotes.unshift(text);
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
  }
  