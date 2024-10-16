const burger = document.querySelector(".burger"),
    headerNav = document.querySelector(".header__nav");

    if(burger) {
        burger.addEventListener("click", ()=> {
            headerNav.classList.toggle("active");
        })
    }