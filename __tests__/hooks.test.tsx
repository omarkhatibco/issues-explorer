import { act, render } from '@testing-library/react';
import { useIssuesSearch } from 'hooks';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { response } from '__mocks__';

fetchMock.mockResponseOnce(JSON.stringify(response));

describe('Hooks', () => {
	it('exposes useIssuesSearch Hooks', async () => {
		let result;
		function TestComponent() {
			result = useIssuesSearch();

			return null;
		}

		await act(async () => {
			render(<TestComponent />);
		});

		expect(result.items).toMatchObject(response.data);
	});
});
