function growDiv(i) {
    var growDiv = document.getElementsByClassName('grow')[i];

    if (growDiv.clientHeight) {
        growDiv.style.height = 0;
      } else {
      let descriptionHeight =  String(document.querySelectorAll(".profile p")[i].clientHeight + document.querySelectorAll(".profile h4")[i].clientHeight + 15);
      growDiv.style.height = descriptionHeight + "px";
      for (let a = 0; a < 13; a ++) {
        if (a != i) {
        var otherDiv = document.getElementsByClassName('grow')[a];
            if (otherDiv.clientHeight) {
                otherDiv.style.height = 0;

            } 
      }
    }
    }
  }
