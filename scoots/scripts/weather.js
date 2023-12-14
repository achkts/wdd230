const currentTemp = document.querySelector('#current-temp');
const currentTempfeel = document.querySelector('#current-temp-feel');
const tempHumidity = document.querySelector('#current-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const tempMax = document.querySelector('#temp-max');
const tomTempMin = document.querySelector('#tomtemp-max');
const tomTempMax = document.querySelector('#tomtemp-min');



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.512&lon=-86.947&units=imperial&appid=b46c4b29082a0d1995355648e99e733d'

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
    currentTemp.innerHTML = `${Math.round(weatherEvent.main.temp)}&deg; F - ${desc}`;
   
    currentTempfeel.innerHTML = `Feels like: ${Math.round(weatherEvent.main.feels_like)}&deg; F`;
    tempHumidity.innerHTML = `Humidity: ${Math.round(weatherEvent.main.humidity)}%`;
   
    const iconsrc= `https://openweathermap.org/img/w/${weatherEvent.weather[0].icon}.png`;

    tempMax.innerHTML = `Today's High Temperature will be: ${Math.round(weatherEvent.main.temp_max)}&deg; F`;
        
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
tomorrowDate.setHours(1500);


const tomorrowUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.512&lon=-86.947&units=imperial&dt=${tomorrowDate.getTime()}&appid=b46c4b29082a0d1995355648e99e733d`

async function apiFetchTomorrow(tomorrowUrl) {
    try {
        const response = await fetch(tomorrowUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsTomorrow(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }    

};

console.log('pig', tomorrowUrl)

apiFetchTomorrow(tomorrowUrl);

const displayResultsTomorrow = (weatherEvent) => {

    
     tomTempMax.innerHTML = `High Temperature of: ${Math.round(weatherEvent.main.temp_max)}&deg; F`;
     tomTempMin.innerHTML = `Low Temperature of: ${Math.round(weatherEvent.main.temp_min)}&deg; F`;

 
 }
