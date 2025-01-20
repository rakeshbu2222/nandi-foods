document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-form");
  const searchButton = document.querySelector("#search");
  const shoppingCart = document.querySelector(".shopping-cart");
  const cartButton = document.querySelector("#cart");
  const userButton = document.querySelector("#user");
  const userLoginForm = document.querySelector("#user-login-form");
  const closeLoginFormButton = document.querySelector("#close-login-form");
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  // Utility function to close all open elements
  const closeAll = () => {
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    userLoginForm.classList.remove("active");
    navbar.classList.remove("active");
  };

  // Toggle visibility of a specific element and close others
  const toggleElement = (element) => {
    const isActive = element.classList.contains("active");
    closeAll(); // Close all first
    if (!isActive) {
      element.classList.add("active"); // Open if it wasn't active
    }
  };

  // Toggle search form visibility
  searchButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleElement(searchForm);
  });

  // Toggle shopping cart visibility
  cartButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleElement(shoppingCart);
  });

  // Toggle user login form visibility
  userButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleElement(userLoginForm);
  });

  // Close user login form using the close button
  closeLoginFormButton.addEventListener("click", (event) => {
    event.stopPropagation();
    userLoginForm.classList.remove("active");
  });

  // Toggle navbar visibility for mobile view
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleElement(navbar);
  });

  // Close all when clicking outside
  document.addEventListener("click", () => {
    closeAll();
  });

  // Prevent clicks inside specific elements from closing them
  [searchForm, shoppingCart, userLoginForm, navbar].forEach((element) => {
    element.addEventListener("click", (event) => event.stopPropagation());
  });
});
