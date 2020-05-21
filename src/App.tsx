import React from 'react';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.min.css';
const url = new URL(window.location.href);
const relateApiEndpoint = url.searchParams.get('neo4jDesktopApiUrl');
const relateApiClientId = url.searchParams.get('neo4jDesktopGraphAppClientId');

const relateApiIsAvailable = (relateApiClientId !== null);

const graphQLEndpoint = relateApiEndpoint || 'https://movies.grandstack.io/';

const relateApiQuery = `query {
  workspace {
    projects {
      name
    }
  }
}`;

const movieApiQuery = `query {
  Movie(filter: {title_contains: "River Runs Through It"}) {
    title
    plot
    year
    actors {
      name
    }
  }
}
`

const initialGraphQLQuery = relateApiIsAvailable ? relateApiQuery : movieApiQuery;

const App = () => (
  <GraphiQL
    fetcher={async (graphQLParams:any) => {
      const data = await fetch(
        graphQLEndpoint,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'ClientId': relateApiClientId || 'missing client id'
          },
          body: JSON.stringify(graphQLParams),
          credentials: 'same-origin',
        },
      );
      return data.json().catch(() => data.text());
    }}
    query={initialGraphQLQuery}
  />
);

export default App;
