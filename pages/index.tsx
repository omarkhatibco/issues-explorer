import { IssuesList } from 'components/issues-list';
import { Layout } from 'components/ui';
import { NextPage } from 'next';

const Page: NextPage = () => {
	return (
		<Layout>
			<IssuesList />
		</Layout>
	);
};

export default Page;
