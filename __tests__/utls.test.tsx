import { getFontColorFromBackground, getIsoDateAsRelative, getIsoDateAsString } from 'utls';

describe('getFontColorFromBackground', () => {
	it('should return the white for #292929', () => {
		expect(getFontColorFromBackground('#292929')).toEqual('white');
	});
	it('should return the black for #fafafa', () => {
		expect(getFontColorFromBackground('#fafafa')).toEqual('black');
	});
	it('should return the black for #aaccff', () => {
		expect(getFontColorFromBackground('#aaccff')).toEqual('black');
	});
	it('should return fail and return black', () => {
		expect(getFontColorFromBackground()).toEqual('black');
	});
	it('should return fail and return white', () => {
		expect(getFontColorFromBackground('acf')).toEqual('white');
	});
});

describe('getIsoDateAsString', () => {
	it('should return 6/17/2021, 1:19:42 AM', () => {
		expect(getIsoDateAsString('2021-06-16T23:19:42Z')).toEqual('6/17/2021, 1:19:42 AM');
	});
	it('should return 6/15/2021, 7:07:37 PM', () => {
		expect(getIsoDateAsString('2021-06-15T17:07:37Z')).toEqual('6/15/2021, 7:07:37 PM');
	});
	it('should fail and return empty string', () => {
		expect(getIsoDateAsString('20210616T231942Z')).toEqual('');
	});
});

describe('getIsoDateAsRelative', () => {
	it('should return now', () => {
		expect(getIsoDateAsRelative('2021-06-15T00:00:00Z')).toEqual('now');
	});

	it('should return 10 seconds ago', () => {
		expect(getIsoDateAsRelative('2021-06-14T23:59:50Z')).toEqual('10 seconds ago');
	});
	it('should return 15 minutes ago', () => {
		expect(getIsoDateAsRelative('2021-06-14T23:45:00Z')).toEqual('15 minutes ago');
	});
	it('should return 3 hours ago', () => {
		expect(getIsoDateAsRelative('2021-06-14T21:00:00Z')).toEqual('3 hours ago');
	});
	it('should return 3 days ago', () => {
		expect(getIsoDateAsRelative('2021-06-12T00:00:00Z')).toEqual('3 days ago');
	});
	it('should return weeks', () => {
		expect(getIsoDateAsRelative('2021-05-26T00:00:00Z')).toEqual('3 weeks ago');
	});
	it('should return 4 months ago', () => {
		expect(getIsoDateAsRelative('2021-02-15T00:00:00Z')).toEqual('4 months ago');
	});
	it('should return 3 years ago', () => {
		expect(getIsoDateAsRelative('2018-05-15T00:00:00Z')).toEqual('3 years ago');
	});

	it('should fail and return empty string', () => {
		expect(getIsoDateAsRelative('20210616T231942Z')).toEqual('');
	});
});
