const today = new Date();
const banner = document.getElementById('bannerMeetUp');

if (today.getDay() != 1 && today.getDay() != 2 && today.getDay() != 3) {
    banner.classList.add('hideBanner');
}

const bannerClose = document.getElementById('bannerClose');
bannerClose.addEventListener('click', () => {
    banner.classList.add('hideBanner');
})