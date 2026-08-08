import { setupNavigation } from "./modules/navigation.js";
import { setupStorage } from "./modules/storage.js";


import featuredCourses from "../data/featured-courses.js";
import aiKnowledge from "../data/ai-knowledge.js";

import technologyAliases from "../data/technology.js";

function displayFeaturedCourses() {

    const courseContainer =
        document.querySelector("#featured-courses");

    if (!courseContainer) {
        return;
    }

    courseContainer.innerHTML =
        featuredCourses.map(course => {

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


function escapeHTML(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function detectTechnology(question) {

    const normalized =
        question.toLowerCase();

    const technologies =
        Object.keys(technologyAliases)
            .sort((a, b) => b.length - a.length);

    for (const technology of technologies) {

        if (
            normalized.includes(
                technology
            )
        ) {

            return technologyAliases[
                technology
            ];
        }
    }

    return null;
}


function detectQuestionType(question) {

    const normalized =
        question
            .toLowerCase()
            .trim();


    if (
        /^(what|whats|what's|define|explain)\b/
            .test(normalized)
    ) {
        return "what";
    }


    if (
        /^(why|why should|why do|why use)\b/
            .test(normalized)
    ) {
        return "why";
    }


    if (
        /^(how|how do|how can|how does|how to)\b/
            .test(normalized)
    ) {
        return "how";
    }


    return "general";
}


function generateAIResponse(question) {

    const technology =
        detectTechnology(question);

    const questionType =
        detectQuestionType(question);


    if (technology) {

        const knowledge =
            aiKnowledge[technology];


        if (questionType === "what") {

            return {

                title:
                    `Understanding ${knowledge.name}`,

                content: `
                    <p class ="ai-knowledge">
                        ${knowledge.what}
                    </p>

                    <h4>In simple terms</h4>

                    <p class ="ai-knowledge">
                        Think of ${knowledge.name}
                        as a tool that helps developers
                        solve specific problems when
                        building software.
                    </p>

                    <h4>Example</h4>

                    <pre><code>${escapeHTML(
                        knowledge.example.trim()
                    )}</code></pre>

                    <div class="ai-tip">
                        <strong>💡 CodeHouse Tip</strong>
                        <p class ="ai-knowledge">
                            ${knowledge.tip}
                        </p>
                    </div>
                `
            };
        }


        if (questionType === "why") {

            return {

                title:
                    `Why developers use ${knowledge.name}`,

                content: `
                    <p class ="ai-knowledge">
                        ${knowledge.why}
                    </p>

                    <h4>Why does this matter?</h4>

                    <p class ="ai-knowledge">
                        Learning ${knowledge.name}
                        gives you another tool in your
                        software-development toolbox.
                        The best technology depends on
                        the problem you are trying to solve.
                    </p>

                    <h4>Think like a developer</h4>

                    <ul>
                        <li>
                            What problem does it solve?
                        </li>

                        <li>
                            What type of application
                            can I build with it?
                        </li>

                        <li>
                            What other technologies
                            work well with it?
                        </li>
                    </ul>

                    <div class="ai-tip">
                        <strong>💡 CodeHouse Tip</strong>
                        <p>
                            ${knowledge.tip}
                        </p>
                    </div>
                `
            };
        }


        if (questionType === "how") {

            return {

                title:
                    `Getting started with ${knowledge.name}`,

                content: `
                    <p class ="ai-knowledge">
                        ${knowledge.how}
                    </p>

                    <h4>A simple example</h4>

                    <pre><code>${escapeHTML(
                        knowledge.example.trim()
                    )}</code></pre>

                    <h4>Recommended learning path</h4>

                    <ol>
                        <li>
                            Understand the basic syntax.
                        </li>

                        <li>
                            Build a very small project.
                        </li>

                        <li>
                            Practice by changing the code.
                        </li>

                        <li>
                            Learn how to debug errors.
                        </li>

                        <li>
                            Build a larger project.
                        </li>
                    </ol>

                    <div class="ai-tip">
                        <strong>🚀 CodeHouse Challenge</strong>
                        <p class ="ai-knowledge">
                            Don't just read the example.
                            Change something in it and
                            see what happens. That is how
                            programmers turn knowledge
                            into skill.
                        </p>
                    </div>
                `
            };
        }



        return {

            title:
                `Let's explore ${knowledge.name}`,

            content: `
                <p class ="ai-knowledge">
                    I can help you learn
                    <strong>${knowledge.name}</strong>.
                </p>

                <p class ="ai-knowledge">
                    Here are some questions you can ask me:
                </p>

                <ul>
                    <li>
                        What is ${knowledge.name}?
                    </li>

                    <li>
                        Why should I learn ${knowledge.name}?
                    </li>

                    <li>
                        How do I get started with
                        ${knowledge.name}?
                    </li>

                    <li>
                        Show me an example.
                    </li>

                    <li>
                        Give me a ${knowledge.name}
                        project to practice.
                    </li>
                </ul>
            `
        };
    }


    return {

        title:
            "Let's solve it together",

        content: `
            <p>
                That's an interesting programming
                question. Let's approach it like a
                software engineer.
            </p>

            <h4>Try being more specific</h4>

            <p>
                Tell me the programming language,
                framework, or technology you are working
                with.
            </p>

            <p>
                For example:
            </p>

            <ul>
                <li>
                    What is Python?
                </li>

                <li>
                    Why should I learn JavaScript?
                </li>

                <li>
                    How does CSS Flexbox work?
                </li>

                <li>
                    How do I create a React component?
                </li>

                <li>
                    What is Django?
                </li>
            </ul>

            <div class="ai-tip">
                <strong>🤖 CodeHouse AI</strong>
                <p>
                    Ask me a "what", "why", or "how"
                    question and I'll break the concept
                    down step by step.
                </p>
            </div>
        `
    };
}


function addUserMessage(
    chatWindow,
    question
) {

    const message =
        document.createElement("article");

    message.className =
        "chat-message user-message";


    message.innerHTML = `
        <div class="message-content">

            <div class="message-label">
                You
            </div>

            <p class="chat-question">
                ${escapeHTML(question)}
            </p>

        </div>
    `;


    chatWindow.appendChild(message);

    scrollChatToBottom(chatWindow);
}


function showTypingIndicator(chatWindow) {

    const typing =
        document.createElement("article");

    typing.className =
        "chat-message ai-message typing-message";

    typing.innerHTML = `

        <div class="chat-avatar">
            AI
        </div>

        <div class="message-content">

            <div class="message-label">
                CodeHouse AI
            </div>

            <div class="typing-indicator">

                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>
    `;


    chatWindow.appendChild(typing);

    scrollChatToBottom(chatWindow);

    return typing;
}


function addAIMessage(
    chatWindow,
    response
) {

    const message =
        document.createElement("article");

    message.className =
        "chat-message ai-message";


    message.innerHTML = `

        <div class="chat-avatar">
            AI
        </div>

        <div class="message-content">

            <div class="message-label">
                CodeHouse AI
            </div>

            <div class="chat-answer">

                <h3>
                    ${response.title}
                </h3>

                ${response.content}

            </div>

        </div>
    `;


    chatWindow.appendChild(message);

    scrollChatToBottom(chatWindow);
}


function scrollChatToBottom(chatWindow) {

    requestAnimationFrame(() => {

        chatWindow.scrollTo({
            top: chatWindow.scrollHeight,
            behavior: "smooth"
        });

    });
}


function addWelcomeMessage(chatWindow) {

    const message =
        document.createElement("article");

    message.className =
        "chat-message ai-message";


    message.innerHTML = `

        <div class="chat-avatar">
            AI
        </div>

        <div class="message-content">

            <div class="message-label">
                CodeHouse AI
            </div>

            <div class="chat-answer">

                <h3>
                    👋 Welcome to CodeHouse AI
                </h3>

                <p class ="ai-knowledge">
                    I'm your programming learning
                    assistant.
                </p>

                <p class ="ai-knowledge">
                    Ask me a question beginning with
                    <strong>what</strong>,
                    <strong>why</strong>, or
                    <strong>how</strong> about a
                    programming technology.
                </p>

                <div class="ai-example">

                    <strong>Try asking:</strong>

                    <ul>

                        <li>
                            What is Python?
                        </li>

                        <li>
                            Why should I learn JavaScript?
                        </li>

                        <li>
                            How does CSS work?
                        </li>

                        <li>
                            How do I create a React component?
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    `;


    chatWindow.appendChild(message);
}

function setupAIAssistant() {

    const aiForm =
        document.querySelector("#ai-form");

    const questionInput =
        document.querySelector("#ai-question");

    const chatWindow =
        document.querySelector("#chat-window");


    if (
        !aiForm ||
        !questionInput ||
        !chatWindow
    ) {
        return;
    }



    chatWindow.style.overflowY = "auto";
    chatWindow.style.overflowX = "hidden";


    if (!chatWindow.children.length) {

        addWelcomeMessage(
            chatWindow
        );
    }


    aiForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const question =
                questionInput.value.trim();


            if (!question) {

                questionInput.focus();

                return;
            }



            addUserMessage(
                chatWindow,
                question
            );


            questionInput.value = "";

            questionInput.focus();


            const typing =
                showTypingIndicator(
                    chatWindow
                );


            await new Promise(
                resolve =>
                    setTimeout(
                        resolve,
                        650
                    )
            );


            typing.remove();


            const response =
                generateAIResponse(
                    question
                );


            addAIMessage(
                chatWindow,
                response
            );

        }
    );


    questionInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                aiForm.requestSubmit();
            }

        }
    );
}


function setupEnterpriseAnnouncement() {

    const announcement =
        document.querySelector(
            ".enterprise-announcement"
        );

    const footer =
        document.querySelector(
            ".site-footer"
        );


    if (
        !announcement ||
        !footer
    ) {
        return;
    }


    const footerObserver =
        new IntersectionObserver(
            (entries) => {

                const entry =
                    entries[0];


                if (
                    entry.isIntersecting
                ) {

                    announcement.classList.add(
                        "announcement-hidden"
                    );

                } else {

                    announcement.classList.remove(
                        "announcement-hidden"
                    );

                }

            },
            {
                threshold: 0
            }
        );


    footerObserver.observe(
        footer
    );
}




document.addEventListener(
    "DOMContentLoaded",
    () => {

        displayFeaturedCourses();

        setupNavigation();

        setupStorage();

        setupAIAssistant();
        setupEnterpriseAnnouncement();


    }
);
