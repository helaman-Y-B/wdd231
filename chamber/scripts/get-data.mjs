import { getWeather, getForecast, getHours } from "./forecast.mjs"
import randomizeMembers from "./randomize-members.mjs"

/**
 * Function responsible to get data from members.json file.
 */

async function getMembersData() {
    try {

        const response = await fetch("./data/members.json");

        if(!response.ok) {
            throw new Error(`Bad resquest - Data not found.`)
        }

        const data = await response.json();
        return data.companies;

    } catch(error){
        console.log(`Data not fetched ${error}`)
    }
}

/**
 * Function to create the members list and display it into the 
 * members-list class div in Directory.
 */

export async function displayData() {
    let membersList = document.querySelector("#members-container");
    const data = await getMembersData();

    data.forEach(member => {

        // Create and set attributes
        const memberDiv = document.createElement("div");
        memberDiv.setAttribute("class", "members")

        const memberImg = document.createElement("img");
        memberImg.setAttribute("src", `${member.image}`)
        memberImg.setAttribute("alt", `Image of ${member.name}`)
        memberImg.setAttribute("class", "member-image")

        const memberName = document.createElement("h4");
        memberName.setAttribute("class", `${member.name}`);

        const memberInfo = document.createElement("ul");

        const memberLocation = document.createElement("li");

        const memberContact = document.createElement("li");

        const memberWebsite = document.createElement("li");
        const webSiteLink = document.createElement("a");
        webSiteLink.setAttribute("href", `${member.website}`)

        const memberTier = document.createElement("li");

        const memberSize = document.createElement("li");

        // Insert data into the elements.
        memberName.textContent = `${member.name}`;
        
        // Get all adresses.
        const locations = member.addresses;

        const addresses = locations.map(location => location.address).join(", ");
        
        // Insert text into the created elements.
        memberLocation.textContent = `Addresses: ${addresses}`;
        memberContact.textContent = `Contact: ${member.contact}`;
        memberWebsite.textContent = "Site: ";
        webSiteLink.textContent = `${member.website}`;
        memberTier.textContent = `Membership: ${member.membership}`;
        memberSize.textContent = `Colaborators: ${member.colaborators}`;

        // Set everything to the parent container
        memberDiv.appendChild(memberImg);
        memberDiv.appendChild(memberName);

        memberInfo.appendChild(memberLocation);
        memberInfo.appendChild(memberContact);

        memberWebsite.appendChild(webSiteLink);
        memberInfo.appendChild(memberWebsite);

        memberInfo.appendChild(memberTier);
        memberInfo.appendChild(memberSize);

        memberDiv.appendChild(memberInfo);

        membersList.appendChild(memberDiv);

        
    });
}

/**
 * Display the members of the commerce that are platinum and gold.
 * The members displayed need to also appear ramdomly each time the page is reloaded.
 */
export async function displayIndexData() {
    let membersList = document.querySelector("#members-container");
    const data = await getMembersData();

    const members = await randomizeMembers(data);

    members.forEach(member => {

        // If the memebrs is not gold or platinum, return the for loop and checks the next member.
        if (member.membership !== "gold" && member.membership !==  "platinum") {
            return;
        } 
        // Create and set attributes
        const memberDiv = document.createElement("div");
        memberDiv.setAttribute("class", "members")

        const memberImg = document.createElement("img");
        memberImg.setAttribute("src", `${member.image}`)
        memberImg.setAttribute("alt", `Image of ${member.name}`)
        memberImg.setAttribute("class", "member-image")

        const memberName = document.createElement("h4");
        memberName.setAttribute("class", `${member.name}`);

        const memberInfo = document.createElement("ul");

        const memberInfos = document.createElement("li");

        // Insert data into the elements.
        memberName.textContent = `${member.name}`;
        
        // Insert text into the created elements.
        memberInfos.innerHTML = `PHONE: ${member.contact}</br>
                                URL: <a href=${member.website}> ${member.website}</a>`;

        // Set everything to the parent container
        memberDiv.appendChild(memberImg);
        memberDiv.appendChild(memberName);

        memberInfo.appendChild(memberInfos);

        memberDiv.appendChild(memberInfo);

        membersList.appendChild(memberDiv);
    })
}

/**
 * Isert the data from the Weather API into the index page.
 */
export async function displayForeCast() {

    const weatherData = await getWeather();
    const forecastData = await getForecast();

    const sunriseTime = getHours(weatherData.sys.sunrise);
    const sunsetTime = getHours(weatherData.sys.sunset);

    const weatherIcon = document.getElementById("weather-icon");

    const iconSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    const temp = document.getElementById("temp");
    const weather = document.getElementById("weather-stat");
    const highest = document.getElementById("highest");
    const lowest = document.getElementById("lowest");
    const humidity = document.getElementById("humidity");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");

    weatherIcon.setAttribute("src", `${iconSrc}`);
    weatherIcon.setAttribute("alt", `${weatherData.weather[0].description}`);

    temp.innerHTML = `${weatherData.main.temp} C`;
    weather.innerHTML = `${weatherData.weather[0].description}`;
    highest.innerHTML = `High: ${weatherData.main.temp_max}`;
    lowest.innerHTML = `Low: ${weatherData.main.temp_min}`;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
    sunset.innerHTML = `Sunset: ${sunsetTime}`;

    //Forecast
    const todayCast = document.getElementById("today-cast");
    const toworrowCast = document.getElementById("toworrow-cast");
    const twodayCast = document.getElementById("twoday-cast");

    //Forecast
    todayCast.innerHTML = `Today: ${weatherData.main.temp}C`;
    toworrowCast.innerHTML = `Tomorrow: ${forecastData[0].main.temp}C`;
    twodayCast.innerHTML = `After Tomorrow: ${forecastData[1].main.temp}C`;
}

/**
 * Function responsible to fetch the data from discover.json
 */

async function discoverData() {
    try {

        const response = await fetch("./data/discover.json");

        if(!response.ok) {
            throw new Error(`Bad resquest - Data not found.`)
        }

        const data = await response.json();
        return data.places;

    } catch(error){
        console.log(`Data not fetched ${error}`)
    }
}

/**
 * Function responsible to construct the html for the discover web page.
 */

export async function discoverItem() {
    const data = await discoverData();

    const discoverSection = document.querySelector("#discover");

    let html = "";

    data.forEach(item => {
        html += `
            <div class="card">
                <h2>${item.name}</h2>
                <img src="${item.photo}" alt="${item.description}" fetchpriority="high" width="400" height="400">
                <p>${item.description}</p>
                <p>Address: ${item.address}</p>
            </div>
        `
    });

    discoverSection.insertAdjacentHTML("beforeend", html)
}