const lat = "-23.293398342379295"
const lon = "-51.18707823073471"
const key = "0327868391c97cdf99a11d497a5a830f"
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
const forecastUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`

export async function getApiData() {
    try {

        const response = await fetch(weatherUrl)

        if(!response.ok) {
            throw new Error(`Bad resquest - Data not found.`)
        }

        const data = await response.json();

        console.log(data);
        return data;

    } catch(error) {
        console.log(`Error fetching weather data ${error}`)
    }
}

export async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if(!response.ok) {
            throw new Error(`Bad resquest - Data not found.`)
        }   

        const data = await response.json();

        const dailyForecasts = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
    
        // Grab the first two days from that filtered list
        const nextTwoDays = dailyForecasts.slice(0, 2);
        console.log("Next Two Days at Noon:", nextTwoDays);

        return nextTwoDays;

    } catch(error) {
        console.error("Error fetching forecast data:", error);
    }
}