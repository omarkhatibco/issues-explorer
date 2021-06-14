import { breakpoints } from 'components/theme';
import { useIssue } from 'context';
import { GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import styled from 'styled-components';
import { IssueState } from 'types';
import { getIsoDateAsRelative, getIsoDateAsString } from 'utls';

export const Heading: React.FC = () => {
	const {
		title,
		number,
		author: { login },
		createdAt,
		comments: { totalCount }
	} = useIssue();

	return (
		<Wrapper>
			<Title>
				{title} <Number>#{number}</Number>
			</Title>
			<InfoWrapper>
				<Status />
				<Info>
					<span>{login}</span> opened this issue{' '}
					<time dateTime={createdAt} title={getIsoDateAsString(createdAt)}>
						{getIsoDateAsRelative(createdAt)}
					</time>
					{totalCount > 0
						? totalCount === 1
							? ' . 1 comment'
							: ` . ${totalCount} comments`
						: null}
				</Info>
			</InfoWrapper>
		</Wrapper>
	);
};

const Status = () => {
	const { state } = useIssue();

	const isOpen = state === IssueState['OPEN'];

	return (
		<StatusWrapper isOpen={isOpen}>
			{isOpen ? <GoIssueOpened /> : <GoIssueClosed />}
			<span>{isOpen ? 'Open' : 'Closed'}</span>
		</StatusWrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	padding-block-end: 1rem;
	border-bottom: 1px solid var(--color-border);
`;

const Title = styled.h1`
	font-size: 2rem;
	line-height: 1.5;
	font-weight: 400;
`;

const Number = styled.span`
	color: var(--color-secondary);
`;

const InfoWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-block-start: 0.5rem;
	flex-direction: column;

	@media ${breakpoints.md} {
		flex-direction: row;
		align-items: center;
	}
`;
const StatusWrapper = styled.div<{ isOpen: boolean }>`
	display: flex;
	align-items: center;
	font-size: 1rem;
	color: var(--color-white);
	background-color: ${({ isOpen }) => `var(--color-${isOpen ? 'danger' : 'success'})`};
	padding-block: 0.5rem;
	padding-inline: 0.75rem;
	border-radius: 2em;

	& > span {
		padding-inline-start: 0.25rem;
	}
`;

const Info = styled.p`
	color: var(--color-secondary);
	padding-block-start: 0.5rem;
	& > span {
		font-weight: bold;
	}

	@media ${breakpoints.md} {
		padding-block-start: 0;
		padding-inline-start: 0.5rem;
	}
`;
