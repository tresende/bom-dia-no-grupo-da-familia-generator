const Jimp = require("jimp");
const fs = require('fs');

module.exports = {
    writeOnImage: async () => {
        return await new Promise((resolve, reject) => {
            try {
                const path = './dist/images/';
                Jimp.read(path + 'main.png').then(src => {
                    const promises = [];
                    fs.readdir(path, (err, items) => {
                        items.map((file, index) => {
                            const fileName = path + file;
                            if (file == 'main.png')
                                return;
                            var textFuture = Jimp.read(fileName)
                                .then((image) => {
                                    console.log(fileName);
                                    image.resize(800, Jimp.AUTO)
                                        .quality(50)
                                        .write(fileName);
                                    return image;
                                })
                                .then((image) => {
                                    image.composite(src, 0, 200)
                                        .write(fileName);
                                    return image;
                                })
                                .catch((e) => {
                                });
                            promises.push(textFuture);
                        });
                        Promise.all(promises).then((values) => resolve());
                    });
                })
            } catch (e) {
                resolve();
            }
        });
    }
}