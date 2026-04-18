// Get elements
const trigger = document.getElementById('trigger');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

// Open modal when clicking the div
trigger.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Bonus: Close modal when clicking outside the content area
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Keyboard support: press ESC to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});