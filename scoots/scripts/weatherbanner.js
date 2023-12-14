
const banner = document.getElementById('weatherBanner');

const bannerClose = document.getElementById('bannerClose');
bannerClose.addEventListener('click', () => {
    banner.classList.add('hideBanner');
})

