import { setupNavigation } from "./modules/navigation.js";

const courseContainer =
    document.querySelector("#course-container");

const courseCount =
    document.querySelector("#course-count");

const searchInput =
    document.querySelector("#course-search");

const levelFilter =
    document.querySelector("#level-filter");

const modal =
    document.querySelector("#course-modal");

const modalClose =
    document.querySelector("#modal-close");

const modalTitle =
    document.querySelector("#modal-title");

const modalCategory =
    document.querySelector("#modal-category");

const modalDetails =
    document.querySelector("#modal-details");

const saveCourseButton =
    document.querySelector("#save-course");


let allCourses = [];

let selectedCourse = null;


/* =========================================
   FETCH COURSES
========================================= */

async function getCourses() {

    try {

        const response =
            await fetch("./data/courses.json");

        if (!response.ok) {

            throw new Error(
                `Unable to load courses: ${response.status}`
            );

        }

        const courses =
            await response.json();

        allCourses = courses;

        displayCourses(allCourses);

    } catch (error) {

        console.error(
            "Course loading error:",
            error
        );

        courseContainer.innerHTML = `
            <div class="no-results">

                <h3>
                    Courses Could Not Be Loaded
                </h3>

                <p>
                    We were unable to retrieve the course
                    information. Please try again later.
                </p>

            </div>
        `;

        courseCount.textContent =
            "Unable to load courses.";

    }

}


/* =========================================
   DISPLAY COURSES
========================================= */

function displayCourses(courses) {

    courseCount.textContent =
        `${courses.length} courses available`;


    if (courses.length === 0) {

        courseContainer.innerHTML = `
            <p class="no-results">
                No courses match your search.
            </p>
        `;

        return;
    }


    courseContainer.innerHTML =
        courses.map(course => {

            return `

                <article
                    class="dynamic-course-card"
                >

                    <div
                        class="course-card-icon"
                        aria-hidden="true"
                    >
                        ${getCourseIcon(course.language)}
                    </div>

                    <h3>
                        ${course.title}
                    </h3>

                    <div class="course-meta">

                        <span>
                            ${course.language}
                        </span>

                        <span>
                            ${course.level}
                        </span>

                        <span>
                            ${course.duration}
                        </span>

                    </div>

                    <p>
                        ${course.description}
                    </p>

                    <button
                        class="button button-primary view-course"
                        type="button"
                        data-course-id="${course.id}"
                    >
                        View Details
                    </button>

                </article>

            `;

        }).join("");


    const detailButtons =
        document.querySelectorAll(".view-course");


    detailButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const courseId =
                    Number(
                        button.dataset.courseId
                    );

                openCourseModal(courseId);

            }
        );

    });

}


/* =========================================
   COURSE ICON
========================================= */

function getCourseIcon(language) {

    const icons = {

        "Python": "Py",

        "JavaScript": "JS",

        "HTML & CSS": "HTML",

        "C++": "C++",

        "React": "⚛",

        "Django": "Dj",

        "Git": "Git",

        "TypeScript": "TS",

        "Node.js": "Node",

        "SQL": "SQL",

        "REST API": "API",

        "Java": "Java",

        "React Native": "RN",

        "Cybersecurity": "Cyber",

        "Multiple": "Algo",

        "Cloud": "Cloud",

        "AI": "AI"

    };


    return icons[language] || "Code";

}


/* =========================================
   OPEN MODAL
========================================= */

function openCourseModal(courseId) {

    selectedCourse =
        allCourses.find(
            course => course.id === courseId
        );


    if (!selectedCourse) {
        return;
    }


    modalTitle.textContent =
        selectedCourse.title;

    modalCategory.textContent =
        selectedCourse.category;


    modalDetails.innerHTML = `

        <p>
            <strong>
                Programming Language:
            </strong>

            ${selectedCourse.language}
        </p>

        <p>
            <strong>
                Difficulty:
            </strong>

            ${selectedCourse.level}
        </p>

        <p>
            <strong>
                Duration:
            </strong>

            ${selectedCourse.duration}
        </p>

        <p>
            <strong>
                Category:
            </strong>

            ${selectedCourse.category}
        </p>

        <p>
            <strong>
                About this Course:
            </strong>

            ${selectedCourse.description}
        </p>

    `;


    updateSaveButton();


    modal.showModal();

}


/* =========================================
   CLOSE MODAL
========================================= */

modalClose.addEventListener(
    "click",
    () => {
        modal.close();
    }
);


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

modal.addEventListener(
    "click",
    event => {

        const modalDimensions =
            modal.getBoundingClientRect();

        if (

            event.clientX <
                modalDimensions.left ||

            event.clientX >
                modalDimensions.right ||

            event.clientY <
                modalDimensions.top ||

            event.clientY >
                modalDimensions.bottom

        ) {

            modal.close();

        }

    }
);


/* =========================================
   LOCAL STORAGE
========================================= */

function getSavedCourses() {

    return JSON.parse(
        localStorage.getItem(
            "codehouseSavedCourses"
        )
    ) || [];

}


function saveCurrentCourse() {

    if (!selectedCourse) {
        return;
    }


    const savedCourses =
        getSavedCourses();


    const courseExists =
        savedCourses.some(
            course =>
                course.id === selectedCourse.id
        );


    if (courseExists) {

        const updatedCourses =
            savedCourses.filter(
                course =>
                    course.id !== selectedCourse.id
            );

        localStorage.setItem(
            "codehouseSavedCourses",
            JSON.stringify(updatedCourses)
        );

    } else {

        savedCourses.push(
            selectedCourse
        );

        localStorage.setItem(
            "codehouseSavedCourses",
            JSON.stringify(savedCourses)
        );

    }


    updateSaveButton();

}


function updateSaveButton() {

    if (!selectedCourse) {
        return;
    }


    const savedCourses =
        getSavedCourses();


    const isSaved =
        savedCourses.some(
            course =>
                course.id === selectedCourse.id
        );


    saveCourseButton.textContent =
        isSaved
            ? "Remove Saved Course"
            : "Save Course";

}


saveCourseButton.addEventListener(
    "click",
    saveCurrentCourse
);


/* =========================================
   SEARCH AND FILTER
========================================= */

function filterCourses() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();

    const selectedLevel =
        levelFilter.value;


    const filteredCourses =
        allCourses.filter(course => {

            const matchesSearch =

                course.title
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                course.language
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                course.category
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesLevel =

                selectedLevel === "all"

                ||

                course.level ===
                    selectedLevel;


            return (
                matchesSearch &&
                matchesLevel
            );

        });


    displayCourses(
        filteredCourses
    );

}


searchInput.addEventListener(
    "input",
    filterCourses
);


levelFilter.addEventListener(
    "change",
    filterCourses
);


/* =========================================
   INITIALIZE
========================================= */

setupNavigation();

getCourses();