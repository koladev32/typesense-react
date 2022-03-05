import "./App.css";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import { InstantSearch } from "react-instantsearch-dom";
import { Hits } from "react-instantsearch-dom";
import { Hit } from "./components/Card";
import CustomSearchBox from "./components/SearchBox";
import { RefinementList } from "react-instantsearch-dom";
import { Configure } from "react-instantsearch-dom";
import { Pagination } from "react-instantsearch-dom";

const typesenseInstanrSearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title",
  },
});

function App() {
  return (
    <div>
      <InstantSearch
        indexName="animes"
        searchClient={typesenseInstanrSearchAdapter.searchClient}
      >
        <Configure hitsPerPage={9} />
        <div className="flex flex-row">
          <RefinementList className="mt-8" attribute="tags" />
          <div className="flex flex-col space-y-3 w-10/12">
            <div className="text-center text-2xl font-bold  text-blue-700">
              Search for animes here
            </div>
            <div className="self-center w-1/4">
              <CustomSearchBox />
            </div>
            <Hits hitComponent={Hit} />
            <Pagination className="flex flex-row justify-center mb-10" />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
