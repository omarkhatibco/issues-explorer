import { gql } from '@apollo/client';

export const ISSUESSEARCH = gql`
	query Search($query: String!, $first: Int!, $after: String) {
		search(query: $query, type: ISSUE, first: $first, after: $after) {
			issueCount
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			nodes {
				... on Issue {
					number
					title
					state
					closedAt
					createdAt
					comments {
						totalCount
					}
					author {
						login
					}
					labels(first: 10) {
						totalCount
						nodes {
							id
							name
							color
						}
					}
				}
			}
		}
	}
`;
