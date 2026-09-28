import React from 'react';

export const IconBookmark: React.FC<{size?: number; color?: string}> = ({
	size = 64,
	color = '#FFFFFF',
}) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none">
		<path
			d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"
			fill={color}
			stroke={color}
			strokeWidth={1.5}
			strokeLinejoin="round"
		/>
	</svg>
);

export const IconWarning: React.FC<{size?: number; color?: string}> = ({
	size = 64,
	color = '#FFD54A',
}) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none">
		<path
			d="M12 3 1 21h22L12 3z"
			fill="none"
			stroke={color}
			strokeWidth={1.8}
			strokeLinejoin="round"
		/>
		<rect x="11.1" y="9" width="1.8" height="6" rx="0.9" fill={color} />
		<circle cx="12" cy="17.5" r="1.1" fill={color} />
	</svg>
);

export const IconChart: React.FC<{size?: number; color?: string}> = ({
	size = 64,
	color = '#FFFFFF',
}) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none">
		<path
			d="M3 17l5-6 4 3 5-8 4 5"
			stroke={color}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
		<path
			d="M3 21h18"
			stroke={color}
			strokeWidth={2}
			strokeLinecap="round"
		/>
	</svg>
);
