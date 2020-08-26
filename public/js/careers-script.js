  const textToCopy = document.getElementById('copyable');

 textToCopy.onclick = function() {
    document.execCommand("copy");
  }

 textToCopy.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", textToCopy.textContent);
      console.log(event.clipboardData.getData("text"))
      document.getElementsByClassName('tooltip')[0].innerHTML = 'Copied!';
      textToCopy.addEventListener('mouseleave', function() {
        setTimeout(function() {
          document.getElementsByClassName('tooltip')[0].innerHTML = 'Copy';
        }, 100);

      })
    }
  });