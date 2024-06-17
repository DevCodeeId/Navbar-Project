const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const Menu1 = document.querySelector("nav ul li a.menu1-link");
const areaSatu = document.querySelector(".area-satu");
const Menu2 = document.querySelector("nav ul li a.menu2-link");
const areaDua = document.querySelector(".area-dua");
const clearElements = document.querySelectorAll(".clear");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

Menu1.addEventListener("mouseover", function () {
    areaSatu.style.transform = "translateY(0)";
    areaDua.style.transform = "translateY(-600px)";
  });

  Menu2.addEventListener("mouseover", function () {
    areaDua.style.transform = "translateY(0)";
    areaSatu.style.transform = "translateY(-600px)";
  });

  document.addEventListener('DOMContentLoaded', function () {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
        clearElements.forEach((clearElement) => {
            clearElement.addEventListener("mouseleave", function () {
                areaSatu.style.transform = "translateY(-600px)";
                areaDua.style.transform = "translateY(-600px)";
            });
        });
    } else {
        clearElements.forEach((clearElement) => {
            clearElement.textContent = "BACK";
            clearElement.style.color = "white";
            clearElement.style.justifyContent = "center";
            clearElement.style.display = "flex";
            clearElement.style.alignItems = "center";
            clearElement.style.fontSize = "15px";
            clearElement.style.fontWeight = "bold";
            clearElement.addEventListener("click", function () {
                areaSatu.style.transform = "translateY(-600px)";
                areaDua.style.transform = "translateY(-600px)";
            });
        });
    }
});
