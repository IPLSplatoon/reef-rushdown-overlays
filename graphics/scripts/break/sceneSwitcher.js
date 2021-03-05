const sceneTl = gsap.timeline();

activeBreakScene.on('change', (newValue, oldValue) => {
    if (!oldValue) {
        switch (newValue) {
            case 'main':
                hideStages();
                hideTeams();
                break;
            case 'teams':
                hideMainScene();
                hideStages();
                break;
            case 'stages':
                hideMainScene();
                hideTeams();
        }
    } else {
        switch (oldValue) {
            case 'main':
                hideMainScene();
                break;
            case 'teams':
                hideTeams();
                break;
            case 'stages':
                hideStages()
                break;
            default:

        }
    }

    switch (newValue) {
        case 'main':
            hideInfoBar('-=0.6');
            showMainScene();
            break;
        case 'teams':
            showInfoBar();
            showTeams();
            break;
        case 'stages':
            showInfoBar();
            showStages();
            break;
        default:

    }
});

function showMainScene() {
    toggleWaveHeight(false);
    sceneTl.add(gsap.to('.scene.main-scene', {duration: 0.5, opacity: 1}), '-=0.85');
}

function hideMainScene() {
    toggleWaveHeight(true);
    sceneTl.add(gsap.to('.scene.main-scene', {duration: 0.5, opacity: 0}), '-=0.85');
}

function toggleWaveHeight(expand) {
    const waveTop = expand ? -460 : 0;
    sceneTl.to('div.wave-wrapper', {top: waveTop, duration: 1.5, ease: Power3.easeInOut});
}

function showInfoBar() {
    sceneTl.add(gsap.to('.info-bar-wrapper', {y: 0, duration: 0.5, ease: Power2.easeOut}), '-=0.35');
}

function hideInfoBar(position = '-=0.0') {
    sceneTl.add(gsap.to('.info-bar-wrapper', {y: 200, duration: 0.5, ease: Power2.easeIn}, position));
}

function showTeams() {
    sceneTl.add(gsap.fromTo('#team-a-wrapper', {y: -75, opacity: 0}, {
        y: 0,
        duration: 0.5,
        opacity: 1,
        ease: Back.easeOut,
        force3D: false
    }), '-=0.5');
    sceneTl.add(gsap.fromTo('#team-b-wrapper', {y: 75, opacity: 0}, {
        y: 0,
        duration: 0.5,
        opacity: 1,
        ease: Back.easeOut,
        force3D: false
    }), '-=0.5');
}

function hideTeams() {
    sceneTl.add(gsap.to('#team-a-wrapper', {y: 75, duration: 0.5, opacity: 0, ease: Back.easeIn}));
    sceneTl.add(gsap.to('#team-b-wrapper', {y: -75, duration: 0.5, opacity: 0, ease: Back.easeIn}), '-=0.5');
}

function showStages() {
    showStageElems(sceneTl, '-=0.6');
    // scoreboard anim
}

function hideStages() {
    hideStageElems(sceneTl);
    // scoreboard anim
}

function hideStageElems(timeline, callback = () => {
}) {

}

function showStageElems(timeline, startPos = '-=0.0') {

}
