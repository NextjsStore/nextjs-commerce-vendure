import fetch from 'node-fetch';
import { ApolloClient,InMemoryCache,createHttpLink } from '@apollo/client';
import clientConfig from '../config/clientConfig';

const client = new  ApolloClient( {
    link: createHttpLink(  {
        uri: clientConfig.graphQlUrl,
        fetch: fetch
    }),
    cache: new InMemoryCache()
})

export default client;