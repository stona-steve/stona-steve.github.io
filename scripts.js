document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Initial entrance animation
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);

    // Fun console message for anyone inspecting the code
    console.log("%cStona Steve Hub Loaded", "color: #2ecc71; font-size: 20px; font-weight: bold;");
});
