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
        setTimeout(typeText, 3000); // Menunda sebelum penghapusan karakter dimulai
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
const section2 = document.getElementById("section2");


window.addEventListener("scroll", () => {
    if (window.scrollY >= section2.offsetTop) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100%"; // Atur tinggi negatif agar navbar menghilang
    }
});

// Sembunyikan navbar saat pertama kali dimuat jika sudah di section pertama
window.addEventListener("load", () => {
    if (window.scrollY < section2.offsetTop) {
        navbar.style.top = "-100%";
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
setTimeout(munculkanElemen2, 7100);

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu a");
    var sections = document.querySelectorAll("section");
    var scrollThreshold = 200; // Atur ambang batas pengguliran di sini (misalnya, 100 pixel)
   
    function activateMenu(index) {
        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });
        menuLinks[index].classList.add("active");
    }

    function updateActiveSection() {
        var scrollPosition = window.scrollY;
        sections.forEach(function(section, index) {
            var topOffset = section.offsetTop;
            var bottomOffset = topOffset + section.offsetHeight;
            if (scrollPosition >= topOffset - scrollThreshold && scrollPosition < bottomOffset - scrollThreshold) {
                activateMenu(index);
            }
        });
    }
    window.addEventListener("scroll", updateActiveSection);
    
    updateActiveSection(); // Aktifkan menu saat halaman dimuat
    menuLinks.forEach(function(menuLink, index) {
        menuLink.addEventListener("click", function(e) {
            e.preventDefault();
            sections[index].scrollIntoView({ behavior: "smooth" });
        });
    });
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

function showDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.add("show");
    dropdown.classList.remove("close");
}

function closeDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.add("close");
}
