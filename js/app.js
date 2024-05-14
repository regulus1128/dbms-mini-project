// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML =
  //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//   },
// });

// Animations
ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// const AddToCart = document.querySelectorAll(".add_to_cart");

// AddToCart.forEach((button) => {
//   button.addEventListener("click", () => {
//     const id = button.getAttribute("data-id");
//     const title = button.getAttribute("data-title");
//     const image = button.getAttribute("data-image");
//     const price = button.getAttribute("data-price");

//     const cartItem = { id, title, image, price };
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(cartItem);
//     localStorage.setItem("cart", JSON.stringify(cart));
//   });
// });


const adoptButtons = document.querySelectorAll('.adopt_btn');

function confirmOrder(event){
  const choice = confirm("Confirm Order?");

  if (choice) {
    console.log(event.target.parentElement.querySelector('h3.card_title').textContent);
    alert("Booked 🐶!"); // Action for OK button


    let targetElement = event.target.parentElement.parentElement;
    console.log(targetElement);
    // targetElement.style.border="2px solid greenyellow";
     event.target.disabled = true;
    targetElement.style.opacity= "0.3";
  } 

}

adoptButtons.forEach(button => {
  button.addEventListener('click',(e) => confirmOrder(e));  
 
});

const payButtons = document.querySelectorAll('.pay-btn');

payButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Mark item as unavailable (logic depends on your setup)
    const card = this.closest('.card'); // Get the closest ancestor card
    card.classList.add('unavailable');
    card.querySelector('.adopt_btn').textContent = 'Sold Out';
    card.querySelector('.adopt_btn').disabled = true; // Disable button

    // Additional steps for payment processing (not included here)
  });
});

const cancelButtons = document.querySelectorAll('.cancel-btn');

cancelButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Close the card if needed (logic depends on your setup)
    const cardDetails = this.closest('.card-details');
    cardDetails.classList.remove('flipped');
  });
})
