import {Composition} from 'remotion';
import {MusicVideo} from './MusicVideo';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	const frameDuration = 3330;

	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="MusicVideo"
				component={MusicVideo}
				durationInFrames={frameDuration}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Exploring a Pet Mall as a Chinchilla',
					titleColor: 'black',
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			<Composition
				id="OnlyLogo"
				component={MusicVideo}
				durationInFrames={frameDuration}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
