//Form Shrinkage
var form = document.getElementById('sign-up-form');

function resize() {
    if (screen825.matches) {
    form.setAttribute('width', '90%');
    form.style.padding = '0';
    } else {
    form.setAttribute('width', '640');
    }
}

var screen825 = window.matchMedia("(max-width: 825px)")
resize(screen825);
screen825.addListener(resize);
