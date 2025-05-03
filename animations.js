// Fireflies animation setup
const createFireflies = () => {
    const container = document.querySelector('.fireflies-container');
    const numFireflies = 50;
    const fireflies = [];

    // Create fireflies
    for (let i = 0; i < numFireflies; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        container.appendChild(firefly);
        fireflies.push(firefly);

        // Random initial position
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 100}%`;
    }

    // Animate each firefly
    fireflies.forEach(firefly => {
        const timeline = anime.timeline({
            targets: firefly,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });

        timeline
            .add({
                translateX: () => anime.random(-50, 50) + 'vw',
                translateY: () => anime.random(-50, 50) + 'vh',
                scale: [
                    { value: 0.1, duration: 500, easing: 'easeOutSine' },
                    { value: 0.5, duration: 1000, easing: 'easeInOutQuad' }
                ],
                opacity: [
                    { value: 0.1, duration: 500, easing: 'easeOutSine' },
                    { value: 0.8, duration: 1000, easing: 'easeInOutQuad' }
                ],
                duration: 4000,
                delay: anime.random(0, 2000)
            });
    });
};

// Glow circle animation
const animateGlowCircle = () => {
    const timeline = anime.timeline({
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });

    timeline
        .add({
            targets: '.glow-circle',
            scale: [0.8, 1.2],
            opacity: [0.2, 0.4],
            duration: 3000
        });
};

// Content animations
const animateContent = () => {
    // Animate navigation links
    anime({
        targets: '.nav-links a',
        translateY: 0,
        opacity: 1,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
        duration: 1000
    });

    // Animate hero content
    anime({
        targets: ['.hero h1', '.hero p'],
        translateY: 0,
        opacity: 1,
        delay: anime.stagger(200),
        easing: 'easeOutExpo',
        duration: 1000
    });

    // Animate prompt container
    anime({
        targets: '.prompt-container',
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 600
    });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    createFireflies();
    animateGlowCircle();
    animateContent();
}); 