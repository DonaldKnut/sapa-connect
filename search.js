const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-card-container]");
const searchInput = document.querySelector("[data-search]");


let searchResults = [];

searchInput.addEventListener("input", e => {
    const value = e.target.value;
    console.log(searchResults);
})

fetch("https://nigerianfoods.herokuapp.com/api/foods").then(res => res.json()).then(data => {
    searchResults = data.map(place => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = place.name;
        body.textContent = place.body;
        userCardContainer.append(card);
        return { nameOfPlace: place.name, nameOfFood: place.body, element: card }
    });
})
