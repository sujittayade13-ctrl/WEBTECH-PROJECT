
// Slider 1 → Normal Direction
var swiper1 = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 }
    }
});


// Slider 2 → Reverse Direction
var swiper2 = new Swiper(".product-slider2", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
        reverseDirection: true,  // 🔥 MAIN LINE
        pauseOnMouseEnter: true
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 }
    }
});

var swiper3 = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 }
    }
});




// ================= MENU TOGGLE =================
let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
};

// ================= SEARCH TOGGLE =================
let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");

searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
};


// ================= SEARCH FUNCTION =================
let searchInput = document.querySelector("#search-box");

searchInput.addEventListener("input", () => {
    let filter = searchInput.value.toLowerCase();

    let products = document.querySelectorAll(".products .box");

    products.forEach((product) => {
        let name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(filter)) {
            // product.style.display = "flex";
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// ================= SWIPER =================


// ================= LOGIN FORM =================

let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');

// Toggle login form
loginBtn.onclick = () => {
    loginForm.classList.toggle("active");
};


// ================= LOGIN VALIDATION =================

let loginFormElement = document.querySelector('.login-form');

loginFormElement.addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.querySelector('.login-form input[type="email"]').value.trim();
    let password = document.querySelector('.login-form input[type="password"]').value.trim();

    // Email pattern check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    // SUCCESS LOGIN
    alert("Login Successful ✅");

    // Clear fields
    loginFormElement.reset();

    // Close form
    loginForm.classList.remove("active");
});

document.addEventListener('click', function(e) {
    if (!loginForm.contains(e.target) && !loginBtn.contains(e.target)) {
        loginForm.classList.remove('active');
    }
});


// TOGGLE BUTTONS
let cartBtn = document.querySelector('#cart-btn');
let cart = document.querySelector('.shopping-cart');

cartBtn.onclick = () => {
    cart.classList.toggle('active');
};

// advertisement


// ================= ADD TO CART =================
let cartItems = [];
let total = 0;

let cartContainer = document.querySelector('.shopping-cart');
let totalDisplay = document.querySelector('.total');

document.querySelectorAll('.products .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        let product = button.parentElement;
        let name = product.querySelector('h3').innerText;
        let price = parseInt(product.querySelector('.price').innerText.replace(/[^\d]/g, ''));
        let img = product.querySelector('img').src;

        // Check if item already exists
        let existing = cartItems.find(item => item.name === name);

        if (existing) {
            existing.qty++;
        } else {
            cartItems.push({ name, price, qty: 1, img });
        }

        updateCartUI();
    });
});

function updateCartUI() {
    cartContainer.innerHTML = "";

    total = 0;

    cartItems.forEach((item, index) => {
        total += item.price * item.qty;

        let cartItem = document.createElement('div');
        cartItem.classList.add('box');

        cartItem.innerHTML = `
            <i class="fa-solid fa-trash" data-index="${index}"></i>
            <img src="${item.img}">
            <div class="content">
                <h3>${item.name}</h3>
                <span class="price">₹${item.price}</span>
                <span class="quantity">Qty : ${item.qty}</span>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    totalDisplay.innerText = `Total : ₹${total}`;

    cartContainer.appendChild(totalDisplay);

    let checkoutBtn = document.createElement('a');
    checkoutBtn.href = "#";
    checkoutBtn.classList.add('btn');
    checkoutBtn.innerText = "Checkout";

    cartContainer.appendChild(checkoutBtn);
}

// Show ad after 3 sec
setTimeout(() => {
    document.getElementById("adPopup").classList.add("show");
}, 3000);

// Close ad
function closeAd() {
    document.getElementById("adPopup").classList.remove("show");
}




