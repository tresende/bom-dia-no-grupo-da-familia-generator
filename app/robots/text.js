const Jimp = require("jimp");
const fs = require('fs');

var imageCaption = 'Bom Dia!';

module.exports = {
    writeOnImage: async () => {
        return await new Promise((resolve, reject) => {
            const path = './public/images/';
            fs.readdir(path, (err, items) => {
                items.map(file => {
                    const fileName = path + file;
                    Jimp.read(fileName)
                        .then((image) => {
                            image.resize(800, Jimp.AUTO)
                                .quality(50)
                                .write(fileName);
                            return image;
                        })
                        // .then((image) => {
                        //     loadedImage = image;
                        //     return Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
                        // })
                        // .then((font) => {
                        //     loadedImage.print(font, 128, 10, imageCaption)
                        //         .write(fileName);
                        // })
                        .then(() => resolve())
                });
            });
        });
    }
}