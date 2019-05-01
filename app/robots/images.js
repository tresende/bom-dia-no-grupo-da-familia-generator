const google = require('googleapis').google
const download = require('image-downloader')
const customSearch = google.customsearch('v1');

module.exports = {
    getImages: async (query) => {
        return await new Promise((resolve, reject) => {
            try {
                customSearch.cse.list({
                    auth: process.env.apiKey,
                    cx: process.env.searchEngineId,
                    q: query,
                    searchType: 'image',
                    num: process.env.images
                }).then(response => {
                    const promises = [];
                    response.data.items.map((item, index) => {
                        const options = {
                            url: item.link,
                            dest: `./dist/images/${index}.png`
                        }
                        let imageFuture = download.image(options);
                        promises.push(imageFuture);
                    });
                    Promise.all(promises).then((values) => resolve());
                }).catch(() => {
                    resolve();
                });
            } catch (e) {
                resolve();
            }
        });
    }
}