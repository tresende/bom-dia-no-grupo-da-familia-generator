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
                    response.data.items.map((item, index) => {
                        const options = {
                            url: item.link,
                            dest: `./dist/images/${index}.png`
                        }
                        download.image(options)
                            .then(({ filename, image }) => {
                                if (index == response.data.items.length - 1) {
                                    resolve();
                                }
                            })
                            .catch((err) => {
                                console.error(err)
                            })
                    });
                }).catch(() => {
                    resolve();
                });
            } catch (e) {
                resolve();
            }
        });
    }
}