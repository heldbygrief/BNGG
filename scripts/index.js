console.log("Loaded index.js");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded and parsed.");

    const otherGamesButton = document.getElementById("otherGamesButton");
    const themeButton = document.getElementById("themeButton");
    const lightIcon = document.getElementById("lightIcon");
    const darkIcon = document.getElementById("darkIcon");

    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        if (theme === "dark") {
            lightIcon.classList.add("hidden");
            darkIcon.classList.remove("hidden");
        } else {
            lightIcon.classList.remove("hidden");
            darkIcon.classList.add("hidden");
        }
        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme("dark");
    }

    themeButton.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });

    otherGamesButton.addEventListener("click", () => {
        const url = "/games/";
        window.open(url, "_blank").focus();
    });
});
