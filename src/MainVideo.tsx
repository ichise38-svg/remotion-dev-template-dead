import React, {useEffect, useState} from 'react';
import {AbsoluteFill, Audio, Series, staticFile, continueRender, delayRender} from 'remotion';
import {SceneRenderer, SceneData} from './SceneRenderer';
import scriptData from './script.json';

// Noto Sans JP(常用漢字2,136字+かな+記号+英数字に絞ったサブセット、約840KB)を
// public/fonts からローカル読み込み。Google Fonts動的取得はStackBlitz上で
// 解決エラーになるため使用しない。
const FONT_REGULAR = staticFile('fonts/NotoSansJP-Regular-subset.woff2');
const FONT_BOLD = staticFile('fonts/NotoSansJP-Bold-subset.woff2');

const useNotoSansJP = () => {
	const [handle] = useState(() => delayRender('Noto Sans JPフォントの読み込み'));

	useEffect(() => {
		const style = document.createElement('style');
		style.textContent = `
			@font-face {
				font-family: 'Noto Sans JP';
				src: url('${FONT_REGULAR}') format('woff2');
				font-weight: 400;
				font-display: block;
			}
			@font-face {
				font-family: 'Noto Sans JP';
				src: url('${FONT_BOLD}') format('woff2');
				font-weight: 700;
				font-display: block;
			}
		`;
		document.head.appendChild(style);

		Promise.all([
			document.fonts.load('700 60px "Noto Sans JP"'),
			document.fonts.load('400 60px "Noto Sans JP"'),
		])
			.catch(() => {
				// フォント読み込みに失敗してもレンダリングをブロックしない
			})
			.finally(() => continueRender(handle));
	}, [handle]);
};

export const MainVideo: React.FC = () => {
	useNotoSansJP();

	const scenes = scriptData.scenes as SceneData[];

	return (
		<AbsoluteFill style={{backgroundColor: '#FF00FF'}}>
			<Audio src={staticFile(scriptData.meta.audioSrc)} />
			<Series>
				{scenes.map((scene) => (
					<Series.Sequence
						key={scene.id}
						durationInFrames={scene.durationInFrames}
						layout="none"
					>
						<SceneRenderer scene={scene} />
					</Series.Sequence>
				))}
			</Series>
		</AbsoluteFill>
	);
};
