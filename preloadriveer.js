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
    width: 100%; /* Ajuste a largura para 100% */
    height: 100%; /* Ajuste a altura para 100% */
    display: none;
    position: absolute;
    top: 0;
    left: 0;
`;


document.body.appendChild(overlay); // Adiciona overlay depois de lottieContainer
document.body.appendChild(lottieContainerAntes); // Adiciona lottieContainer antes de overlay
document.body.appendChild(lottieContainer); // Adiciona lottieContainer antes de overlay



function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainerAntes.style.display = 'block';
    lottieContainer.style.display = 'block';
    // Substitua pela URL direta do seu arquivo JSON do Lottie.
    const r = new rive.Rive({
    src: 'https://cdn.jsdelivr.net/gh/matheusvalexd/preloaderJSLottie@main/space_exploration_animation.riv',
    canvas: lottieContainer, // Use lottieContainer como o canvas
    autoplay: true,
    stateMachines: 'Demo',
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
    },
});
}

document.addEventListener('DOMContentLoaded', () => {
   hideOverlay(); // Teste sem o setTimeout
});
