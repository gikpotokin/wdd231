const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
    menuButton.setAttribute("aria-expanded", isOpen);
});