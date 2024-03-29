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
    background-color: #09090e;
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
    background-color: #09090e;
     border: 2px solid black; 
`;


const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    width: 90%;
    height: 90%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
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
    src: 'https://cdn.jsdelivr.net/gh/matheusvalexd/preloaderJSLottie@4e1255c3edf4f7a7f284a2984460cf962e24d9bd/loading.riv',
    canvas: document.createElement('canvas'),
    autoplay: true,
 
    stateMachines: 'idlestate',
    
       onLoad: () => {
           r.resizeDrawingSurfaceToCanvas();
            canvas.width = lottieContainer.offsetWidth;
            canvas.height = lottieContainer.offsetHeight;
            r.layout = new rive.Layout({
              fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
              alignment: rive.Alignment.Center,
            });
    },
});
const canvas = r.canvas;

lottieContainer.appendChild(canvas);
}


document.addEventListener('DOMContentLoaded', () => {
   hideOverlay(); // Teste sem o setTimeout
});

//document.addEventListener('load', function() {
  //    hideOverlay();
 //   });
