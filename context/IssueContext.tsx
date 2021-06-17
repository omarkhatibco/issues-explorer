import React, { useContext } from 'react';
import { Issue } from 'types';

export const IssueContext = React.createContext<Partial<Issue>>({});

export const useIssue = (): Partial<Issue> => {
	return useContext(IssueContext);
};
