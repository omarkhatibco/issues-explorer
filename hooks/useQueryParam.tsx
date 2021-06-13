import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useQueryParam = (
	key: string,
	defaultValue?: string
): string | string[] | undefined => {
	const router = useRouter();

	const value = useMemo(() => {
		const res = router.asPath.match(new RegExp('[?&]' + key + '=([^&#]*)')) || [];

		return res[1];
	}, [router.asPath]);

	return value ? decodeURIComponent(value) : defaultValue;
};
