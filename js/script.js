

var hamburger = document.getElementById("hamburger");
var siteNav = document.getElementById("site-nav");


hamburger.addEventListener('click', () => {
  siteNav.classList.toggle('show');


})




// // data
// var menuOpen = false;

// // functions
// function toggleMenu() {
//   console.log("We got clicked.")
//   // if the menu is not showing...
//   if (!menuOpen) {
//     // show it
//     siteNav.classList.add("show");
//     menuOpen = true;
//   } else {
//     // otherwise...
//     // hide it
//     siteNav.classList.add("hide");
//     menuOpen = false;
//   }
    

// }

// user interactions
// a user clicks the menu button
// menuButton.addEventListener("click", toggleMenu)