import { useUpdateQueryParam } from 'hooks';
import styled from 'styled-components';
import { InputSearch } from './components';

export const SearchBar: React.FC = () => {
	const [search, setSearch] = useUpdateQueryParam('q');
	const [type, setType] = useUpdateQueryParam('type');

	return (
		<Wrapper>
			<InputSearch />
			<Form>search</Form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	border-top: 1px solid var(--color-border);
	background-color: var(--color-gray);
	border-top-right-radius: 0.5em;
	border-top-left-radius: 0.5em;

	& > *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`;

const Form = styled.form``;
