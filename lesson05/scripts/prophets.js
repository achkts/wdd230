console.log('help');

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');


//Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData(url) {
    let response = await fetch(url);
    let data = await response.json();

    // console.table(data);
    displayProphets(data.prophets);
};

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dob = document.createElement('h3');
        let pob = document.createElement('h4');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        
        card.appendChild(fullName);
        
        card.appendChild(dob);
        card.appendChild(pob);
        
        card.appendChild(portrait);
        cards.appendChild(card);

    });
}




// Store the response from the fetch() method in a const variable named "response".

// Convert the response to a JSON object using the .json method and store the results in a const variable named "data".

// Add a console.table() expression method to check the data response at this point in the console window.

// Call the function getProphetData() in the main line of your .js code to test the fetch and response.
