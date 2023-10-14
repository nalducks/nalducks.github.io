// script.js
const navbar = document.querySelector(".navbar");
const menuItems = navbar.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".section");
let isNavbarHidden = false;
let timeoutId;

// Fungsi untuk memunculkan navbar dengan efek transisi dari atas ke bawah
function showNavbar() {
    if (isNavbarHidden) {
        navbar.style.transform = "translateY(0)";
        isNavbarHidden = false;
    }
    setActiveMenuItem();
}

// Fungsi untuk menentukan bagian yang sedang terlihat
function getCurrentSection() {
    let currentSection = null;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <=100 && rect.bottom >= 100) {
            currentSection = section;
        }
    });
    return currentSection;
}

// Fungsi untuk menandai item menu yang aktif
function setActiveMenuItem() {
    const currentSection = getCurrentSection();
    menuItems.forEach((menuItem) => {
        const sectionId = menuItem.getAttribute("href").substring(1);
        if (currentSection && currentSection.id === sectionId) {
            menuItem.classList.add("active");
        } else {
            menuItem.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", showNavbar);
window.addEventListener("load", () => {
    // Menambahkan efek transisi navbar dari atas ke bawah saat halaman dimuat pertama kali
    navbar.style.transition = "transform 2s";
    navbar.style.transform = "translateY(0)";
});




// Fungsi untuk slider img
let currentIndex = 0;
const imageContainers = document.querySelectorAll('.imageCertificate');

function slide(direction) {
  imageContainers[currentIndex].classList.remove('visible');
  
  if (direction === 'left') {
    currentIndex = (currentIndex - 1 + imageContainers.length) % imageContainers.length;
  } else if (direction === 'right') {
    currentIndex = (currentIndex + 1) % imageContainers.length;
  }
  imageContainers[currentIndex].classList.add('visible');
}


// Fungsi Button Dropdown
function showDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.add("show");
    dropdown.classList.remove("close");
}
function closeDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.add("close");
}

