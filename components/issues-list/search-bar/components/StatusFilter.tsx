import { useQueryParam, useUpdateQueryParams } from 'hooks';
import styled from 'styled-components';

export const StatusFilter: React.FC = () => {
	const status = useQueryParam('status', 'open');
	const updateQuery = useUpdateQueryParams();

	const isOpenActive = status === 'open';
	const isClosedActive = status === 'closed';

	const handleChange = (status: 'open' | 'closed') => {
		updateQuery({
			status,
			page: '1'
		});
	};

	return (
		<Wrapper>
			<Button
				type='button'
				isActive={isOpenActive}
				disabled={isOpenActive}
				onClick={() => handleChange('open')}
			>
				Open
			</Button>
			<Button
				type='button'
				isActive={isClosedActive}
				disabled={isClosedActive}
				onClick={() => handleChange('closed')}
			>
				Closed
			</Button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	& > *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`;

const Button = styled.button<{ isActive: boolean }>`
	appearance: none;
	font-weight: 500;
	font-size: 1rem;
	background-color: transparent;
	color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-secondary)')};
	cursor: pointer;
	padding-inline: 0.5rem;
	padding-block: 0.5rem;

	&:disabled {
		pointer-events: none;
		cursor: default;
	}
`;
