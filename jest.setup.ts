import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

Date.now = jest.fn(() => 1623715200000);

jest.mock('next/dist/client/router', () => ({
	__esModule: true,
	useRouter: () => ({
		query: {},
		pathname: '/',
		asPath: '/',
		events: {
			emit: jest.fn(),
			on: jest.fn(),
			off: jest.fn()
		},
		push: jest.fn(() => Promise.resolve(true)),
		prefetch: jest.fn(() => Promise.resolve(true)),
		replace: jest.fn(() => Promise.resolve(true))
	})
}));
