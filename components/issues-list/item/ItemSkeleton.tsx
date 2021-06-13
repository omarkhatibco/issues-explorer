import styled from 'styled-components';
import { AspectRatio } from './itemComponents';

export const ItemSkeleton: React.FC = () => {
	return (
		<AspectRatio>
			<Svg
				role='img'
				width='400'
				height='225'
				aria-labelledby='loading-aria'
				viewBox='0 0 400 225'
				preserveAspectRatio='none'
			>
				<title id='loading-aria'>Loading...</title>
				<rect
					x='0'
					y='0'
					width='100%'
					height='100%'
					clipPath='url(#clip-path)'
					style={{ fill: 'url("#fill")' }}
				></rect>
				<defs>
					<clipPath id='clip-path'>
						<rect x='3' y='-1' rx='2' ry='2' width='400' height='400' />
					</clipPath>
					<linearGradient id='fill'>
						<stop offset='0.599964' stopColor='#ffffff' stopOpacity='1'>
							<animate
								attributeName='offset'
								values='-2; -2; 1'
								keyTimes='0; 0.25; 1'
								dur='2s'
								repeatCount='indefinite'
							></animate>
						</stop>
						<stop offset='1.59996' stopColor='#e7e7e7' stopOpacity='1'>
							<animate
								attributeName='offset'
								values='-1; -1; 2'
								keyTimes='0; 0.25; 1'
								dur='2s'
								repeatCount='indefinite'
							></animate>
						</stop>
						<stop offset='2.59996' stopColor='#ffffff' stopOpacity='1'>
							<animate
								attributeName='offset'
								values='0; 0; 3'
								keyTimes='0; 0.25; 1'
								dur='2s'
								repeatCount='indefinite'
							></animate>
						</stop>
					</linearGradient>
				</defs>
			</Svg>
		</AspectRatio>
	);
};

export const Svg = styled.svg`
	position: absolute;
	width: 100%;
	height: 100%;

	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;
