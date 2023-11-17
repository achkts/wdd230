const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=b46c4b29082a0d1995355648e99e733d'

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
    currentTemp.innerHTML = `${weatherEvent.main.temp}&deg;F`;
    const iconsrc= `https://openweathermap.org/img/w/${weatherEvent.weather[0].icon}.png`;
    const desc = weatherEvent.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}