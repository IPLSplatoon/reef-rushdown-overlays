wavify(document.getElementById('wave-path'), {
    height: -500,
    bones: 3,
    amplitude: 50,
    color: 'var(--background-1-dark)',
    speed: 0.10
});

const coralTileScrollTl = gsap.timeline({repeat: -1});

coralTileScrollTl.to('div.coral-wrapper', {
    duration: 15,
    ease: Power0.easeNone,
    backgroundPosition: '400px 1300px'});
