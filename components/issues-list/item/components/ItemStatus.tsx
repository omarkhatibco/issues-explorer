import { useIssue } from 'context';
import { GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import styled from 'styled-components';
import { IssueState } from 'types';

const ICONTITLE = {
	OPEN: 'Open issue',
	CLOSED: 'Closed issue'
};

export const ItemStatus: React.FC = () => {
	const { state } = useIssue();

	const isOpen = state === IssueState['OPEN'];
	return (
		<Wrapper isOpen={isOpen} title={ICONTITLE?.[state]}>
			{isOpen ? <GoIssueOpened /> : <GoIssueClosed />}
		</Wrapper>
	);
};

const Wrapper = styled.div<{ isOpen: boolean }>`
	color: ${({ isOpen }) => `var(--color-${isOpen ? 'danger' : 'success'})`};
	font-size: 1.25rem;
	padding-block: 0.25rem;
`;
