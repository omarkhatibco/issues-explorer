import { useIssuesSearch } from 'hooks';
import styled from 'styled-components';
import { IssuePagnation, Item, ItemSkeleton, SearchBar } from './';

export const IssuesList: React.FC = () => {
	const { items, isLoading, perPage } = useIssuesSearch();

	return (
		<Wrapper>
			<SearchBar />
			<List>
				{isLoading &&
					Array(perPage)
						.fill('')
						.map((_, index) => <ItemSkeleton key={index * -1} />)}

				{!isLoading && Array.isArray(items)
					? items?.map(props => <Item key={props.number} {...props} />)
					: null}
			</List>
			<IssuePagnation />
		</Wrapper>
	);
};

const Wrapper = styled.section`
	border: 1px solid var(--color-border);
	border-radius: 0.5em;
`;

const List = styled.ul`
	display: grid;

	& > *:not(:last-child) {
		border-bottom: 1px solid var(--color-border);
	}

	& > *:last-child {
		border-bottom-right-radius: 0.5em;
		border-bottom-left-radius: 0.5em;
	}
`;
