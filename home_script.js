const navList = document.querySelector("nav ul");
const menuIcon = document.getElementById("menu-icon");


const showMenu = () => {
    navList.classList.toggle("mobile-nav-show");
    const menuIcon = document.getElementById("menu-icon");

    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu close on nav link click
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("mobile-nav-show");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        });
    });

 //    Placeholder behavior
    const textInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const placeholder = document.querySelector('.placeholder');
    const placeholderEmail = document.querySelector('.placeholder-email');

    if (textInput) {
        textInput.addEventListener("focus", () => {
            placeholder.style.display = "none";
        });

        textInput.addEventListener("blur", () => {
            if (textInput.value.trim() === "") {
                placeholder.style.display = "flex";
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener("focus", () => {
            placeholderEmail.style.display = "none";
        });

        emailInput.addEventListener("blur", () => {
            if (emailInput.value.trim() === "") {
                placeholderEmail.style.display = "flex";
            }
        });
    }
    
});

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slides.length > 0){
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 15000);
}

showSlides();

// Contact api
const form = document.getElementById("contact-form");
const alertBox = document.getElementById("alert");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/api/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alertBox.innerText = "Message sent successfully!";
            alertBox.style.display = "block";
            form.reset();
        } else {
            alertBox.innerText = "Failed to send message.";
            alertBox.style.display = "block";
        }
    } catch (error) {
        alertBox.innerText = "Server error. Try again later.";
        alertBox.style.display = "block";
    }
});
