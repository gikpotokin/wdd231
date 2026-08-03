import { setupNavigation } from "./modules/navigation.js";


setupNavigation();


const challengeForm =
    document.querySelector(".challenge-form");


if (challengeForm) {

    challengeForm.addEventListener(
        "submit",
        () => {

            const submitButton =
                challengeForm.querySelector(
                    "button[type='submit']"
                );

            submitButton.textContent =
                "Submitting...";

        }
    );

}