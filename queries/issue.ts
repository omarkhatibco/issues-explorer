import { gql } from '@apollo/client';

export const ISSUE = gql`
	query Issue($owner: String!, $name: String!, $number: Int!) {
		repository(owner: $owner, name: $name) {
			issue(number: $number) {
				number
				title
				createdAt
				state
				bodyHTML
				author {
					avatarUrl
					login
				}
				comments(first: 100) {
					totalCount
					nodes {
						id
						bodyHTML
						createdAt
						author {
							avatarUrl
							login
						}
					}
				}
			}
		}
	}
`;
