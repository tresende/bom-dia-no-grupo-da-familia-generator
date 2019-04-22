const express = require("express");
const cfenv = require("cfenv");

var app = express();

app.use(express.static(__dirname + "/public"));
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, "0.0.0.0", () => console.log(`server starting on ${appEnv.url}`));
// const google = require('googleapis').google
// const customSearch = google.customsearch('v1');
// const googleSearchCredentials = require('./credentials/google-search.json');

// async function fetchGoogleAndReturnImagesLinks(query) {
//     const response = await customSearch.cse.list({
//         auth: googleSearchCredentials.apiKey,
//         cx: googleSearchCredentials.searchEngineId,
//         q: query,
//         searchType: 'image',
//         num: 2
//     })

//     const imagesUrl = response.data.items.map((item) => {
//         return item.link
//     })

//     return imagesUrl
// }

// fetchGoogleAndReturnImagesLinks('landscape').then(data => console.log(data))