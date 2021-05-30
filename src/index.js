import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from "@apollo/client/react";
import {App} from './app';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);