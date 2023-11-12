const baseURL = "https://achkts.github.io/wdd230/";

const linksURL = "https://achkts.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('#membersCard');
const lists = document.querySelector('#membersList');

async function getLinks(linksURL) {
    let response = await fetch(linksURL);
    let data = await response.json();

    console.log(data);
    displayLinks(data.members);
}; 

getLinks(linksURL);



const displayLinks = (members) => {
    members.forEach((member) => {
        let card = document.createElement("div");
        card.setAttribute('class', 'memberCard');

        // "name": "Tacomania",
        //     "address": "3673 W 13400 S, #G, Riverton, Utah 84065",
        //     "phone number": "801-989-7912",
        //     "website": "https://www.facebook.com/TacomaniaUT/",
        //     "imgUrl": "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/294686868_469550678507501_1123540739016470752_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6jhifHf4sSwAX9rsGmf&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCSEQ8_0L4HC40eDLnGFowUuIzOy0j7TZbAmQXDa9vfdg&oe=6553196F",
        //     "membership level": "Silver",
        //     "date joined": "2022"
        

        let imgUrl = document.createElement("img");
        imgUrl.setAttribute('src', member.imgUrl);
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
      

        console.log(members);
        cards.appendChild(card);
    })
     

}