import { useQueryParam, useUpdateQueryParams } from 'hooks';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import styled from 'styled-components';

export const InputSearch: React.FC = () => {
	const search = useQueryParam('q');
	const updateQuery = useUpdateQueryParams();
	const [value, setValue] = useState(search || '');

	useDebounce(
		() => {
			if (search !== value) {
				updateQuery({
					q: value,
					page: '1'
				});
			}
		},
		2000,
		[value]
	);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<Wrapper>
			<Input
				type='search'
				name='search'
				placeholder='Search Issues'
				value={value?.replace(/\+/g, ' ')}
				onChange={onInputChange}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	flex: 1;
`;

const Input = styled.input`
	flex: 1;
	width: 100%;
	padding-inline: 0.5rem;
	padding-block: 0.5rem;
	font-size: 1rem;
	border-radius: 0.25em;
	border: 2px solid var(--color-border);
	appearance: none;

	&:focus-visible {
		outline: none;
		border-color: var(--color-link);
	}
`;
