import { breakpoints } from 'components/styles';
import styled from 'styled-components';

export const Grid = styled.ul`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(1, 1fr);

	@media ${breakpoints.md} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${breakpoints.lg} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
