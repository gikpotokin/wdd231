
const lat = 6.5244;
const lon = 3.3792;

const apiKey = "7f3f175574af0a02b854eb363c736a02";

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-description");
const weatherIcon = document.querySelector("#weather-icon");
const forecastContainer = document.querySelector("#forecast-container");


async function getWeather() {

    try {

        const response = await fetch(currentURL);

        if (!response.ok) {
            throw new Error("Weather data unavailable");
        }

        const data = await response.json();

        displayCurrentWeather(data);

    } catch (error) {

        console.error(error);

        currentTemp.textContent = "Unavailable";
        weatherDesc.textContent = "Weather unavailable.";

    }

}


function displayCurrentWeather(data) {

    currentTemp.innerHTML = `${Math.round(data.main.temp)}°C`;

    weatherDesc.textContent =
        data.weather[0].description;

    const icon =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherIcon.src = icon;
    weatherIcon.alt = data.weather[0].description;

}


async function getForecast() {

    try {

        const response = await fetch(forecastURL);

        if (!response.ok) {

            throw new Error("Forecast unavailable");

        }

        const data = await response.json();

        displayForecast(data);

    }

    catch (error) {

        console.error(error);

    }

}


function displayForecast(data) {

    forecastContainer.innerHTML = "";

    // select only forecasts at 12:00 each day

    const dailyForecasts = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    dailyForecasts.slice(0, 3).forEach(day => {

        const date = new Date(day.dt_txt);

        const weekday =
            date.toLocaleDateString(
                "en-US",
                { weekday: "short" }
            );

        const card = document.createElement("div");

        card.classList.add("forecast-day");

        card.innerHTML = `
            <h4>${weekday}</h4>
            <p>${Math.round(day.main.temp)}°C</p>
        `;

        forecastContainer.appendChild(card);

    });

}

getWeather();
getForecast();


const spotlightContainer =
document.querySelector("#spotlight-container");

const memberURL = "../chamber/data/members.json";


async function getSpotlights() {

    try {

        const response = await fetch(memberURL);

        if (!response.ok) {

            throw new Error("Unable to load members.");

        }

        const members = await response.json();

        displaySpotlights(members);

    }

    catch (error) {

        console.error(error);

        spotlightContainer.innerHTML = `
            <p>
                Unable to load member spotlights.
            </p>
        `;

    }

}


function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";


    const qualified = members.filter(member =>
        member.membership === 2 ||
        member.membership === 3
    );


    qualified.sort(() => Math.random() - 0.5);

    const selected = qualified.slice(0, 3);

    selected.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `

            <img
                src="${member.image}"
                alt="${member.name}"
                loading="lazy">

            <h3>
                ${member.name}
            </h3>

            <p>
                ${member.address}
            </p>

            <p>
                ${member.phone}
            </p>

            <p>

                <a
                    href="${member.website}"
                    target="_blank">

                    Visit Website

                </a>

            </p>

            <p>

                <strong>

                    ${
                        member.membership === 3
                            ? "Gold Member"
                            : "Silver Member"
                    }

                </strong>

            </p>

        `;

        spotlightContainer.appendChild(card);

    });

}

getSpotlights();
