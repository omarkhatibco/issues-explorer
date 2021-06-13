import styled from 'styled-components';
import { InputSearch, StatusFilter } from './components';

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
	justify-content: center;
	align-items: center;
	border-top: 1px solid var(--color-border);
	background-color: var(--color-gray);
	border-top-right-radius: 0.5em;
	border-top-left-radius: 0.5em;

	& > *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`;
