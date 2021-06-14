import { createContext, useContext } from 'react';
import { Issue } from 'types';

export const IssueContext = createContext<Partial<Issue>>({});

export const useIssue = (): Partial<Issue> => {
	return useContext(IssueContext);
};
