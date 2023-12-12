const baseURL = "https://achkts.github.io/wdd230/scoots/scootsIndex.html";

const linksURL = "https://achkts.github.io/wdd230/scoots/data/prices.json";

const pricesTable = document.querySelector('#rentals');

async function getLinks(linksURL) {
    let response = await fetch(linksURL);
    let data = await response.json();

    console.log(data);
    displayLinks(data.prices);
    
}; 

getLinks(linksURL);

const displayLinks = (prices) => {
    prices.forEach((price) => {
        let row = document.createElement("tr");
        row.setAttribute('class', 'rentalPricing');

        let rentalType = document.createElement("td");
        rentalType.textContent = price.rentalType;
        row.appendChild(rentalType);

        let maxPerson = document.createElement("td");
        maxPerson.textContent = price.maxPerson;
        row.appendChild(maxPerson);

        let reservationHalf = document.createElement("td");
        reservationHalf.textContent = `$${price.reservationHalf}`;
        row.appendChild(reservationHalf);

        let reservationFull = document.createElement("td");
        reservationFull.textContent = `$${price.reservationFull}`;
        row.appendChild(reservationFull);

        let walkHalf = document.createElement("td");
        walkHalf.textContent = `$${price.walkHalf}`;
        row.appendChild(walkHalf);

        let walkFull = document.createElement("td");
        walkFull.textContent = `$${price.walkFull}`;
        row.appendChild(walkFull);

        
      
        
        console.log(price);
        pricesTable.appendChild(row);
        
    })
     

}