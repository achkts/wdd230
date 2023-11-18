const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windChill = document.querySelector('#wind-chill');



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.56&lon=-111.84&units=imperial&appid=b46c4b29082a0d1995355648e99e733d'

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }    

};

apiFetch(url);

const displayResults = (weatherEvent) => {
    const desc = weatherEvent.weather[0].description;
    currentTemp.innerHTML = `${Math.round(weatherEvent.main.temp)}&deg;F - ${desc}`;
    const iconsrc= `https://openweathermap.org/img/w/${weatherEvent.weather[0].icon}.png`;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    const windChillTemp = calculateWindChill(weatherEvent.main.temp, weatherEvent.wind.speed);
    windChill.textContent = `Wind Chill: ${Math.round(windChillTemp)}`;
}
    

// Function to calculate wind chill
function calculateWindChill(temp,wspeed ) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16);
    return windChill;
}