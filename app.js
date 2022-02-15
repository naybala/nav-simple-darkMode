// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () => {

  themeToggler.classList.toggle('active');

  if (themeToggler.classList.contains('active')) {
    document.body.classList.add('active');
    document.img.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }

}





const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

  links.classList.toggle("show-links");
});
