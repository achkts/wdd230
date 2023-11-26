const baseURL = "https://achkts.github.io/wdd230/";

const linksURL = "https://achkts.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('#membersCard');
const lists = document.querySelector('#membersList');

async function getLinks(linksURL) {
    let response = await fetch(linksURL);
    let data = await response.json();

    console.log(data);
    displayLinks(data.members);
    displayList(data.members);
}; 

getLinks(linksURL);



const displayLinks = (members) => {
    members.forEach((member) => {
        let card = document.createElement("div");
        card.setAttribute('class', 'memberCard');

        let imgUrl = document.createElement("img");
        imgUrl.setAttribute('src', member.imgUrl);
        imgUrl.setAttribute('alt', member.name);
        card.appendChild(imgUrl);

        let name = document.createElement("div");
        name.textContent = member.name;
        card.appendChild(name);

        let address = document.createElement("div");
        address.innerHTML = member.address;
        card.appendChild(address);

        let phoneNum = document.createElement("div");
        phoneNum.textContent = member.phoneNum;
        card.appendChild(phoneNum);

        let website = document.createElement("div");
        website.textContent = member.website;
        card.appendChild(website);

       

        let membershipLevel = document.createElement("div");
        membershipLevel.textContent = member.membershipLevel;
        card.appendChild(membershipLevel);

        let dateJoined = document.createElement("div");
        dateJoined.textContent = member.dateJoined;
        card.appendChild(dateJoined);
      

        // console.log(members);
        cards.appendChild(card);
    })
     

}
const displayList = (members) => {
    members.forEach((member) => {
        let card = document.createElement("div");
        card.setAttribute('class', 'memberLine');

        let name = document.createElement("div");
        name.textContent = member.name;
        card.appendChild(name);

        let address = document.createElement("div");
        address.innerHTML = member.address;
        card.appendChild(address);

        let phoneNum = document.createElement("div");
        phoneNum.textContent = member.phoneNum;
        card.appendChild(phoneNum);

        let website = document.createElement("div");
        website.textContent = member.website;
        card.appendChild(website);

    
        lists.appendChild(card);
    })
     

}

const showGrid = document.getElementById('showGrid');
const showList = document.getElementById('showList');

showList.addEventListener('click', () => {
    cards.classList.add('hide');
    lists.classList.remove('hide');
    showGrid.classList.remove('activeToggle');
    showList.classList.add('activeToggle');
})

showGrid.addEventListener('click', () => {
    cards.classList.remove('hide');
    lists.classList.add('hide');
    showGrid.classList.add('activeToggle');
    showList.classList.remove('activeToggle');
})