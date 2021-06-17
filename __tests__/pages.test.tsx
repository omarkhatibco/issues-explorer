import { render } from '@testing-library/react';
import { Providers } from 'context';
import fetchMock from 'jest-fetch-mock';
import HomePage from 'pages/index';
import IssuePage from 'pages/[number]';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { response, singleResponse } from '__mocks__';

describe('Home page', () => {
	fetchMock.mockResponseOnce(JSON.stringify(response));
	it('should matches snapshot', async () => {
		await act(async () => {
			const { container } = await render(
				<Providers>
					<HomePage />
				</Providers>
			);
			expect(container).toMatchSnapshot();
		});
	});
});

describe('Issue Page', () => {
	fetchMock.mockResponseOnce(JSON.stringify(singleResponse));
	it('should matches snapshot', async () => {
		const { container } = render(<IssuePage issue={singleResponse.data.repository.issue} />);
		expect(container).toMatchSnapshot();
	});
});
