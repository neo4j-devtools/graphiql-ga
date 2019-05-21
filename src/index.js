import React from 'react';
import ReactDOM from 'react-dom';

import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import 'graphiql/graphiql.css';
import './index.css';

const url = new URL(window.location.href);
const apiEndpoint = url.searchParams.get('neo4jDesktopApiUrl');
const apiClientId = url.searchParams.get('neo4jDesktopGraphAppClientId');

function graphQLFetcher(graphQLParams) {
    return fetch(apiEndpoint, {
      method: 'post',
      headers: { 
                  'Content-Type': 'application/json',
                  'ClientId': apiClientId
               },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }

const defaultQuery = `
query {
    workspace {
      me {
          name
      }
    }
  }
`;
  
const App = (props) => (
    <GraphiQL 
        fetcher={graphQLFetcher}
        defaultQuery={defaultQuery}
    >

    </GraphiQL>
)

ReactDOM.render(
        <App />
    ,
    document.getElementById('root')
);

