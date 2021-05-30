
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

    type Child {
        name: String
        dateOfBirth: String
        gender: String
    }

    type Query {
        children: [Child]
    }
`;

const children = [
    {
        name: 'Graeme McRobert',
        dateOfBirth: '27/09/1967',
        gender: 'male'
    },
    {
        name: 'Nala McRobert',
        dateOfBirth: '21/09/1967',
        gender: 'female'
    },
    {
        name: 'Reuben McRobert',
        dateOfBirth: '03/10/2000',
        gender: 'male'
    },
    {
        name: 'Bethany McRobert',
        dateOfBirth: '13/11/2003',
        gender: 'male'
    },
    {
        name: 'Lauren McRobert',
        dateOfBirth: '03/10/2007',
        gender: 'male'
    },
];

const resolvers = {
    Query: {
        children: () => children,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});