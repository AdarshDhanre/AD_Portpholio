'use strict';


document.oncontextmenu = function() {
  return false;
};


  // Function to send email using SMTP.js and SweetAlert for feedback
  function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

  // Function to validate the form
function validateForm() {
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  let isValid = true;

  // Validate phone number (10 digits)
  if (!validatePhone(phone)) {
    document.getElementById("phone-error").textContent = "Please enter a valid 10-digit phone number.";
    document.getElementById("phone-error").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("phone-error").textContent = ""; // Clear error
  }

  // Validate email
  if (!validateEmail(email)) {
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
    document.getElementById("email-error").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("email-error").textContent = ""; // Clear error
  }

  return isValid;
}

// Function to validate phone number (10 digits)
function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Event listeners for input fields to display error messages in real-time
const formInputs = document.querySelectorAll("[data-form-input]");
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    validateForm();
  });
}

  // Function to validate phone number (10 digits)
  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  // Function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  var messageBody = "Name: " + userName +
    "<br/> Phone: " + phone +
    "<br/> Email: " + email +
    "<br/> Message: " + message;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "portfolioresponses45@gmail.com", 
    Password: "17A2864F967ED982183357AB6C666175EDBD", 
    To: 'portfolioresponses45@gmail.com',
    From: 'portfolioresponses45@gmail.com', 
    Subject: "New Contact Form Submission",
    Body: messageBody
  }).then(
    message => {
      if (message === 'OK') {
        swal("Success", "Your message has been sent!", "success");
      } else {
        swal("Error", "There was an issue sending your message. Please try again later.", "error");
      }
    }
  );
}

// Function to validate phone number (10 digits)
function validatePhone(phone) {
  // Regular expression to match exactly 10 digits
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

// Function to validate email format
function validateEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// Element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check form validation
    if (form.checkValidity() && validatePhone(phone.value) && validateEmail(email.value)) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
