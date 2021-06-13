import deepClean from 'clean-deep';
import { dequal } from 'dequal';
import { useRouter } from 'next/router';

type NewQuery = {
	[key: string]: string | string[] | undefined;
};

export const useUpdateQueryParams = (): ((newQuery: NewQuery) => void) => {
	const router = useRouter();
	const { query: originalQuery, push } = router;

	const { slug, ...originalQueryParams } = originalQuery;

	const updateQuery = (newQuery: NewQuery = {}) => {
		const query = deepClean({
			...originalQueryParams,
			...newQuery
		});

		if (dequal(query, originalQuery)) {
			return;
		}

		const opts = {
			query
		};

		push(opts, undefined, { scroll: true });
	};

	return updateQuery;
};
