const DASHBOARD_BUNDLE_NAME = 'ipl-overlay-controls';

function textOpacitySwap(newText, elem, tl) {
    tl.add(gsap.to(elem, {
        opacity: 0, duration: 0.35, onComplete: () => {
            elem.setAttribute('text', newText);
        }
    }));

    tl.add(gsap.to(elem, {opacity: 1, duration: 0.35}));
}
