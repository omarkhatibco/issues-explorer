import { createContext, useContext } from 'react';
import { Issue } from 'types';

export const ItemContext = createContext<Partial<Issue>>({});

export const useItem = () => {
	return useContext(ItemContext);
};
