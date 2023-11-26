const memberCarousel = document.querySelector('.carousel-thumbnails');

async function renderSpotlightMembers() {

    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            const spotlightMembers = data.members.filter(member => member.membershipLevel === 'Silver Member' || member.membershipLevel === 'Gold Member');

            const shuffleMembers = shuffleArray(spotlightMembers);

            const membersToShow = shuffleMembers.slice(0, Math.min(3, shuffleMembers.length)); 
            membersToShow.forEach(member => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('mySlides');
                carouselItem.innerHTML = `
                    <img src="${member.imgUrl}" alt="${member.name} logo" />
                    <a class="thumbnails" href="${member.website}" target="_blank">${member.name}</a>`
            
            memberCarousel.appendChild(carouselItem);

                
            })
            showSlides(1);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }    
}
              

// Initial rendering
renderSpotlightMembers();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(slides.length == 0){return};
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(slides, slideIndex);
    slides[slideIndex-1].style.display = "flex";
}
const prevSlide = document.getElementById('prevSlide');
prevSlide.addEventListener('click', () => {
    plusSlides(-1);
});

const nextSlide = document.getElementById('nextSlide');
nextSlide.addEventListener('click', () => {
    plusSlides(1);
});

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
