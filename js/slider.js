var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("img-slider");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      dots[i].classList.remove("active-dot");
      dots[i].classList.remove("scale-up-hor-left")
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    dots[myIndex-1].classList.add("active-dot");
    dots[myIndex-1].classList.add("scale-up-hor-left")
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }



