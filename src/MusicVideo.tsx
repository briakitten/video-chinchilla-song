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

import EndText from './components/EndText';
import Animate from './components/Animate';

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

export const MusicVideo: React.FC<{}> = () => {
    const frame = useCurrentFrame();
    const {durationInFrames, fps} = useVideoConfig();

    const composerText = "> briakitten"
    const coverScale = 1;

    const opacityCover = interpolate(
        frame,
        [0, 180],
        [0, 1]
    );

    const opacityText = interpolate(
        frame,
        [180, 270],
        [0, 1]
    );

    const endPoint = durationInFrames - 360;

    return (
        <AbsoluteFill style={{backgroundColor: 'black'}}>

            <AbsoluteFill>
                <Img src={coverBackground} style={{opacity: opacityCover, position: "absolute"}}/>
                <Img src={cover} style={{ opacity: opacityCover, position: "absolute",
                    border: "10px solid #15045b", width: 669 * coverScale, height: 680 * coverScale,
                    top: "45%", left: "50%", transform: "translate(-50%, -50%)"
                }} />
                <div style={{ opacity: opacityText, position: "absolute",
                    fontSize: 64, color: "#15045b", fontFamily: "CreatureOriginal",
                    top: "85%", left: "50%", transform: "translate(-50%, -50%)"
                }}>{composerText}</div>
            </AbsoluteFill>
            <EndText />
            <Animate />
            <Audio
                src={music}
                startFrom={0} // if composition is 30fps, then it will start at 2s
                endAt={Infinity} // if composition is 30fps, then it will end at 4s
            />
        </AbsoluteFill>
    )
}