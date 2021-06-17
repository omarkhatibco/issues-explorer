import { act, render, screen } from '@testing-library/react';
import { Item } from 'components/issues-list/item/Item';
import React from 'react';
import { response } from '__mocks__';

describe('Single Issue', () => {
	const props = response.data.search.nodes[0];

	it('matches snapshot', async () => {
		await act(async () => {
			const { container } = render(<Item {...props} />);

			expect(container).toMatchSnapshot();
		});
	});

	it('renders elements correctly', async () => {
		render(<Item {...props} />);
		const title = screen.getByTestId('title');
		expect(title).toHaveTextContent(props.title);

		const commentsCount = screen.getByTestId('comments-count');
		expect(commentsCount).toHaveTextContent(`${props.comments.totalCount}`);
	});
});
