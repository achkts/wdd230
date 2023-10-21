// Two input values
const tempInput = document.getElementById('temperature');
tempInput.addEventListener("keyup", getUpdate);

const wspeedInput = document.getElementById('windspeed');
wspeedInput.addEventListener("keyup", getUpdate);

getUpdate();

function getUpdate() {
    const temp = parseInt(document.getElementById('temperature').value);
    const wspeed = parseFloat(document.getElementById('windspeed').value);

    // Check input values meet spec limits

    if (temp <= 50 && wspeed > 3.0){
        // Calling the function
        const windChill = calculateWindChill(temp, wspeed)
        // Display wind chill value
        document.getElementById('windchill').textContent = windChill.toFixed(2) + " °F";
    } else {
        //Display "n/a" if the input values don't meet the requirements
        document.getElementById('windchill').textContent = "n/a";
    } 
}

// Function to calculate wind chill
function calculateWindChill(temp,wspeed ) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16);
   return windChill;
}