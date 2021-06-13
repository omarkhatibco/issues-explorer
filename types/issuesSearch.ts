export enum IssueState {
	OPEN = 'OPEN',
	CLOSED = 'CLOSED'
}

export interface IssuesSearch {
	issueCount: number;
	pageInfo: PageInfo;
	nodes: Issue[];
}

export interface PageInfo {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	startCursor?: string;
	endCursor?: string;
}

export interface Issue {
	number: number;
	title: string;
	state: IssueState;
	closedAt: string;
	createdAt: string;
	comments: IssueCommentConnection;
	author: IssueAuthor;
	labels: IssueLabelConnection;
}
export interface Label {
	id: string;
	name: string;
	color: string;
}

export interface IssueCommentConnection {
	totalCount: number;
}
export interface IssueAuthor {
	login: string;
}
export interface IssueLabelConnection {
	totalCount: number;
	nodes: Label[];
}
