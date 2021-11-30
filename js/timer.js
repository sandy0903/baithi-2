

// futureTimer format:Dec 5, 2021 15:37:25
var timer;
function countdown(futureTime, element){
    var countDownDate = new Date(futureTime).getTime();
    document.querySelectorAll(".live-timetable .live .primary-bg").forEach(item=>item.setAttribute("style", "box-shadow:none ; cursor:auto ; opacity:0.8"));

    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        element.innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";
       
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);  
          element.innerHTML="Start now"      ;
          document.querySelectorAll(".live-timetable .live .primary-bg").forEach(item=>item.setAttribute("style", " cursor:pointer ; opacity:1"));
  
        }
        
       
        
      }, 1000);
      
     
     
}
countdown("Nov 30, 2021 15:14:25",document.querySelector(".timer-countdown1"))
countdown("Dec 5, 2021 20:37:25",document.querySelector(".timer-countdown2"))
