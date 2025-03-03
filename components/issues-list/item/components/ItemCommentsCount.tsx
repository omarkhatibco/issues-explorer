import { breakpoints } from 'components/theme';
import { useIssue } from 'context';
import { GoComment } from 'react-icons/go';
import styled from 'styled-components';

export const ItemCommentsCount: React.FC = () => {
	const {
		comments: { totalCount }
	} = useIssue();

	if (!totalCount || totalCount === 0) {
		return null;
	}

	return (
		<Wrapper title={totalCount === 1 ? '1 comment' : `${totalCount} comments`}>
			<GoComment />
			<Count data-testid='comments-count'>{totalCount}</Count>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-block: 0.25rem;
	display: none;
	font-size: 1.25rem;
	color: var(--color-secondary);
	align-items: center;

	@media ${breakpoints.md} {
		display: flex;
	}
`;

const Count = styled.span`
	padding-inline-start: 0.25rem;
	font-size: 0.75rem;
	font-weight: 500;
`;
