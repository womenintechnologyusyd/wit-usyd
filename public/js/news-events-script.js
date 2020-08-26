    //////////// text copy
    
    var shareIcon = document.getElementsByClassName('share-icon');
    var textToCopy; 
    for (let k = 0; k < shareIcon.length; k ++) {
      shareIcon[k].addEventListener('mouseover', function displayShareModal() {
        var shareLinkButton = document.getElementsByClassName('share-modal-hyperlink')[k];
        textToCopy = shareLinkButton.getAttribute('alt');
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
    });
    }


  // //////////////// NEW EVENT SLIDERS ///////////////////

  const eventSlider = document.getElementsByClassName('slider')[0];
  const eventButtons = document.getElementById('slider-buttons');
  var slide = document.getElementsByClassName('slide');
  var slideWidth = slide[0].clientWidth;
  var eventButton;
  for (var i = 1; i < slide.length + 1; i ++) {
    eventButton = document.createElement('a');
    eventButton.setAttribute('class', 'slider-button');
    eventButton.setAttribute('onclick', 'scrollSlide(' + i +');')
    eventButtons.appendChild(eventButton);
}


  function scrollSlide(n) {
    eventSlider.scrollTo( (n-1)*slideWidth, 0)
  }

  window.addEventListener('resize', eventButtonFill, false);
  window.addEventListener('load', eventButtonFill, false);
  //window.addEventListener('load', resizeFunction, false);
  eventSlider.addEventListener('scroll', eventButtonFill, false);

  //var eventButton;
  //var slideNumber;

  function eventButtonFill() {
    var eventButton = document.getElementsByClassName('slider-button');
    var slideWidth = slide[0].clientWidth;
    var slideNumber = Math.round(eventSlider.scrollLeft/slideWidth);
    
    eventButton[slideNumber].style.backgroundColor = '#6d4ff8';
    for (var j = 0; j < slide.length; j ++) {
      if (j !== slideNumber) {
        eventButton[j].style.backgroundColor = '#e7e7e7';
      }
    }
  }

  function resizeFunction(size) {
    var slideImage = document.querySelectorAll('.slider img');

    if (size.matches) { // If media query matches
      //document.getElementsByClassName('mobile')[0].style.display = "show"
      //document.getElementsByClassName('desktop')[0].style.display = "none"
      // for (var l = 0; l < slideImage.length; l ++) {
      // slideImage[l].setAttribute('src', '../public/assets/news-events/events-assets/event-' + (l+1) + '-m.png')
      // }
    } else {
      //document.getElementsByClassName('desktop')[0].style.display = "show"
      //document.getElementsByClassName('mobile')[0].style.display = "none"
      // for(var l = 0; l < slideImage.length; l ++) {
      //   slideImage[l].setAttribute('src', '../public/assets/news-events/events-assets/event-' + (l+1) + '.png')
      // }
    }
  }

  var tablet = window.matchMedia("(max-width: 650px)")
  resizeFunction(tablet) // Call listener function at run time
  tablet.addListener(resizeFunction) // Attach listener function on state changes