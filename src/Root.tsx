import React from 'react';
import {Composition} from 'remotion';
import {MainVideo} from './MainVideo';
import scriptData from './script.json';

export const Root: React.FC = () => {
	return (
		<>
			<Composition
				id="MainVideo"
				component={MainVideo}
				durationInFrames={scriptData.meta.totalDurationInFrames}
				fps={scriptData.meta.fps}
				width={scriptData.meta.width}
				height={scriptData.meta.height}
			/>
		</>
	);
};
