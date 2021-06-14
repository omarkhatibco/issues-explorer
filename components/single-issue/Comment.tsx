import { breakpoints } from 'components/theme';
import styled from 'styled-components';
import { IssueComment } from 'types';
import { getIsoDateAsRelative } from 'utls';

export const Comment: React.FC<Partial<IssueComment>> = ({
	bodyHTML,
	createdAt,
	author: { avatarUrl, login }
}) => {
	return (
		<Wrapper>
			<AvaterWrapper>
				<Avater src={avatarUrl} alt={login} />
			</AvaterWrapper>
			<Content>
				<Heading>
					<span>{login}</span> commented {getIsoDateAsRelative(createdAt)}
				</Heading>
				<Body dangerouslySetInnerHTML={{ __html: bodyHTML }} />
			</Content>
		</Wrapper>
	);
};

const Wrapper = styled.li`
	display: flex;
	min-width: 0;
`;

const AvaterWrapper = styled.div`
	display: none;
	@media ${breakpoints.md} {
		display: block;
	}
`;

const Avater = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 100%;
	border: 1px solid var(--color-border);
`;

const Content = styled.div`
	flex-grow: 1;
	border: 1px solid var(--color-border);
	border-radius: 0.5em;

	min-width: 0;

	@media ${breakpoints.md} {
		margin-inline-start: 1rem;
	}
`;

const Heading = styled.h2`
	position: relative;
	padding-block: 0.75rem;
	padding-inline: 1rem;
	display: flex;
	border-top: 1px solid var(--color-border);
	background-color: var(--color-gray);
	color: var(--color-secondary);
	border-top-right-radius: 0.5em;
	border-top-left-radius: 0.5em;
	font-size: 0.9375rem;
	font-weight: 400;

	& > span {
		font-weight: 500;
		padding-inline-end: 0.25rem;
	}

	&:before {
		content: '';
		display: none;
		width: 1rem;
		height: 1rem;
		background-color: var(--color-gray);
		border: 1px solid var(--color-border);
		border-top-color: transparent;
		border-right-color: transparent;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate3d(-50%, -50%, 0) rotate(45deg);
		@media ${breakpoints.md} {
			display: block;
		}
	}
`;

const Body = styled.div`
	padding-block: 1rem;
	padding-inline: 1rem;
	line-height: 1.5;
	font-size: 0.9375rem;
	word-wrap: break-word;

	& > *:not(:last-child) {
		margin-block-end: 1rem;
	}

	& h1 {
		font-size: 2rem;
	}
	& h2 {
		font-size: 1.5rem;
	}
	& h3 {
		font-size: 1.25em;
	}
	& h4 {
		font-size: 1em;
	}
	& h5 {
		font-size: 0.875em;
	}
	& h6 {
		font-size: 0.75em;
	}

	& ol {
		list-style: decimal;
	}
	& ul {
		list-style: disc;
	}
	& li {
		margin-inline-start: 1rem;
	}

	& pre {
		padding: 1rem;
		overflow: auto;
		font-size: 0.85em;
		line-height: 1.5;
		background-color: var(--color-gray);
		border-radius: 0.5rem;
		word-wrap: normal;
	}

	& blockquote {
		padding-inline: 1rem;
		color: var(--color-text-border);
		border-left: 0.25em solid var(--color-border);
	}

	& a {
		text-decoration: none;
		color: var(--color-link);
		word-break: break-all;
	}

	& code,
	& tt {
		padding: 0.2em 0.5em;
		background-color: var(--color-gray);
		border-radius: 0.5rem;
	}
`;
