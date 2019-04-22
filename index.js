const google = require('googleapis').google
const customSearch = google.customsearch('v1');
const googleSearchCredentials = require('./credentials/google-search.json');

async function fetchGoogleAndReturnImagesLinks(query) {
    const response = await customSearch.cse.list({
        auth: googleSearchCredentials.apiKey,
        cx: googleSearchCredentials.searchEngineId,
        q: query,
        searchType: 'image',
        num: 2
    })

    const imagesUrl = response.data.items.map((item) => {
        return item.link
    })

    return imagesUrl
}

fetchGoogleAndReturnImagesLinks('landscape').then(data => console.log(data))