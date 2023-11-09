const baseURL = "https://achkts.github.io/wdd230/";

const linksURL = "data/links.json";

// const linksURL = "https://achkts.github.io/wdd230/data/links.json"

const cards = document.querySelector('#lessons');

async function getLinks(linksURL) {
    let response = await fetch(linksURL);
    let data = await response.json();

    console.log(data);
    displayLinks(data.lessons);
}; 

getLinks(linksURL);



const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let list = document.createElement("div");
        list.textContent = `Week ${week.week}: `;
        
        
        week.links.forEach((link) => {

            let hyperLink = document.createElement("a");
              
            // title.textContent = `${week.links[0].title}`;
            hyperLink.href = `${link.url}`;
            hyperLink.text = `${link.title}`;
                       
            // list.appendChild(title);
            list.appendChild(hyperLink);
            
        })

       

        // url.textContent = week.links[0].title
        // let pipe = document.createTextNode(' | ');
        

        // week.textContent = `${data.week}`;

        

        console.log(weeks);
        cards.appendChild(list);
    })
     

}
