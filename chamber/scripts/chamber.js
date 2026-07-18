
const menuButton = document.querySelector("#menuButton");

const navigation = document.querySelector("#navigation");


if (menuButton) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.classList.toggle("open");

        menuButton.textContent =
            navigation.classList.contains("open")
            ? "✕"
            : "☰";

    });

}



// ============================
// Footer
// ============================

const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}