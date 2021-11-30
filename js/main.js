// add col
document.querySelector(".hamburger-menu").onclick=function(){
    if( this.classList.contains("animate")){
        this.classList.remove("animate")
        document.querySelector(".content").classList.remove("animate-col")
    }else{
        this.classList.add("animate");
        document.querySelector(".content").classList.add("animate-col")
    }
    
}
document.querySelector(".img-icon").onclick=function(){
    if(document.querySelector(".content").classList.contains("animate-col")){
        this.classList.remove("animate")
        document.querySelector(".content").classList.remove("animate-col")

    }else{
        this.classList.add("animate");
        document.querySelector(".content").classList.add("animate-col")

    }
}
// delete column anywhere
document.querySelector(".overlay").addEventListener("click",function(){
    document.querySelector(".content").classList.remove("animate-col")
})
// active button
var btns=document.querySelectorAll(".btn");
btns.forEach(item=>{
    item.onclick=function(){
        btns.forEach(item=>item.classList.remove("active-btn"))
        item.classList.add("active-btn")
    }
})


var chartCol=document.querySelectorAll("tr");
var txtTooltip=document.querySelector("#text-tooltip")
chartCol.forEach(col=>col.onmouseover=function(){
    txtTooltip.innerHTML=col.querySelector(".tooltip").innerHTML;
    
})
// resize screen add animation 
var userCol=document.querySelector(".user-col")
window.addEventListener("resize",function(){
    if(window.innerWidth<="1093"){
        
        userCol.classList.add("scale-out-hor-right");
       
        
    }else{
        userCol.classList.remove("scale-out-hor-right");
    }
    if(window.innerWidth>"1093"){
        document.querySelector(".content").classList.remove("animate-col")
        
    }
})

// scroll add class
var tableChart=document.querySelector("tbody")
var processBar1=document.getElementById("1")
var processBar2=document.getElementById("2")
var processBar3=document.getElementById("3")
var processBar4=document.getElementById("4")

window.addEventListener("scroll",function(){
    if(window.pageYOffset>500 && window.innerWidth>350){
        tableChart.classList.add("scale-up-ver-bottom")
    }
    if(window.pageYOffset<500 && window.innerWidth>350){
        tableChart.classList.remove("scale-up-ver-bottom")
    }
    if(window.pageYOffset>300 && window.innerWidth<=350){
        tableChart.classList.add("scale-up-ver-bottom")
    }
    if(window.pageYOffset<300 && window.innerWidth<=350){
        tableChart.classList.remove("scale-up-ver-bottom")
    }

    if(window.pageYOffset>813 && window.innerWidth>630){ 
        processBar1.classList.add("load-1")
    }
    if(window.pageYOffset>1090 && window.innerWidth>630){ 
        processBar2.classList.add("load-2")
    }
    if(window.pageYOffset>1313 && window.innerWidth>630){ 
        processBar3.classList.add("load-3")
    }
    if(window.pageYOffset>1513 && window.innerWidth>630){ 
        processBar4.classList.add("load-4")
    }
    if(window.pageYOffset<800 && window.innerWidth>630){
        processBar1.classList.remove("load-1")
        processBar2.classList.remove("load-2")
        processBar3.classList.remove("load-3")
        processBar4.classList.remove("load-4")
    }
    // if((window.pageYOffset && window.pageXOffset<1)
    if(window.pageYOffset>1310 && window.innerWidth<=630 && window.innerWidth>350){
        processBar1.classList.add("load-1")

    }
    if(window.pageYOffset>1614 && window.innerWidth<=630 && window.innerWidth>350){
        processBar2.classList.add("load-2")

    }
    if(window.pageYOffset>1900 && window.innerWidth<=630 && window.innerWidth>350){
        processBar3.classList.add("load-3")

    }
    if(window.pageYOffset>2271 && window.innerWidth<=630 && window.innerWidth>350){
        processBar4.classList.add("load-4")

    }
    if(window.pageYOffset<1389 && window.innerWidth<=630 && window.innerWidth>350){
        processBar1.classList.remove("load-1")
        processBar2.classList.remove("load-2")
        processBar3.classList.remove("load-3")
        processBar4.classList.remove("load-4")
    }
    if(window.pageYOffset>1262 && window.innerWidth<=350){
        processBar1.classList.add("load-1")

    }
    if(window.pageYOffset>1624 && window.innerWidth<=350){
        processBar2.classList.add("load-2")

    }
    if(window.pageYOffset>1970 && window.innerWidth<=350){
        processBar3.classList.add("load-3")

    }
    if(window.pageYOffset>2328 && window.innerWidth<=350){
        processBar4.classList.add("load-4")

    }
    if(window.pageYOffset<1328 && window.innerWidth<=350){
        processBar1.classList.remove("load-1")
        processBar2.classList.remove("load-2")
        processBar3.classList.remove("load-3")
        processBar4.classList.remove("load-4")
    }
    console.log(window.pageYOffset, window.innerWidth)
    

    
})