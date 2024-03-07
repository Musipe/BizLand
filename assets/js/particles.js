particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Adjust the number of particles
        },
        color: {
            value: '#ffffff', // Particle color
        },
        shape: {
            type: 'circle', // Shape of particles (circle, edge, triangle, etc.)
        },
        size: {
            value: 3, // Particle size
        },
        opacity: {
            value: 0.8, // Particle opacity
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse', // Interaction effect on hover (repulse, grab, bubble, etc.)
            },
        },
    },
});
