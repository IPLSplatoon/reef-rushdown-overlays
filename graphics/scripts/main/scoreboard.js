teamScores.on('change', newValue => {
    document.getElementById('team-a-score').setAttribute('text', newValue.teamA);
    document.getElementById('team-b-score').setAttribute('text', newValue.teamB);
});

scoreboardData.on('change', (newValue, oldValue) => {
    if (!oldValue) {
        textOpacitySwap(newValue.teamAInfo.name, document.getElementById('team-a-name'));
        textOpacitySwap(newValue.teamBInfo.name, document.getElementById('team-b-name'));
        textOpacitySwap(newValue.flavorText, document.getElementById('scoreboard-flavor-text'));
    } else {
        if (newValue.teamAInfo.name !== oldValue.teamAInfo.name) {
            textOpacitySwap(newValue.teamAInfo.name, document.getElementById('team-a-name'));
        }

        if (newValue.teamBInfo.name !== oldValue.teamBInfo.name) {
            textOpacitySwap(newValue.teamBInfo.name, document.getElementById('team-b-name'));
        }

        if (newValue.flavorText !== oldValue.flavorText) {
            textOpacitySwap(newValue.flavorText, document.getElementById('scoreboard-flavor-text'));
        }
    }

    gsap.to('#team-a-color', {
        backgroundColor: newValue.swapColorOrder ? newValue.colorInfo.clrB : newValue.colorInfo.clrA,
        duration: 0.35
    });

    gsap.to('#team-b-color', {
        backgroundColor: newValue.swapColorOrder ? newValue.colorInfo.clrA : newValue.colorInfo.clrB,
        duration: 0.35
    });
});

function textOpacitySwap(newText, elem) {
    gsap.to(elem, {
        opacity: 0, duration: 0.35, onComplete: () => {
            elem.setAttribute('text', newText);
        }
    });

    gsap.to(elem, {opacity: 1, duration: 0.35, delay: 0.35});
}

const sbShowTl = new gsap.timeline();

scoreboardShown.on('change', newValue => {
    if (newValue) {
        sbShowTl.add(gsap.fromTo('#scoreboard-wrapper', {y: -200}, {
            duration: 0.5,
            y: 0,
            ease: Back.easeOut,
            force3D: false
        }));
    } else {
        sbShowTl.add(gsap.fromTo('#scoreboard-wrapper', {y: 0}, {
            duration: 0.5,
            y: -200,
            ease: Back.easeIn,
            force3D: false
        }));
    }
});
