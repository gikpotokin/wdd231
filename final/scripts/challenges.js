import { setupNavigation } from "./modules/navigation.js";
import challengeQuestions from "../data/challengeQuestions.js";


function getRandomQuestion(challenge) {

    const questions =
        challengeQuestions[challenge];

    if (!questions || questions.length === 0) {
        return null;
    }

    const randomIndex =
        Math.floor(
            Math.random() * questions.length
        );

    return questions[randomIndex].trim();
}



function displayChallengeQuestion(
    question
) {

    const questionContainer =
        document.querySelector(
            "#challenge-question"
        );

    const questionText =
        document.querySelector(
            "#challenge-question-text"
        );

    if (
        !questionContainer ||
        !questionText
    ) {
        return;
    }


    questionText.textContent =
        question;


    questionContainer.classList.add(
        "question-visible"
    );



    questionContainer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function resetChallengeQuestion() {

    const questionContainer =
        document.querySelector(
            "#challenge-question"
        );

    const questionText =
        document.querySelector(
            "#challenge-question-text"
        );


    if (
        !questionContainer ||
        !questionText
    ) {
        return;
    }


    questionText.textContent =
        "Select a challenge above to receive your question.";


    questionContainer.classList.remove(
        "question-visible"
    );
}


function setupChallengeSelector() {

    const challengeSelect =
        document.querySelector(
            "#challenge-name"
        );


    if (!challengeSelect) {
        return;
    }


    challengeSelect.addEventListener(
        "change",
        () => {

            const selectedChallenge =
                challengeSelect.value;


            if (!selectedChallenge) {

                resetChallengeQuestion();

                return;
            }


            const question =
                getRandomQuestion(
                    selectedChallenge
                );


            if (question) {

                displayChallengeQuestion(
                    question
                );

            }

        }
    );
}


function setupChallengeForm() {

    const challengeForm =
        document.querySelector(
            ".challenge-form"
        );


    if (!challengeForm) {
        return;
    }


    challengeForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const submitButton =
                challengeForm.querySelector(
                    "button[type='submit']"
                );


            const answer =
                document.querySelector(
                    "#answer"
                );


            const challenge =
                document.querySelector(
                    "#challenge-name"
                );


            if (
                !answer ||
                !challenge
            ) {
                return;
            }



            if (!challenge.value) {

                alert(
                    "Please select a challenge first."
                );

                challenge.focus();

                return;
            }



            if (!answer.value.trim()) {

                alert(
                    "Please enter your answer before submitting."
                );

                answer.focus();

                return;
            }


            submitButton.disabled = true;

            submitButton.textContent =
                "Submitting...";

            setTimeout(
                () => {

                    submitButton.textContent =
                        "✓ Challenge Submitted";

                    submitButton.classList.add(
                        "submission-success"
                    );


                    showSubmissionMessage();


                    answer.disabled = true;

                    challenge.disabled = true;

                },
                900
            );

        }
    );
}


function showSubmissionMessage() {

    let message =
        document.querySelector(
            "#submission-message"
        );


    if (!message) {

        message =
            document.createElement(
                "div"
            );

        message.id =
            "submission-message";

        message.className =
            "submission-message";


        const form =
            document.querySelector(
                ".challenge-form"
            );


        if (form) {

            form.appendChild(
                message
            );
        }
    }


    message.innerHTML = `

        <div class="submission-icon">
            ✓
        </div>

        <div>

            <strong>
                Challenge submitted successfully!
            </strong>

            <p>
                Great work! Your answer has been
                recorded for this CodeHouse practice
                challenge.
            </p>

            <p>
                Keep practicing and continue building
                your programming skills.
            </p>

        </div>
    `;


    message.classList.add(
        "show"
    );
}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupChallengeSelector();

        setupChallengeForm();

    }
);