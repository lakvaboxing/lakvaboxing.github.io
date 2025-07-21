const navbar = document.getElementById('navbar');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const titles = document.querySelectorAll('#title');
        for (const title of titles) {title.classList.replace('text-white', 'text-red-600')}
    }, 1000);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/75', 'backdrop-blur-md', 'shadow-md');
        } else {
            navbar.classList.remove('bg-black/75', 'backdrop-blur-md', 'shadow-md');
        }
    });
});

document.querySelectorAll('video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.setAttribute('controls', 'controls');
        video.classList.remove('grayscale');
    });

    video.addEventListener('mouseleave', () => {
        video.removeAttribute('controls');
        video.classList.add('grayscale');
    });
});