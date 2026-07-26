/*
    thankyou.js
    Lagos Chamber of Commerce
    WDD231 Chamber Project

    Retrieves the required membership application information
    from the URL query string and displays it on the thank-you page.
*/


const urlParams = new URLSearchParams(window.location.search);


const applicationDetails =
    document.querySelector("#application-details");


const firstName =
    urlParams.get("firstName") || "Not provided";

const lastName =
    urlParams.get("lastName") || "Not provided";

const email =
    urlParams.get("email") || "Not provided";

const phone =
    urlParams.get("phone") || "Not provided";

const organization =
    urlParams.get("organization") || "Not provided";

const timestamp =
    urlParams.get("timestamp") || "Not provided";


let formattedDate = timestamp;

if (timestamp !== "Not provided") {

    const date = new Date(timestamp);

    if (!Number.isNaN(date.getTime())) {

        formattedDate = date.toLocaleString();

    }

}


applicationDetails.innerHTML = `

    <div class="application-item">

        <strong>First Name:</strong>

        <span>${firstName}</span>

    </div>


    <div class="application-item">

        <strong>Last Name:</strong>

        <span>${lastName}</span>

    </div>


    <div class="application-item">

        <strong>Email Address:</strong>

        <span>${email}</span>

    </div>


    <div class="application-item">

        <strong>Mobile Phone:</strong>

        <span>${phone}</span>

    </div>


    <div class="application-item">

        <strong>Business / Organization:</strong>

        <span>${organization}</span>

    </div>


    <div class="application-item">

        <strong>Application Date:</strong>

        <span>${formattedDate}</span>

    </div>

`;