import { useUpdateQueryParam } from 'hooks';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import styled from 'styled-components';

export const InputSearch: React.FC = () => {
	const [search, setSearch] = useUpdateQueryParam('q');
	const [value, setValue] = useState(search || '');

	useDebounce(
		() => {
			if (search !== value) {
				setSearch(value);
			}
		},
		2000,
		[value]
	);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		console.log('here');
	};

	return (
		<Wrapper>
			<Input
				type='search'
				name='search'
				placeholder='Search Issues'
				value={value}
				onChange={onInputChange}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.form`
	flex: 1;
`;
const Input = styled.input`
	flex: 1;
	width: 100%;
`;
