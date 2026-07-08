// ==========================
// DARK / LIGHT MODE
// ==========================

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});
