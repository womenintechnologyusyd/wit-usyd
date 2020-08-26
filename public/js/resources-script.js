  //////////// text copy
  
  
  var shareIcon = document.getElementsByClassName('share-icon');
  var textToCopy; 
  for (let k = 0; k < shareIcon.length; k ++) {
    shareIcon[k].addEventListener('mouseover', function displayShareModal(event) {
      event.preventDefault();
      var shareLinkButton = document.getElementsByClassName('share-modal-hyperlink')[k];
      textToCopy = shareLinkButton.getAttribute('alt')
    shareLinkButton.addEventListener('click', function collectLink() {
      var dummyCopyText = document.createElement("textarea");
      document.body.appendChild(dummyCopyText);
      dummyCopyText.value = textToCopy;
      dummyCopyText.select();
      document.execCommand("copy");
      document.body.removeChild(dummyCopyText);
  
      document.getElementsByClassName('tooltip')[k].innerHTML = 'Copied!';
      shareLinkButton.addEventListener('mouseleave', function() {
        setTimeout(function() {
          document.getElementsByClassName('tooltip')[k].innerHTML = 'Copy';
        }, 100);
      })
    });
  shareLinkButton.addEventListener("copy", function(event) {
      event.preventDefault();
      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", textToCopy.textContent);
      }
    });
  }, false);
  }