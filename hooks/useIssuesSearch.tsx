import { useQuery } from '@apollo/client';
import { useQueryParam } from 'hooks';
import { ISSUESSEARCH } from 'queries';
import { IssuesSearch } from 'types';
import { PERPAGE, REPOSITORY_NAME, REPOSITORY_OWNER } from 'utls';

interface QueryResponse {
	search: IssuesSearch;
}

interface QueryVariables {
	query: string;
	after?: string;
	first: number;
}

export const useIssuesSearch = () => {
	const page = useQueryParam('page', '1');
	const search = useQueryParam('q');
	const status = useQueryParam('status', 'open');

	const query = [
		`repo:${REPOSITORY_OWNER}/${REPOSITORY_NAME}`,
		'is:issue',
		...(search ? [`${search} in:title,body`] : []),
		`is:${status}`
	];

	const {
		data,
		previousData,
		loading: isLoading,
		error
	} = useQuery<QueryResponse, QueryVariables>(ISSUESSEARCH, {
		variables: {
			first: PERPAGE,
			query: query.join(' '),
			after: Number(page) === 1 ? undefined : btoa(`cursor:${PERPAGE * (Number(page) - 1)}`)
		}
	});

	const issueCounts = data?.search?.issueCount || previousData?.search?.issueCount || 0;

	const totalPages = Math.ceil(issueCounts / PERPAGE);
	return {
		items: data?.search?.nodes || [],
		isLoading,
		isError: Boolean(error),
		totalPages
	};
};
