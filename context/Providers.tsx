import { ApolloProvider } from '@apollo/client';
import client from 'libs/apollo';

export const Providers: React.FC = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
