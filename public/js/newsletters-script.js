// let modalShowing = false;
// const modalWindow = document.getElementById('modal-window');
// const modal = document.getElementById('modal');
// const home = document.getElementById('home');
// var newsletter = document.getElementsByClassName('newsletter');
// for (let i = 0; i < newsletter.length; i ++) {
// newsletter[i].addEventListener('click', function displayNewsletterModal() {

//     switch(i) {
//         case 0:
//             modalWindow.setAttribute('src', '../public/assets/newsletters/w5.pdf');
//           // code block
//           break;
//         case 1:
//             modalWindow.setAttribute('src', '../public/assets/newsletters/w4.pdf');
//           // code block
//           break;
//         case 2:
//           modalWindow.setAttribute('src', '../public/assets/newsletters/w3.pdf');
//             // code block
//           break;
//         case 3:
//           modalWindow.setAttribute('src', '../public/assets/newsletters/w2.pdf');
//             // code block
//           break;
//         case 4:
//           modalWindow.setAttribute('src', '../public/assets/newsletters/w1.pdf');
//             // code block
//           break;
//         default:
//           // code block
//           modalWindow.setAttribute('src', '');
//       }

//     modal.style.display = "flex";
//     home.style.overflow = "hidden";

//     modalShowing = true;

//     event.stopPropagation();
//     if (modalShowing == true) {
//     document.addEventListener('click', function exitModal(evt) {

//         var targetElement = evt.target;

//         if (targetElement == modalWindow) {

//         } else {
//             modalWindow.setAttribute('src', '');
//             modal.style.display = "none";
//             home.style.overflow = "auto";

//             modalShowing = false;
//         }
//     });
// }

// });
// }

//////////// text copy


var shareIcon = document.getElementsByClassName('share-icon');
var textToCopy; 
for (let k = 0; k < shareIcon.length; k ++) {
  shareIcon[k].addEventListener('mouseover', function displayShareModal(event) {
    event.preventDefault();
    var shareLinkButton = document.getElementsByClassName('share-modal-hyperlink')[k];
    textToCopy = shareLinkButton.getAttribute('alt')
  //   switch(k) {
  //   case 0:
  //     textToCopy = "https://witusyd.com/public/assets/newsletters/w5.pdf";
  //   break;
  //   case 1:
  //    textToCopy = "https://witusyd.com/public/assets/newsletters/w4.pdf";
  //   break;
  //   case 2:
  //     textToCopy = "https://witusyd.com/public/assets/newsletters/w3.pdf";
  //   break;
  //   case 3:
  //      textToCopy = "https://witusyd.com/public/assets/newsletters/w2.pdf";
  //   break;
  //   case 4:
  //     textToCopy = "https://witusyd.com/public/assets/newsletters/w1.pdf";
  //   break;
  //   default:
  // }
  
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



