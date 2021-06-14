import { CommentsWrapper, Heading } from 'components/single-issue';
import { Layout } from 'components/ui';
import { IssueContext } from 'context';
import client from 'libs/apollo';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ISSUE } from 'queries';
import { Issue } from 'types';
import { REPOSITORY_NAME, REPOSITORY_OWNER } from 'utls';

interface QueryResponse {
	repository: {
		issue: Issue;
	};
}

interface QueryVariables {
	owner: string;
	name: string;
	number: number;
}

const Page: NextPage<{ issue: Issue }> = ({ issue }) => {
	return (
		<Layout>
			<IssueContext.Provider value={issue}>
				<article>
					<Heading />
					<CommentsWrapper />
				</article>
			</IssueContext.Provider>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const { number } = context?.params || {};
	try {
		const { data } = await client.query<QueryResponse, QueryVariables>({
			query: ISSUE,
			variables: {
				owner: REPOSITORY_OWNER,
				name: REPOSITORY_NAME,
				number: Number(number)
			}
		});
		const {
			repository: { issue }
		} = data;

		return {
			props: {
				issue
			},
			revalidate: 60
		};
	} catch (error) {
		return {
			props: {},
			notFound: true
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	return { paths: [], fallback: 'blocking' };
};

export default Page;
