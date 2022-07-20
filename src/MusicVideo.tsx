import cover from './assets/music-cover.png';
import coverBackground from './assets/music-cover-videobackground.png';
import music from './assets/chinchilla-song.wav';

import {
    AbsoluteFill,
    Img,
    Audio,
    staticFile,
    continueRender,
    delayRender,
    interpolate,
    useCurrentFrame,
    useVideoConfig
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
    const frame = useCurrentFrame();
    const {durationInFrames, fps} = useVideoConfig();

    const composerText = "> briakitten"
    const coverScale = 1;

    const opacity = interpolate(
        frame,
        [0, 30],
        [0, 1]
    );

    return (
        <AbsoluteFill style={{backgroundColor: 'black'}}>
            <AbsoluteFill style={{opacity}}>
                <Img src={coverBackground} style={{position: "absolute"}}/>
                <Img src={cover} style={{
                    position: "absolute", border: "10px solid #15045b", width: 669 * coverScale, height: 680 * coverScale,
                    top: "45%", left: "50%", transform: "translate(-50%, -50%)"
                }} />
                <div style={{
                    position: "absolute", fontSize: 64, color: "#15045b", fontFamily: "CreatureOriginal",
                    top: "85%", left: "50%", transform: "translate(-50%, -50%)"
                }}>{composerText}</div>
            </AbsoluteFill>
        </AbsoluteFill>
    )
}