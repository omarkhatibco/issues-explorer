import { breakpoints } from 'components/theme';
import { useIssue } from 'context';
import styled from 'styled-components';
import { Comment } from './';

export const CommentsWrapper: React.FC = () => {
	const {
		author,
		bodyHTML,
		createdAt,
		comments: { nodes }
	} = useIssue();
	const issueProps = { author, bodyHTML, createdAt };

	return (
		<Wrapper>
			<CommentsList>
				<Comment {...issueProps} />
				{Array.isArray(nodes) ? nodes.map(props => <Comment key={props.id} {...props} />) : null}
			</CommentsList>
			<Aside></Aside>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-block: 2rem;
	display: flex;

	@media ${breakpoints.md} {
		& > *:not(:last-child) {
			margin-inline-end: 2rem;
		}
	}
`;

const CommentsList = styled.ul`
	flex: 1;
	display: grid;
	grid-gap: 2rem;
`;
const Aside = styled.aside`
	display: none;
	width: 25%;
	height: 100%;
`;
