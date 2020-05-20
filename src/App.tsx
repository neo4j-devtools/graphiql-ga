import React from 'react';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.min.css';
const url = new URL(window.location.href);
const apiEndpoint = url.searchParams.get('neo4jDesktopApiUrl');
const apiClientId = url.searchParams.get('neo4jDesktopGraphAppClientId');

const App = () => (
  <GraphiQL
    fetcher={async (graphQLParams:any) => {
      const data = await fetch(
        apiEndpoint || 'https://countries.trevorblades.com/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'ClientId': apiClientId || 'missing client id'
          },
          body: JSON.stringify(graphQLParams),
          credentials: 'same-origin',
        },
      );
      return data.json().catch(() => data.text());
    }}
  />
);

export default App;
