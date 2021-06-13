import { useIssuesSearch, useUpdateQueryParam } from 'hooks';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { usePagination } from 'react-pagination-hook';
import styled from 'styled-components';

export const IssuePagnation: React.FC = () => {
	const [page, setPage] = useUpdateQueryParam('page');
	const { totalPages } = useIssuesSearch();

	const { activePage, visiblePieces } = usePagination({
		initialPage: page ? Number(page) : 1,
		numberOfPages: totalPages,
		maxButtons: 5
	});

	return (
		<Wrapper>
			<Nav>
				{Array.isArray(visiblePieces)
					? visiblePieces.map((props, index) => {
							const key = `${props.type}-${index}`;
							if (props.type === 'ellipsis') {
								return <Ellipsis key={key}>...</Ellipsis>;
							}

							const onClick = () => setPage(`${props.pageNumber}`);

							if (props.type === 'page-number') {
								const isActive = props.pageNumber === activePage;

								return (
									<Button
										key={key}
										type='button'
										onClick={onClick}
										isActive={isActive}
										disabled={isActive}
									>
										{props.pageNumber}
									</Button>
								);
							}

							return (
								<Button key={key} type='button' disabled={props.isDisabled} onClick={onClick}>
									{props.type === 'previous' ? <GoChevronLeft /> : null}
									{props.type === 'next' ? 'Next' : 'Previous'}
									{props.type === 'next' ? <GoChevronRight /> : null}
								</Button>
							);
					  })
					: null}
			</Nav>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	border-top: 1px solid var(--color-border);
	background-color: var(--color-gray);
	border-bottom-right-radius: 0.5em;
	border-bottom-left-radius: 0.5em;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: center;
`;

const Button = styled.button<{ isActive?: boolean }>`
	appearance: none;
	padding: 0.5rem;
	line-height: 1;
	display: inline-flex;
	align-items: center;
	font-size: 1rem;
	margin-inline: 0.5rem;
	background-color: ${({ isActive }) => (isActive ? 'var(--color-link)' : 'var(--color-white)')};
	color: ${({ isActive }) => (isActive ? 'var(--color-white)' : 'var(--color-black)')};
	cursor: pointer;
	border-width: 1px;
	border-color: ${({ isActive }) => (isActive ? 'var(--color-link)' : 'transparent')};
	border-radius: 0.25em;

	&:hover:not(:disabled) {
		border-color: ${({ isActive }) => (isActive ? 'var(--color-link)' : 'var(--color-border)')};
	}

	&:disabled {
		pointer-events: none;
		cursor: default;
		color: ${({ isActive }) => (isActive ? 'var(--color-white)' : 'var(--color-border)')};
	}
`;

const Ellipsis = styled.span`
	line-height: 1;
	padding: 0.5rem;
	line-height: 1;
	display: inline-flex;
	font-size: 1rem;
	margin-inline: 0.5rem;
`;
