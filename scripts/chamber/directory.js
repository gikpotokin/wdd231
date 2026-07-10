/* ==========================================
   directory.js
   Lagos Chamber of Commerce
   WDD231 Chamber Project

   Author: Godswill Moses Ikpotokin
========================================== */

const directory = document.querySelector("#directory");

const gridButton = document.querySelector("#gridView");

const listButton = document.querySelector("#listView");

const menuButton = document.querySelector("#menuButton");

const navigation = document.querySelector("#navigation");


/* ==========================================
   MOBILE NAVIGATION
========================================== */

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


/* ==========================================
   FETCH MEMBERS
========================================== */

const url = "../chamber/data/members.json";

console.log(url)


async function getMembers() {

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw Error("Unable to fetch member data.");

        }

        const members = await response.json();

        displayMembers(members);

    }

    catch (error) {

        console.error(error);

        directory.innerHTML = `

            <div class="empty-directory">

                <h3>Unable to Load Directory</h3>

                <p>

                    Please try again later.

                </p>

            </div>

        `;

    }

}

getMembers();


/* ==========================================
   DISPLAY MEMBERS
========================================== */
function displayMembers(members) {

    directory.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("member-card");

        card.innerHTML = `

            <div class="card-header">

                <h3>${member.name}</h3>

                <p>${member.tagline}</p>

            </div>

            <div class="card-content">

                <div class="card-image">

                    <img
                        src="${member.image}"
                        alt="${member.name}"
                        loading="lazy">

                </div>

                <div class="card-details">

                    <p>

                        <strong>EMAIL:</strong>

                        ${member.email}

                    </p>

                    <p>

                        <strong>PHONE:</strong>

                        ${member.phone}

                    </p>

                    <p>

                        <strong>URL:</strong>

                        <a href="${member.website}" target="_blank">

                            ${member.website.replace(/^https?:\/\//,'' )}

                        </a>

                    </p>

                </div>

            </div>

        `;

        directory.appendChild(card);

    });

}
/* ==========================================
   GRID VIEW
========================================== */

gridButton.addEventListener("click", () => {

    directory.classList.add("grid-view");

    directory.classList.remove("list-view");

    gridButton.classList.add("active");

    listButton.classList.remove("active");

});


/* ==========================================
   LIST VIEW
========================================== */

listButton.addEventListener("click", () => {

    directory.classList.add("list-view");

    directory.classList.remove("grid-view");

    listButton.classList.add("active");

    gridButton.classList.remove("active");

});


/* ==========================================
   FOOTER YEAR
========================================== */

document.querySelector("#year").textContent =
new Date().getFullYear();


/* ==========================================
   LAST MODIFIED
========================================== */

document.querySelector("#lastModified").textContent =
document.lastModified;


/* ==========================================
   DEFAULT VIEW
========================================== */

directory.classList.add("grid-view");