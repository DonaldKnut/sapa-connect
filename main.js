
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

locateBtn.addEventListener("click", function(){
    if(!navigator.geolocation){
        alert("Location Feature is not available")
        return;
    }
    navigator.geolocation.getCurrentPosition(successResult => {
            console.log(successResult);
    }, error => {
        alert("Could not locate you Unfortunately");
    })
})

const cookieStorage =() => {
    getItem: (key) => {
        const cookies = document.cookie.split(";")
                .map(cookie => cookie.split("="))
                .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }));
                return cookies[key];
    }
    setItem: (key, value) => {
        document.cookie = `${key} = ${value}`;
    }
}

const storageType = sessionStorage;
const consentPropertyName = "loggedIn";

const shouldShowPopup = () => !storageType.getItem(consentPropertyName)

const saveToStorage = () => storageType.setItem(consentPropertyName, true)

window.onload = () => {
    const consentPopup =  document.getElementById("consent-popup");
    const acceptBtn =  document.getElementById("accept");

    
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add("hidden");
    }
    
    acceptBtn.addEventListener("click", acceptFn);

    if(shouldShowPopup(storageType)){
        consentPopup.classList.remove("hidden");
    }
}


const search = () => {
    const search = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("user-cards");
    const product = document.querySelectorAll(".card");
    const productName = storeItems.getElementsByTagName("h5");

    for(let i = 0; i < productName.length; i++) {
            let match = product[i].getElementsByClassName("header")[0];
            if(match){
                let textValue = match.textContent || match.innerHTML;
                if(textValue.toUpperCase().indexOf(search) > -1){
                    product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

search();