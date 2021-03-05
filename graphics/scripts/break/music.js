const songTextTl = gsap.timeline();

const songTextElem = document.getElementById('song-text');

function checkStringEmptyOrUndef(string) {
    string = String(string);
    return (string === 'undefined' || string === '');
}

function getSongName(rep) {
    if (checkStringEmptyOrUndef(rep.artist) && checkStringEmptyOrUndef(rep.song)) {
        return 'No song is playing.'
    }

    if (checkStringEmptyOrUndef(rep.artist)) {
        return rep.song;
    } else if (checkStringEmptyOrUndef(rep.song)) {
        return rep.artist;
    }

    return rep.artist + ' - ' + rep.song;
}

nowPlaying.on('change', newValue => {
    iconTextOpacitySwap(getSongName(newValue),
        songTextElem,
        songTextElem.parentNode.querySelector('i'),
        songTextTl);
});

musicShown.on('change', newValue => {
    const elemHeight = newValue ? 70 : 0;
    const elemOpacity = newValue ? 1 : 0;

    gsap.to('.music-timer-wrapper > .music', {
        duration: 0.5,
        height: elemHeight,
        opacity: elemOpacity,
        ease: Power2.easeInOut
    });

    if (!newValue) {
        animMainLine(false);
    }

    if (nextRoundStartTimeShown.value && newValue) {
        animMainLine(true);
    }
});
