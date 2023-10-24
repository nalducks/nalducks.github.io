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

document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu a");
    var sections = document.querySelectorAll("section");
    var scrollOffsets = [];

    sections.forEach(function(section) {
        scrollOffsets.push(section.offsetTop);
    });

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        for (var i = 0; i < scrollOffsets.length; i++) {
            if (scrollPosition >= scrollOffsets[i] && (i === scrollOffsets.length - 1 || scrollPosition < scrollOffsets[i + 1])) {
                menuItems.forEach(function(item) {
                    item.classList.remove("active");
                });
                menuItems[i].classList.add("active");
            }
        }
    });
});
