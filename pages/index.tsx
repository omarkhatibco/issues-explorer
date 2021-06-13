import { IssuePagnation, Item, SearchBar } from 'components/issues-list';
import { Container, Heading, Main } from 'components/ui';
import { useIssuesSearch } from 'hooks';
import { NextPage } from 'next';
import styled from 'styled-components';

const Page: NextPage = () => {
	const { items } = useIssuesSearch();

	return (
		<Main>
			<Container>
				<Heading>React Issues Explorer</Heading>
				<IssuesTable>
					<SearchBar />
					<IssuesList>
						{Array.isArray(items)
							? items?.map(props => <Item key={props.number} {...props} />)
							: null}
					</IssuesList>
					<IssuePagnation />
				</IssuesTable>
			</Container>
		</Main>
	);
};

const IssuesTable = styled.section`
	border: 1px solid var(--color-border);
	border-radius: 0.5em;
`;

const IssuesList = styled.ul`
	display: grid;

	& > *:not(:last-child) {
		border-bottom: 1px solid var(--color-border);
	}

	& > *:last-child {
		border-bottom-right-radius: 0.5em;
		border-bottom-left-radius: 0.5em;
	}
`;

export default Page;
