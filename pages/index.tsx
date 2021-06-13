import { IssuesList } from 'components/issues-list';
import { Container, Heading, Main } from 'components/ui';
import { NextPage } from 'next';

const Page: NextPage = () => {
	return (
		<Main>
			<Container>
				<Heading>React Issues Explorer</Heading>
				<IssuesList />
			</Container>
		</Main>
	);
};

export default Page;
