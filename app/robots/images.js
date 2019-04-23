const google = require('googleapis').google
const download = require('image-downloader')
const customSearch = google.customsearch('v1');

module.exports = {
    getImages: async (query) => {
        return await new Promise((resolve, reject) => {
            customSearch.cse.list({
                auth: process.env.apiKey,
                cx: process.env.searchEngineId,
                q: query,
                searchType: 'image',
                num: 2
            }).then(response => {
                response.data.items.map((item, index) => {
                    const options = {
                        url: item.link,
                        dest: `./public/images/${index}.png`
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
            });
        });
    }
}