document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('saveNoteBtn').addEventListener('click', saveNote);
    loadSavedNotes();
  });
  
  function saveNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = document.getElementById('noteInput').value.trim();
    if (noteText) {
      saveNoteToStorage(noteText);
      loadSavedNotes();
      noteInput.value = '';
    } else {
      alert('Please enter a note before saving.');
    }
  }
  
  function loadSavedNotes() {
    const selectedContentDiv = document.getElementById('selectedContent');
    selectedContentDiv.innerHTML = ''; // Clear existing notes
  
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    savedNotes.forEach((noteText, index) => {
      const noteBox = document.createElement('div');
      noteBox.classList.add('note-box');
  
      const noteTextParagraph = document.createElement('code');
      noteTextParagraph.classList.add('note-text');
      noteTextParagraph.textContent = noteText;
  
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
  
      const copyButton = document.createElement('button');
      copyButton.classList.add('copy-button');
      copyButton.textContent = 'Copy';
      copyButton.addEventListener('click', function () {
        copyToClipboard(noteText);
        copyButton.textContent = 'Copied!';
        setTimeout(function () {
          copyButton.textContent = 'Copy';
      }, 2000);
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        deleteNote(index);
        loadSavedNotes();
      });
  
      buttonContainer.appendChild(copyButton);
      buttonContainer.appendChild(deleteButton);
  
      noteBox.appendChild(noteTextParagraph);
      noteBox.appendChild(buttonContainer);
  
      selectedContentDiv.appendChild(noteBox);
    });
  }
  
  function saveNoteToStorage(noteText) {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    savedNotes.unshift(noteText);
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));

  }
  
  function deleteNote(index) {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    savedNotes.splice(index, 1);
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
  }
  
  function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
  