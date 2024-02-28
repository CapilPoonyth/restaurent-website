//to again check the menu icon responsiveness
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
});

document.querySelector('#search-icon').addEventListener('click', () => {
  document.querySelector('#search-form').classList.add('active');
});

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('#search-form').classList.remove('active');
});


//swiper
var swiper = new Swiper('.home-slider', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    loop: true,
  },
});

  // Wait for the DOM to be fully loaded The order (website is still construction not)
  document.addEventListener('DOMContentLoaded', () => {
    // Get the "Order Now" button and the construction message element
    const orderButton = document.querySelector('.btn');
    const constructionMessage = document.getElementById('construction-message');

    // Add a click event listener to the "Order Now" button
    orderButton.addEventListener('click', () => {
        // Display the construction message
        constructionMessage.style.display = 'block';
    });
});


