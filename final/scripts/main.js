import { setupNavigation } from "./modules/navigation.js";
import { setupStorage } from "./modules/storage.js";


/* =========================================
   FEATURED COURSES
========================================= */

const featuredCourses = [
    {
        title: "Python",
        level: "Beginner",
        duration: "8 Weeks",
        icon: "Py"
    },
    {
        title: "JavaScript",
        level: "Beginner",
        duration: "10 Weeks",
        icon: "JS"
    },
    {
        title: "C++",
        level: "Intermediate",
        duration: "10 Weeks",
        icon: "C++"
    },
    {
        title: "Django",
        level: "Intermediate",
        duration: "8 Weeks",
        icon: "Dj"
    },
    {
        title: "React",
        level: "Intermediate",
        duration: "8 Weeks",
        icon: "⚛"
    }
];


/* =========================================
   DISPLAY FEATURED COURSES
========================================= */

function displayFeaturedCourses() {

    const courseContainer =
        document.querySelector("#featured-courses");

    if (!courseContainer) {
        return;
    }

    courseContainer.innerHTML = featuredCourses.map(course => {

        return `
            <article class="course-card">

                <div
                    class="course-icon"
                    aria-hidden="true"
                >
                    ${course.icon}
                </div>

                <h3>
                    ${course.title}
                </h3>

                <p>
                    ${course.level}
                    <br>
                    ${course.duration}
                </p>

                <a href="courses.html">
                    Explore →
                </a>

            </article>
        `;

    }).join("");

}


/* =========================================
   AI ASSISTANT DEMO
========================================= */

function setupAIAssistant() {

    const aiForm =
        document.querySelector("#ai-form");

    const questionInput =
        document.querySelector("#ai-question");

    const chatWindow =
        document.querySelector("#chat-window");

    if (!aiForm || !questionInput || !chatWindow) {
        return;
    }

    aiForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const question =
            questionInput.value.trim();

        if (!question) {
            return;
        }

        const userMessage = document.createElement("div");

        userMessage.className =
            "chat-message user-message";

        userMessage.innerHTML = `
            <p class="chat-question">
                ${question}
            </p>
        `;

        chatWindow.appendChild(userMessage);


        const aiMessage =
            document.createElement("div");

        aiMessage.className =
            "chat-message ai-message";

        aiMessage.innerHTML = `
            <div class="chat-avatar">
                AI
            </div>

            <p class="chat-answer">
                Great question! CodeHouse AI can help
                explain "${question}" step by step.
            </p>
        `;

        chatWindow.appendChild(aiMessage);

        questionInput.value = "";

        chatWindow.scrollTop =
            chatWindow.scrollHeight;

    });

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    displayFeaturedCourses();

    setupNavigation();

    setupStorage();

    setupAIAssistant();

});