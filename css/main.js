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
        document.querySelector(".content").classList.remove("animate-col")

    }else{
        document.querySelector(".content").classList.add("animate-col")

    }
}
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
    console.log(txtTooltip)
})
console.log(chartCol.length)