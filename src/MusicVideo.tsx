import cover from './assets/music-cover.png';
import coverBackground from './assets/music-cover-videobackground.png';
import music from './assets/chinchilla-song.wav';

import {
    AbsoluteFill,
    Img,
    Audio,
    staticFile,
    continueRender,
    delayRender
} from 'remotion';

const waitForFont = delayRender();
const font = new FontFace(
    `CreatureOriginal`,
    `url(${staticFile("creatureoriginal.woff2")}) format('woff2')`
);
font.load()
    .then(() => {
        document.fonts.add(font);
        continueRender(waitForFont);
    })
    .catch((err) => console.log("Error loading font", err));

export const MusicVideo: React.FC<{
    titleText: string,
    titleColor: string
}> = ({titleText, titleColor}) => {
    const composerText = "> briakitten"

    return (
        <AbsoluteFill style={{backgroundColor: 'white'}}>
            <Img src={coverBackground} style={{position: "absolute"}}/>
            <Img src={cover} style={{
                position: "absolute", border: "8px solid #152c5c", width: 960, height: 718.5,
                top: "40%", left: "50%", transform: "translate(-50%, -50%)"
            }} />
            <div style={{
                position: "absolute", fontSize: 64, color: "#152c5c", fontFamily: "CreatureOriginal",
                top: "85%", left: "50%", transform: "translate(-50%, -50%)"
            }}>{composerText}</div>
        </AbsoluteFill>
    )
}