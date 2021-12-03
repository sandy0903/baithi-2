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


document.querySelector("#discount-mem").onclick=function(){
  document.querySelector("#popUp-1").style.display="block";
  document.querySelector("#overlay-1").classList.add("overlay-1")
    document.querySelector("#popUp-1").classList.add("slide-bottom")
}
document.querySelectorAll(".out-popup").forEach(btn=>btn.onclick=function(){
  document.querySelector("#popUp-1").style.display="none";
  document.querySelector("#overlay-1").classList.remove("overlay-1")
    document.querySelector("#popUp-1").classList.remove("slide-bottom")
})


document.querySelector(".hamburger-menu").onclick=function(){
  if( this.classList.contains("animate")){
      this.classList.remove("animate")
      document.querySelector(".content").classList.remove("animate-col")
  }else{
      this.classList.add("animate");
      document.querySelector(".user").classList.add("hidden")
      document.querySelector(".content").classList.add("animate-col")
  }
  
}