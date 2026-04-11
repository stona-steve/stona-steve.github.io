document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Smooth entrance animation
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        container.style.transition = 'all 1s cubic-bezier(0.19, 1, 0.22, 1)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 200);

    // Global Shift Key Listener
    window.addEventListener('keydown', (e) => {
        if (e.key === "Shift") {
            document.body.classList.add('shifting-active');
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === "Shift") {
            document.body.classList.remove('shifting-active');
        }
    });

    // Console Easter Egg
    console.log(
    "%cSTONA STEVE HUB\n" +
    "%cPOWERED BY:\n%cSTONA STEVE STUDIOS + GitHub\n" +
    "%cVERSION:\n%c26.1\n" +
    "%cSTATUS:\n%cONLINE",
    
    // Line 1: Main Header (Light Red/Glow)
    "color: #ff4d4d; font-weight: 900; font-size: 20px; text-shadow: 2px 2px #5c0000;", 
    
    // Line 2: Powered By
    "color: #8b0000; font-weight: bold;", // Dark Red
    "color: #ff4d4d;",                   // Light Red
    
    // Line 3: Version
    "color: #8b0000; font-weight: bold;", // Dark Red
    "color: #ff4d4d;",                   // Light Red
    
    // Line 4: Status
    "color: #8b0000; font-weight: bold;", // Dark Red
    "color: #ff4d4d; font-weight: 900; text-transform: uppercase;" // Light Red Bold
);
});
