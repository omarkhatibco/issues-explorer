import { GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import styled from 'styled-components';
import { IssueState } from 'types';
import { useItem } from './';

const ICONTITLE = {
	OPEN: 'Open issue',
	CLOSED: 'Closed issue'
};

export const ItemStatus: React.FC = () => {
	const { state } = useItem();

	const isOpen = state === IssueState['OPEN'];
	return (
		<Wapper isOpen={isOpen} title={ICONTITLE?.[state]}>
			{isOpen ? <GoIssueOpened /> : <GoIssueClosed />}
		</Wapper>
	);
};

const Wapper = styled.div<{ isOpen: boolean }>`
	color: ${({ isOpen }) => `var(--color-${isOpen ? 'danger' : 'success'})`};
	font-size: 1.25rem;
	padding-block: 0.25rem;
`;
