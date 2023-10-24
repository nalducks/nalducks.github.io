// script.js
const navbar = document.querySelector(".navbar");
const menuItems = navbar.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section");
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


var textToType = "MAINTENANCE TECHNICHIAN & PROGRAMMING";
var textElement = document.getElementById("text");
var index = 0;
var isDeleting = false;

function typeText() {
    if (index < textToType.length && !isDeleting) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Mengatur delay antar karakter (dalam milidetik)
    } else if (index === textToType.length && !isDeleting) {
        isDeleting = true;
        setTimeout(typeText, 2000); // Menunda sebelum penghapusan karakter dimulai
    } else if (index > 0 && isDeleting) {
        textElement.innerHTML = textToType.substring(0, index - 1);
        index--;
        setTimeout(typeText, 50); // Mengatur delay antara penghapusan karakter (dalam milidetik)
    } else if (index === 0 && isDeleting) {
        isDeleting = false;
        setTimeout(typeText, 2000); // Menunda sebelum pengetikan ulang dimulai
    }
}

// Panggil fungsi typeText() dengan penundaan 3 detik (3000 milidetik) setelah halaman dimuat
window.onload = function() {
    setTimeout(typeText, 1800);
};


const navbar = document.getElementById("navbar");
const section2 = document.getElementById("about");

window.addEventListener("scroll", () => {
  if (window.scrollY >= section2.offsetTop) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px"; // Atur tinggi negatif agar navbar menghilang
  }
});

// Sembunyikan navbar saat pertama kali dimuat jika sudah di section pertama
window.addEventListener("load", () => {
  if (window.scrollY < section2.offsetTop) {
    navbar.style.top = "-100px";
  }
});


    function munculkanElemen1() {
      const elemenList = document.querySelectorAll(".elemen1");
      elemenList.forEach(function(elemen) {
        elemen.classList.remove("hidden"); // Hapus class "sembunyi"
        elemen.classList.add("buttonBox"); // Tambah class "muncul"
      });
    }

    function munculkanElemen2() {
      const elemenList = document.querySelectorAll(".elemen2");
      elemenList.forEach(function(elemen) {
        elemen.classList.remove("hidden"); // Hapus class "sembunyi"
        elemen.classList.toggle("social-icons"); // Tambah class "muncul"
      });
    }
    setTimeout(munculkanElemen1, 6000);
    setTimeout(munculkanElemen2, 7000);
