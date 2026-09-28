import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {IconBookmark} from './icons';

export type SceneData = {
	id: string;
	durationInFrames: number;
	backgroundImage: string | null;
	text: string;
	items?: string[];
	cta: boolean;
};

// マゼンタ(#FF00FF)はCapCut側のクロマキー合成用の背景色。
// Codespaces上のレンダリング環境では透過(alpha)が機能しないため、
// 単色背景+CapCutでのクロマキー抜きという構成を採用している。
const CHROMA_KEY_COLOR = '#FF00FF';
const CARD_NAVY = '#0B1F3A';

const TelopCard: React.FC<{
	text: string;
	items?: string[];
	cta: boolean;
	withImage: boolean;
}> = ({text, items, cta, withImage}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 20,
				backgroundColor: CARD_NAVY,
				border: '6px solid #FFFFFF',
				borderRadius: 24,
				padding: '40px 48px',
				boxShadow: '0 12px 36px rgba(0,0,0,0.55)',
				maxWidth: withImage ? '92%' : '88%',
			}}
		>
			{cta && <IconBookmark size={72} color="#FFFFFF" />}
			<div
				style={{
					fontFamily: 'Noto Sans JP',
					fontWeight: 700,
					fontSize: withImage ? 52 : 60,
					lineHeight: 1.5,
					color: '#FFFFFF',
					textAlign: 'center',
					whiteSpace: 'pre-wrap',
					textShadow: '0 4px 10px rgba(0,0,0,0.6)',
				}}
			>
				{text}
			</div>

			{/* items有無でデータ形状のみ出し分け(比較・リスト型フォーマット用) */}
			{items && items.length > 0 && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 12,
						width: '100%',
					}}
				>
					{items.map((item, i) => (
						<div
							key={i}
							style={{
								fontFamily: 'Noto Sans JP',
								fontWeight: 700,
								fontSize: 40,
								color: '#FFFFFF',
								textAlign: 'left',
								borderLeft: '6px solid #FFD54A',
								paddingLeft: 16,
							}}
						>
							{item}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export const SceneRenderer: React.FC<{scene: SceneData}> = ({scene}) => {
	const hasImage = Boolean(scene.backgroundImage);

	// 全シーン共通:画像・テロップを1つの縦積みグループとして画面中央に配置。
	// 画像はグループ内で最大化(maxHeight 80%)し、余白を最小限に絞る。
	return (
		<AbsoluteFill
			style={{
				backgroundColor: CHROMA_KEY_COLOR,
				alignItems: 'center',
				justifyContent: 'center',
				display: 'flex',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
					gap: hasImage ? 24 : 0,
					padding: hasImage ? '24px 40px' : 0,
				}}
			>
				{hasImage && scene.backgroundImage && (
					<Img
						src={staticFile(scene.backgroundImage)}
						style={{
							width: '100%',
							maxHeight: '92%',
							objectFit: 'contain',
						}}
					/>
				)}

				<TelopCard
					text={scene.text}
					items={scene.items}
					cta={scene.cta}
					withImage={hasImage}
				/>
			</div>
		</AbsoluteFill>
	);
};
