import { breakpoints } from 'components/theme';
import styled from 'styled-components';
import { IssueState } from 'types';
import { getFontColorFromBackground, getIsoDateAsRelative, getIsoDateAsString } from 'utls';
import { useItem } from './';

export const ItemContent: React.FC = () => {
	const {
		title,
		number,
		author: { login }
	} = useItem();
	return (
		<Wrapper>
			<TitleWrapper>
				<Title>{title}</Title>
				<Labels />
			</TitleWrapper>

			<Info>
				#{number}
				<CreatedInfo />
				by {login}
				<ClosedInfo />
			</Info>
		</Wrapper>
	);
};

const Labels: React.FC = () => {
	const {
		labels: { totalCount, nodes }
	} = useItem();

	if (totalCount === 0) {
		return null;
	}

	return (
		<LabelsWrapper>
			{Array.isArray(nodes)
				? nodes.map(({ id, color, name }) => (
						<Label key={id} bgColor={color}>
							{name}
						</Label>
				  ))
				: null}
		</LabelsWrapper>
	);
};

const CreatedInfo: React.FC = () => {
	const { createdAt, state } = useItem();

	if (state === IssueState['CLOSED']) {
		return null;
	}

	return (
		<>
			{' '}
			Opened{' '}
			<time dateTime={createdAt} title={getIsoDateAsString(createdAt)}>
				{getIsoDateAsRelative(createdAt)}
			</time>{' '}
		</>
	);
};

const ClosedInfo: React.FC = () => {
	const { closedAt, state } = useItem();

	if (state === IssueState['OPEN']) {
		return null;
	}

	return (
		<>
			{' '}
			was closed{' '}
			<time dateTime={closedAt} title={getIsoDateAsString(closedAt)}>
				{getIsoDateAsRelative(closedAt)}
			</time>
		</>
	);
};

const Wrapper = styled.div`
	flex-grow: 1;
`;
const TitleWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 100%;
`;
const LabelsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	& > *:not(:last-child) {
		margin-block-end: 0.25rem;
	}

	@media ${breakpoints.md} {
		& > *:not(:last-child) {
			margin-block-end: 0;
			margin-inline-end: 0.25rem;
		}
	}
`;

const Label = styled.label<{ bgColor?: string }>`
	font-size: 0.75rem;
	line-height: 1;
	border-radius: 2em;
	font-weight: 500;
	padding-block: 0.125rem;
	padding-inline: 0.5rem;
	background-color: ${({ bgColor }) => `#${bgColor}` || 'var(--color-gray)'};
	color: ${({ bgColor }) => `var(--color-${getFontColorFromBackground(bgColor)})`};
`;

const Title = styled.h1`
	color: var(--color-primary);
	font-weight: bold;
	transition: var(--transition);
	margin-inline-end: 0.25rem;
	padding-block: 0.25rem;

	[role='group']:hover & {
		color: var(--color-link);
	}
`;

const Info = styled.p`
	font-size: 0.825rem;
	color: var(--color-secondary);
	margin-top: 0.25rem;
`;
