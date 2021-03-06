svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  // весь ваш код c jQuery
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

(function () {

  var filterBtn = document.querySelector('.filter-block__btn');
  var filterTab = document.querySelector('.filter-list');

  if (filterBtn && filterTab) {

    filterBtn.addEventListener('click', function() {
      filterTab.classList.toggle('filter-list--active');
    });
}
})();

(function () {
  var menuBtn = document.querySelector('.main-nav__btn');
  var menu = document.querySelector('.main-nav');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('main-nav--open');
  });
})();


(function () {
  var socialBtn = document.querySelector('.header-social__btn');
  var socialBlock = document.querySelector('.header-social__wrapper');

  socialBtn.addEventListener('click', function () {
    socialBlock.classList.toggle('header-social__icons-active');
  })
})();
