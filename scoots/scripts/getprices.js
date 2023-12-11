const baseURL = "https://achkts.github.io/wdd230/scoots/scootsIndex.html";

const linksURL = "https://achkts.github.io/wdd230/scoots/data/prices.json";

const prices = document.querySelector('#rentalType');

async function getLinks(linksURL) {
    let response = await fetch(linksURL);
    let data = await response.json();

    console.log(data);
    displayLinks(data.prices);
    displayList(data.prices);
}; 

getLinks(linksURL);

const displayLinks = (prices) => {
    prices.forEach((price) => {
        let table = document.createElement("tr");
        table.setAttribute('class', 'rentalPricing');

        let rentalType = document.createElement("td");
        rentalType.textContent = price.rentalType;
        table.appendChild(rentalType);

        let maxPerson = document.createElement("td");
        maxPerson.textContent = price.maxPerson;
        table.appendChild(maxPerson);

        let reservationHalf = document.createElement("td");
        reservationHalf.textContent = price.reservationHalf;
        table.appendChild(reservationHalf);

        let reservationFull = document.createElement("td");
        reservationFull.textContent = price.reservationFull;
        table.appendChild(reservationFull);

        let walkHalf = document.createElement("td");
        walkHalf.textContent = price.walkHalf;
        table.appendChild(walkHalf);

        let walkFull = document.createElement("td");
        walkFull.textContent = price.walkFull;
        table.appendChild(walkFull);

        
      

        console.log(prices);
        prices.appendChild(price);
    })
     

}