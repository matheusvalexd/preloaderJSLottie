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
    background-color: #1a1f24;
    z-index: 999;
`;

const lottieContainerAntes = document.createElement('div');
lottieContainerAntes.id = 'lottieContainerAntes';
lottieContainerAntes.style.cssText = `
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1a1f24;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainerAntes);
document.body.appendChild(lottieContainer);

function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainerAntes.style.display = 'block';
    lottieContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay();
});

// Adicione a animação Rive ao elemento lottieContainer
const riveLoader = new Rive({
    src: 'https://cdn.jsdelivr.net/gh/matheusvalexd/preloaderJSLottie@main/space_exploration_animation.riv',
    autoplay: true,
    animations: 'Demo',
    loop: true,
});
lottieContainer.appendChild(riveLoader.canvas);

