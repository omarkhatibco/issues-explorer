import { useQuery } from '@apollo/client';
import { useUpdateQueryParam } from 'hooks';
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
	const [currentPage] = useUpdateQueryParam('page');
	const page = Number(currentPage) || 1;
	const {
		data,
		loading: isLoading,
		error
	} = useQuery<QueryResponse, QueryVariables>(ISSUESSEARCH, {
		variables: {
			first: PERPAGE,
			query: `repo:${REPOSITORY_OWNER}/${REPOSITORY_NAME} is:issue is:open`,
			after: page === 1 ? undefined : btoa(`cursor:${PERPAGE * (page - 1)}`)
		}
	});

	const issueCounts = data?.search?.issueCount || 0;

	const totalPages = Math.ceil(issueCounts / PERPAGE);
	return {
		items: data?.search?.nodes || [],
		isLoading,
		isError: Boolean(error),
		totalPages
	};
};
