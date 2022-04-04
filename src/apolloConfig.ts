import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: 'https://vortex.worldofwarships.ru/api/graphql/glossary/'
});