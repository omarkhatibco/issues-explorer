import styled from 'styled-components';
import { Issue } from 'types';
import { ItemCommentsCount, ItemContent, ItemContext, ItemStatus } from './components';

export const Item: React.FC<Issue> = props => {
	return (
		<ItemContext.Provider value={props}>
			<Wrapper role='group'>
				<Article>
					<ItemStatus />
					<ItemContent />
					<ItemCommentsCount />
				</Article>
			</Wrapper>
		</ItemContext.Provider>
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
