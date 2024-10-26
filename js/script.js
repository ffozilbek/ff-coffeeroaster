const burger = document.querySelector(".burger"),
  headerNav = document.querySelector(".header__nav");

if (burger) {
  burger.addEventListener("click", () => {
    headerNav.classList.toggle("active");
  });
}

const elsMenuList = document.querySelectorAll(".faq__menu-item-link"),
  elsTabMenuContent = document.querySelectorAll(".faq__tab-cards"),
  elsTabMenuTitle = document.querySelectorAll(".faq__tab-title");


// IF CLICK LEFT SIDE MENU BAR
elsMenuList.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    // LEFT SIDE MENU ACTIVE
    elsMenuList.forEach((tab) => {
      tab.classList.remove("active");
    });
    el.classList.add("active");

    // RIGHT SIDE MENU ACTIVE
    const menuItemIndex = el.dataset.index;
    elsTabMenuContent.forEach((menuContent) => {
      menuContent.classList.remove("active");
    });
    elsTabMenuContent[menuItemIndex].classList.add("active");
  });
});


// IF CLICK RIGHT SIDE MENU BAR
elsTabMenuTitle.forEach((el) => {
  el.addEventListener("click", () => {
    const menuItemIndex = el.dataset.titleIndex;

    // LEFT SIDE MENU ACTIVE
    elsMenuList.forEach((tab) => {
        tab.classList.remove("active");
      });
      elsMenuList[menuItemIndex].classList.add("active");

    // RIGHT SIDE MENU ACTIVE
    elsTabMenuContent.forEach((menuContent) => {
      menuContent.classList.remove("active");
    });
    elsTabMenuContent[menuItemIndex].classList.add("active");
  });
});
