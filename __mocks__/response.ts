import { SearchQueryResponse } from 'types';

interface Response {
	data: SearchQueryResponse;
}

export const response: Response = {
	data: {
		search: {
			issueCount: 542,
			pageInfo: {
				hasNextPage: true,
				hasPreviousPage: false,
				__typename: 'PageInfo'
			},
			nodes: [
				{
					number: 21695,
					title: '[DevTools Bug]: Long keys overlap',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-16T20:57:00Z',
					comments: {
						totalCount: 1,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'MinimumViablePerson',
						__typename: 'User'
					},
					labels: {
						totalCount: 4,
						nodes: [
							{
								id: 'MDU6TGFiZWw3MTA1NzM1OTU=',
								name: 'Component: Developer Tools',
								color: 'fbca04',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw2MjAzNjg0MDc=',
								name: 'Resolution: Needs More Information',
								color: 'fffde7',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw0MDkyOTE1MQ==',
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21693,
					title: 'Allow customization of Dom validation',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-16T17:27:00Z',
					comments: {
						totalCount: 0,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'stevemk14ebr',
						__typename: 'User'
					},
					labels: {
						totalCount: 1,
						nodes: [
							{
								id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21692,
					title: 'Bug: memory leak in useReducer',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-16T16:11:17Z',
					comments: {
						totalCount: 1,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'onnlucky',
						__typename: 'User'
					},
					labels: {
						totalCount: 1,
						nodes: [
							{
								id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21685,
					title: 'Bug: Webpack process and setImmediate polyfill interferes with time slicing',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-15T17:07:37Z',
					comments: {
						totalCount: 0,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'gaearon',
						__typename: 'User'
					},
					labels: {
						totalCount: 3,
						nodes: [
							{
								id: 'MDU6TGFiZWwxMjA1MDg3MTI3',
								name: 'Component: Concurrent Features',
								color: 'ffccd3',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWwzMDc5MDUzOTE5',
								name: 'React 18',
								color: '26B0E4',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw0MDkyOTE1MQ==',
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21674,
					title: 'React 18: react-router@v5 is breaking in the Strict Mode (strict effects)',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-14T03:43:07Z',
					comments: {
						totalCount: 5,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'Jack-Works',
						__typename: 'User'
					},
					labels: {
						totalCount: 2,
						nodes: [
							{
								id: 'MDU6TGFiZWwzMDc5MDUzOTE5',
								name: 'React 18',
								color: '26B0E4',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
								name: 'Type: Discussion',
								color: 'fef2c0',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21668,
					title: 'Question: Transition starvation in React 18?',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-12T10:25:53Z',
					comments: {
						totalCount: 0,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'Ephem',
						__typename: 'User'
					},
					labels: {
						totalCount: 2,
						nodes: [
							{
								id: 'MDU6TGFiZWwzMDc5MDUzOTE5',
								name: 'React 18',
								color: '26B0E4',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
								name: 'Type: Discussion',
								color: 'fef2c0',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21664,
					title: 'Feedback on startTransition/useTransition syntax',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-11T15:42:43Z',
					comments: {
						totalCount: 1,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'stefanhamburger',
						__typename: 'User'
					},
					labels: {
						totalCount: 2,
						nodes: [
							{
								id: 'MDU6TGFiZWwzMDc5MDUzOTE5',
								name: 'React 18',
								color: '26B0E4',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
								name: 'Type: Discussion',
								color: 'fef2c0',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21662,
					title: 'Concurrency / time-slicing by default',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-11T09:32:25Z',
					comments: {
						totalCount: 7,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'rybon',
						__typename: 'User'
					},
					labels: {
						totalCount: 2,
						nodes: [
							{
								id: 'MDU6TGFiZWwzMDc5MDUzOTE5',
								name: 'React 18',
								color: '26B0E4',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
								name: 'Type: Discussion',
								color: 'fef2c0',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21645,
					title: 'Backport releases on GitHub have incorrect tarballs',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-08T09:57:08Z',
					comments: {
						totalCount: 0,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'evoL',
						__typename: 'User'
					},
					labels: {
						totalCount: 1,
						nodes: [
							{
								id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				},
				{
					number: 21636,
					title:
						'[DevTools Bug] Cannot add node "476" because a node with that id is already in the Store.',
					state: 'OPEN',
					closedAt: null,
					createdAt: '2021-06-07T06:52:01Z',
					comments: {
						totalCount: 8,
						__typename: 'IssueCommentConnection'
					},
					author: {
						login: 'Bodyhealer',
						__typename: 'User'
					},
					labels: {
						totalCount: 4,
						nodes: [
							{
								id: 'MDU6TGFiZWw3MTA1NzM1OTU=',
								name: 'Component: Developer Tools',
								color: 'fbca04',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw2MjAzNjg0MDc=',
								name: 'Resolution: Needs More Information',
								color: 'fffde7',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
								name: 'Status: Unconfirmed',
								color: 'd4c5f9',
								__typename: 'Label'
							},
							{
								id: 'MDU6TGFiZWw0MDkyOTE1MQ==',
								name: 'Type: Bug',
								color: 'b60205',
								__typename: 'Label'
							}
						],
						__typename: 'LabelConnection'
					},
					__typename: 'Issue'
				}
			],
			__typename: 'SearchResultItemConnection'
		}
	}
};
