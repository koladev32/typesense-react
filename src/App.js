import logo from './logo.svg';
import './App.css';
import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';
import { InstantSearch } from 'react-instantsearch-dom';
import { SearchBox } from 'react-instantsearch-dom';
import { Hits } from 'react-instantsearch-dom';

const typesenseInstanrSearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: 'xyz',
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      }
    ]
  },
  additionalSearchParameters: {
    query_by: "title",
  },
})

export function Hit({ hit }){
  return (
    <div>
      <div>
        <h1>{hit.title}</h1>
      </div>
      <div>
        <h1>{hit.sources}</h1>
      </div>
      <div>
        <h1>{hit.episodes}</h1>
      </div>
      <div>
        <h1>
          {
            hit.tags.map(tag => {
              return <div style={{ color: 'red'}}>{tag}</div>
            })
          }
        </h1>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <InstantSearch indexName='animes' searchClient={typesenseInstanrSearchAdapter.searchClient}>
        <div>
          <div>
            Main Content
          </div>
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
