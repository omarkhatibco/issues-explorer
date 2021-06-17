const DIVISIONS = [
	{ amount: 60, name: 'seconds' },
	{ amount: 60, name: 'minutes' },
	{ amount: 24, name: 'hours' },
	{ amount: 7, name: 'days' },
	{ amount: 4.34524, name: 'weeks' },
	{ amount: 12, name: 'months' },
	{ amount: Number.POSITIVE_INFINITY, name: 'years' }
];

export const getIsoDateAsString = (dateString: string, locale = 'en-US'): string => {
	const timestamp = Date.parse(dateString);

	if (isNaN(timestamp)) {
		return '';
	}

	const date = new Date(dateString);
	return date.toLocaleString(locale);
};

export const getIsoDateAsRelative = (dateString: string, locale = 'en-US'): string => {
	const timestamp = Date.parse(dateString);

	if (isNaN(timestamp)) {
		return '';
	}

	const formatter = new Intl.RelativeTimeFormat(locale, {
		numeric: 'auto'
	});

	const date = new Date(dateString).getTime();

	let duration = (date - Date.now()) / 1000;
	for (let i = 0; i <= DIVISIONS.length; i++) {
		const division = DIVISIONS[i];
		if (Math.abs(duration) < division.amount) {
			return formatter.format(Math.round(duration), division.name as Intl.RelativeTimeFormatUnit);
		}
		duration /= division.amount;
	}
};
