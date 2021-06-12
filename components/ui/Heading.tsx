import { breakpoints } from 'components/styles';
import styled from 'styled-components';

export const Heading = styled.h1`
	font-weight: bold;
	text-align: center;
	line-height: 1;
	color: var(--flikr-color-primary);
	font-size: 1.5rem;
	margin-block-end: 2rem;

	@media ${breakpoints.md} {
		font-size: 1.5rem;
	}
	@media ${breakpoints.lg} {
		font-size: 3rem;
		margin-block-end: 4rem;
	}
`;
