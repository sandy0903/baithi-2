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
    // setTimeout(carousel, 2000); // Change image every 2 seconds
  }
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    
  }
var timer=window.setInterval(()=>carousel(),2000)
document.querySelector("#next-icon").onclick=function(){
  
  window.clearInterval(timer);
 
 

}
document.querySelector("#pre-icon").onclick=function(){
  clearTimeout(carousel);
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
      document.querySelector(".nav-menu").style.display="none"

      document.querySelector(".menu").classList.remove("ham-menu")
      
  }else{
      this.classList.add("animate");
      document.querySelector(".nav-menu").style.display="block"
      
      document.querySelector(".menu").classList.add("ham-menu")
  }
  
}