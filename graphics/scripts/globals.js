const DASHBOARD_BUNDLE_NAME = 'ipl-overlay-controls';

function textOpacitySwap(newText, elem, tl) {
    tl.add(gsap.to(elem, {
        opacity: 0, duration: 0.35, onComplete: () => {
            elem.setAttribute('text', newText);
        }
    }));

    tl.add(gsap.to(elem, {opacity: 1, duration: 0.35}));
}

function addDots(string = "") {
    const maxNameLength = 48;
    const rolloff = '...';

    if (!string) return string;
    if (string.length > maxNameLength) return string.substring(0, (maxNameLength - rolloff.length)) + rolloff;
    else return string;
}

function loadImagePromise(imageUrl) {
    return new Promise((resolve) => {
        const imageLoaderElem = document.createElement("img");
        imageLoaderElem.src = imageUrl;

        imageLoaderElem.addEventListener('load', () => {
            resolve();
        });
    })
}

