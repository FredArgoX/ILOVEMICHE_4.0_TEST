// //////////////////////////////////////////////////////////////////////////////////////////
// FullScreen Functionality
(() => {
    'use strict';

    // DOM elements (queried once)
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const enterPath = document.getElementById('enter-fullscreen');
    const exitPath = document.getElementById('exit-fullscreen');

    // Early exit if elements are missing
    if (!fullscreenBtn || !enterPath || !exitPath) {
        console.warn('[Fullscreen] Required elements not found in DOM.');
        return;
    }

    // Cross-browser fullscreen API helpers
    const getFullscreenElement = () => 
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null;

    const requestFullscreen = (element) => {
        if (element.requestFullscreen) return element.requestFullscreen();
        if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
        if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
        if (element.msRequestFullscreen) return element.msRequestFullscreen();
        return Promise.reject(new Error('Fullscreen API not supported'));
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) return document.exitFullscreen();
        if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
        if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
        if (document.msExitFullscreen) return document.msExitFullscreen();
        return Promise.reject(new Error('Fullscreen API not supported'));
    };

    // Update SVG icon + ARIA label
    const updateUI = (isFullscreen) => {
        if (isFullscreen) {
        // Show exit icon
        enterPath.setAttribute('stroke', 'transparent');
        exitPath.setAttribute('stroke', 'rgb(255, 255, 255)');
        fullscreenBtn.setAttribute('aria-label', 'Exit fullscreen');
        } else {
        // Show enter icon
        enterPath.setAttribute('stroke', 'rgb(255, 255, 255)');
        exitPath.setAttribute('stroke', 'transparent');
        fullscreenBtn.setAttribute('aria-label', 'Enter fullscreen');
        }
    };

    // Main toggle function
    const toggleFullscreen = async () => {
        try {
        const currentlyFullscreen = !!getFullscreenElement();

        if (!currentlyFullscreen) {
            // Enter fullscreen
            await requestFullscreen(document.documentElement);
        } else {
            // Exit fullscreen
            await exitFullscreen();
        }
        } catch (err) {
        // Graceful fallback - most common reasons: user denied permission or not supported
        console.warn('[Fullscreen] Toggle failed:', err.message);
        // Optionally show a non-intrusive toast/notification here in a real app
        }
    };

    // Initialize
    const initFullscreen = () => {
        // Initial state sync
        updateUI(!!getFullscreenElement());

        // Click handler (replaces onclick)
        fullscreenBtn.addEventListener('click', toggleFullscreen, { passive: true });

        // Listen for external fullscreen changes (Esc key, browser UI, etc.)
        const fullscreenEvents = [
        'fullscreenchange',
        'webkitfullscreenchange',
        'mozfullscreenchange',
        'MSFullscreenChange'
        ];

        fullscreenEvents.forEach((eventName) => {
        document.addEventListener(eventName, () => {
            updateUI(!!getFullscreenElement());
        });
        });

        console.log('%c[Fullscreen] Module initialized successfully', 'color: #00ff9d; font-weight: bold');
    };

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFullscreen);
    } else {
        initFullscreen();
}
})();