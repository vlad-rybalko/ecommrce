export function openJivo() {
    if (typeof jivo_api !== 'undefined') {
        jivo_api.open();
    }
}

export function showJivo() {
    if (typeof jivo_api !== 'undefined') {
        const parentJDiv = document.getElementsByTagName('jdiv').item(0);
        parentJDiv.style.display = '';
    }
}

export function hideJivoIfExists() {
    if (typeof jivo_api !== 'undefined') {
        hideJivo();
        return;
    }
    document.querySelector('body').addEventListener('jivo_loaded', () => {
        hideJivo();
    });
}

export function moveJivoIfExists(pixelsFromBottom) {
    if (typeof jivo_api !== 'undefined') {
        moveJivo(pixelsFromBottom);
        return;
    }
    document.querySelector('body').addEventListener('jivo_loaded', () => {
        moveJivo(pixelsFromBottom);
    });
}

function hideJivo() {
    const parentJDiv = document.getElementsByTagName('jdiv').item(0);
    parentJDiv.style.display = 'none';
}

function moveJivo(pixelsFromBottom) {
    const mobileButton = document.querySelector('jdiv.__jivoMobileButton');
    mobileButton.style.bottom = `${pixelsFromBottom}px`;
}
