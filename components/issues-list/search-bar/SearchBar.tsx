import { breakpoints } from 'components/theme';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { InputSearch } from './components';

const StatusFilter = dynamic(() => import('./components/StatusFilter'), { ssr: false });

export const SearchBar: React.FC = () => {
	return (
		<Wrapper>
			<InputSearch />
			<StatusFilter />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 1rem;
	display: flex;

	border-bottom: 1px solid var(--color-border);
	background-color: var(--color-gray);
	border-top-right-radius: 0.5em;
	border-top-left-radius: 0.5em;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;
	& > *:not(:last-child) {
		margin-block-end: 0.5rem;
	}

	@media ${breakpoints.md} {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		& > *:not(:last-child) {
			margin-block-end: 0;
			margin-inline-end: 0.5rem;
		}
	}
`;
