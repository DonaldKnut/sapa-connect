
// fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then()

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".menu");

menu_btn.addEventListener("click", function(e){
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
})


const header = document.querySelector("header");
const locateBtn = document.querySelector(".locate-btn");
const searchBtn = document.querySelector(".search-btn");



window.addEventListener("scroll", fixNav);

function fixNav(){
    if(window.scrollY > header.offsetHeight + 4){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
}


const btn = document.querySelectorAll(".small-btn");
const slide = document.getElementById("slide");

btn[0].addEventListener("click", function(){
        slide.style.transform = "translateX(0px)";
        for(i=0; i < 2; i++){
                btn[i].classList.remove("active");
        }
        this.classList.add("active");
    })

btn[1].addEventListener("click", function(){
        slide.style.transform = "translateX(-800px)";
        for(i=0; i < 2; i++){
                btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }) 

btn[2].addEventListener("click", function(){
        slide.style.transform = "translateX(-1600px)";
        for(i=0; i < 2; i++){
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }) 