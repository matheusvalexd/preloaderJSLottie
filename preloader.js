const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 31, 36, 1);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 500px;
    max-height: 500px;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
lottieContainer.style.display = 'none';

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';
    // Substitua pela URL direta do seu arquivo JSON do Lottie.
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://cdn.jsdelivr.net/gh/matheusvalexd/preloaderJSLottie@main/astronaut.json',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay(); // Teste sem o setTimeout
});

window.addEventListener('load');
