'use client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import React from 'react'

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });

const Graph = ({children}) => {
  return (
    <ApolloProvider client={client}>
    {children}
  </ApolloProvider>,
  )
}

export default Graph