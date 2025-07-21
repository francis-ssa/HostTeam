
const imagePaths = [
    // 'assets/img/portfolio/14-18/1.png',
    // 'assets/img/portfolio/14-18/2.png',
    // 'assets/img/portfolio/14-18/3.png',
    // 'assets/img/portfolio/14-18/4.png',
    // 'assets/img/portfolio/14-18/5.png',
    // 'assets/img/portfolio/14-18/6.png',
    // 'assets/img/portfolio/14-18/7.png',
    // 'assets/img/portfolio/14-18/8.png',
    // 'assets/img/portfolio/14-18/9.png',

    'assets/img/portfolio/21-25/1.png',
    'assets/img/portfolio/21-25/2.png',
    'assets/img/portfolio/21-25/3.png',
    'assets/img/portfolio/21-25/4.png',
    'assets/img/portfolio/21-25/5.png',
    'assets/img/portfolio/21-25/6.png',
    'assets/img/portfolio/21-25/7.png',
    'assets/img/portfolio/21-25/8.png',
    'assets/img/portfolio/21-25/9.png',
];

let currentIndex = 0;

const projectImage = document.getElementById('projectImage');
const prevButton = document.getElementById('prevImage');
const nextButton = document.getElementById('nextImage');

function updateImage() {
    projectImage.src = imagePaths[currentIndex];
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === imagePaths.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < imagePaths.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Reset index on modal open
const modal = document.getElementById('projectUpdatesModal');
modal.addEventListener('show.bs.modal', () => {
    currentIndex = 0;
    updateImage();
});
