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

    client.collections("animes").delete()
    .then(function(response) {
        console.log(response);
    })
    client.collections("books").delete();
}        

main();