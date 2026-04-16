//  const hamburger = document.querySelector(".hamburger");
//  const navMenu = document.querySelector("nav ul");
//  hamburger.addEventListener("click", () => {
//      navMenu.classList.toggle("active");
//  });

   const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");  // animate icon
        navMenu.classList.toggle("active");    // show menu
    });