import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { GRAPHQL_ENDPOINT, KEY } from 'utls';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createHttpLink({
		uri: GRAPHQL_ENDPOINT,
		headers: { Authorization: `Bearer ${KEY}` }
	})
});

export default client;
