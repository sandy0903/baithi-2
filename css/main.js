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

window.addEventListener("scroll",function(){
    if(window.pageYOffset>400){
        tableChart.classList.add("scale-up-ver-bottom")
    }else{
        tableChart.classList.remove("scale-up-ver-bottom")
    }

    
})