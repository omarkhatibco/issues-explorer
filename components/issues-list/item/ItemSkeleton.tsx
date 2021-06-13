import styled from 'styled-components';

export const ItemSkeleton: React.FC = () => {
	return (
		<Wrapper role='group'>
			<Article>
				<IconWrapper>
					<Icon />
				</IconWrapper>
				<ContentWrapper>
					<Heading />
					<Paragraph />
				</ContentWrapper>
			</Article>
		</Wrapper>
	);
};

const Wrapper = styled.li`
	background-color: var(--color-white);
	cursor: pointer;
	transition: var(--transition);
	padding-block: 1rem;
	padding-inline: 1rem;

	&:hover {
		background-color: var(--color-gray);
	}
`;

const Article = styled.article`
	width: 100%;
	display: flex;

	& > *:not(:last-child) {
		padding-inline-end: 0.5rem;
	}
`;

const IconWrapper = styled.div``;
const ContentWrapper = styled.div`
	flex-grow: 1;
`;

const Icon = styled.div`
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 100%;
	background-color: var(--color-border);
	animation: 0.8s linear 0s infinite alternate none running animation-skeleton;
`;

const Heading = styled(Icon)`
	width: 66%;
	height: 1rem;
	border-radius: 0.25rem;
	margin-inline-end: 0.25rem;
	padding-block: 0.25rem;
`;
const Paragraph = styled(Heading)`
	width: 33%;
	height: 0.75rem;
	margin-block-start: 0.25rem;
`;
