const Jimp = require("jimp");
const fs = require('fs');

module.exports = {
    writeOnImage: async () => {
        return await new Promise((resolve, reject) => {
            try {
                const path = './public/images/';
                Jimp.read(path + 'main.png').then(src => {
                    fs.readdir(path, (err, items) => {
                        items.map((file, index) => {
                            const fileName = path + file;
                            if (file == 'main.png')
                                return;
                            Jimp.read(fileName)
                                .then((image) => {
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
                                .then(() => {
                                    //DS store no mac
                                    if (index == items.length - 1) {
                                        resolve()
                                    }
                                }).catch((e) => {
                                    resolve()
                                });
                        });
                    });
                }).catch((e) => {
                    resolve()
                });
            } catch (error) {
                resolve()
            }
        });
    }
}