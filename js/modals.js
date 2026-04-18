// Get elements
const trigger = document.getElementById('trigger');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const contentX = document.getElementById('s01');
const navBullets = document.getElementById('sw-nav')

// Save original states
let originalBodyOverflow = '';
let wasSwiperEnabled = true;

// Open modal
trigger.addEventListener('click', () => {
    originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';   // Prevent any background scroll
    contentX.style.opacity = 0.0;
    navBullets.style.opacity = 0.0;

    // Disable Swiper mousewheel (and touch if you want)
    if (swiper && swiper.mousewheel) {
        wasSwiperEnabled = swiper.mousewheel.enabled;
        swiper.mousewheel.disable();
    }

    // Optional: also disable touch swiping on the swiper while modal is open
    swiper.allowTouchMove = false;

    modal.style.display = 'flex';
});

// Close modal
const closeModal = () => {
    contentX.style.opacity = 1.0;
    navBullets.style.opacity = 1.0;
    modal.style.display = 'none';

    // Restore body scroll
    document.body.style.overflow = originalBodyOverflow;

    // Re-enable Swiper mousewheel
    if (swiper && swiper.mousewheel) {
        if (wasSwiperEnabled) {
            swiper.mousewheel.enable();
        }
    }

    // If you disabled touch move, re-enable it:
    swiper.allowTouchMove = true;
};

// Close button
closeBtn.addEventListener('click', closeModal);

// Click outside modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});