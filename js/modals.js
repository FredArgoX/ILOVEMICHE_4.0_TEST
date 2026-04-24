// Trigger Buttons
const BTN_p01aguachiles       = document.getElementById('p01aguachiles');
const BTN_p02ceviches         = document.getElementById('p02ceviches');      
const BTN_p03botaneando       = document.getElementById('p03botaneando');      
const BTN_p04hamburguesas     = document.getElementById('p04hamburguesas');          
const BTN_p05jochos           = document.getElementById('p05jochos');  
const BTN_p06gonzalitas       = document.getElementById('p06gonzalitas');      
const BTN_p07                 = document.getElementById('p07');
const trigger          = document.getElementById('p08');
const BTN_p09chamoyadas       = document.getElementById('p09chamoyadas');  
const BTN_p10cerveza          = document.getElementById('p10cerveza');      
const BTN_p11mojitos          = document.getElementById('p11mojitos');      
const BTN_p12pinacoladafrappe = document.getElementById('p12pinacoladafrappe');              
const BTN_p13cuba             = document.getElementById('p13cuba');  
const BTN_p14whisky           = document.getElementById('p14whisky');  
const BTN_p15mentirosa        = document.getElementById('p15mentirosa');      
const BTN_p16jacaranda        = document.getElementById('p16jacaranda');      
const BTN_p17diablito         = document.getElementById('p17diablito');     
const BTN_p18bluelove         = document.getElementById('p18bluelove');     
const BTN_p19bicolor          = document.getElementById('p19bicolor');     
const BTN_p20cielorosa        = document.getElementById('p20cielorosa');     
const BTN_p21consentida       = document.getElementById('p21consentida');     
const BTN_p22margaritasfrappe = document.getElementById('p22margaritasfrappe');             
const BTN_p23paloma           = document.getElementById('p23paloma'); 
const BTN_p24frappevino       = document.getElementById('p24frappevino');     
const BTN_p25tintodeverano    = document.getElementById('p25tintodeverano');         
const BTN_p26copadevino       = document.getElementById('p26copadevino');     
const BTN_p27caribenas        = document.getElementById('p27caribenas');     
const BTN_p28sirena           = document.getElementById('p28sirena'); 
const BTN_p29mezcal           = document.getElementById('p29mezcal'); 
const BTN_p30carajillos       = document.getElementById('p30carajillos');     
const BTN_p31cubetas          = document.getElementById('p31cubetas');     
const BTN_p32tablas           = document.getElementById('p32tablas'); 
const BTN_p33varios           = document.getElementById('p33varios'); 
const BTN_p34frappes          = document.getElementById('p34frappes');     
const BTN_p35legos            = document.getElementById('p35legos'); 
const BTN_p36topping          = document.getElementById('p36topping');     

// Modal Elements
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const modalArea = document.getElementById('modal-area');

// Swiper Area Elements
const contentX = document.getElementById('s01');
const navBullets = document.getElementById('sw-nav');

// Save original states
let originalBodyOverflow = '';
let wasSwiperEnabled = true;

// Open modal
// ↓↓↓↓↓↓
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

    modalArea.scrollTop = 0;
    modal.style.display = 'flex';
    
});

// Close modal
const closeModal = () => {
    contentX.style.opacity = 1.0;
    navBullets.style.opacity = 1.0;
    modalArea.scrollTop = 0;
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














/*




// Get elements
const trigger = document.getElementById('trigger');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const contentX = document.getElementById('s01');
const navBullets = document.getElementById('sw-nav');
const modalArea = document.getElementById('modal-area');

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

    modalArea.scrollTop = 0;
    modal.style.display = 'flex';
    
});

// Close modal
const closeModal = () => {
    contentX.style.opacity = 1.0;
    navBullets.style.opacity = 1.0;
    modalArea.scrollTop = 0;
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

*/