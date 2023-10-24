document.addEventListener("DOMContentLoaded", function() {

const menuButton = document.getElementById("menuButton");
        const menuList = document.getElementById("menuList");
        const menuLinks = document.querySelectorAll(".nav-item-dialog");

        menuButton.addEventListener("click", () => {
          menuList.classList.toggle("active");
        });

        menuLinks.forEach((link) => {
          link.addEventListener("click", () => {
            menuList.classList.remove("active");
          });
        });
});