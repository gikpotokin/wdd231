/*
    join.js
    Lagos Chamber of Commerce
    WDD231 Chamber Project

    Handles membership form timestamp and membership level modals.
*/


const timestampField = document.querySelector("#timestamp");

if (timestampField) {

    timestampField.value = new Date().toISOString();

}


const modalButtons = document.querySelectorAll(".modal-link");


modalButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;

        const modal = document.querySelector(`#${modalId}`);

        if (modal) {

            modal.showModal();

        }

    });

});



const closeButtons = document.querySelectorAll(".close-modal");


closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const modal = button.closest("dialog");

        if (modal) {

            modal.close();

        }

    });

});

const modals = document.querySelectorAll("dialog");


modals.forEach((modal) => {

    modal.addEventListener("click", (event) => {

        const rect = modal.getBoundingClientRect();

        const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (clickedOutside) {

            modal.close();

        }

    });

});