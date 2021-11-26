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