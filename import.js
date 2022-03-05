const Typesense = require("typesense");


async function main() {
  let client = new Typesense.Client({
    apiKey: "xyz",
    nodes: [{
      host: "localhost",
      port: "8108",
      protocol: "http",
    }],
    connectionTimeoutSeconds: 5,
  });

  let animeSchema = {
    'name': 'animes',
    'fields': [
      {
        'name': 'title',
        'type': 'string',
        'facet': true,
      },
      {
        'name': 'tags',
        'type': 'string[]',
        'facet': true,
      },
      {
        'name': 'sources',
        'type': 'string[]',
        'facet': true,
      },
      {
        'name': 'type',
        'type': 'string',
      },
      {
        'name': 'episodes',
        'type': 'int32',
      },
      {
        name: 'status',
        type: 'string',
      }
    ]
    };

  client.collections().create(animeSchema)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  let fs = require('fs/promises');

  const animesInJsonL = await fs.readFile('anime.jsonl', 'utf8');
  client.collections('animes').documents().import(animesInJsonL);

  let searchParameters = {
    'q': 'Parade',
    'query_by': 'title',
  }

  client.collections('animes')
    .documents()
    .search(searchParameters)
    .then(function (searchResults) {
      console.log(searchResults.hits)
    })
}



main();