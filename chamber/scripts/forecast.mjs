const lat = "-23.293398342379295"
const lon = "-51.18707823073471"
const key = "4847aed3b0722f0b3f71304035643fb3"
const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`;

async function getApiData() {
    try {

        const response = await fetch(url)

        if(!response.ok) {
            throw new Error(`Bad resquest - Data not found.`)
        }

        const data = await response.json();

        console.log(data);

    } catch(error) {
        console.log(`Data not fetched ${error}`)
    }
}

getApiData();