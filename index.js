require('dotenv').config();

const server = require('./app/server');
const images = require('./app/robots/images');
const text = require('./app/robots/text');

images.getImages('landscape')
    .then(() => text.writeOnImage())
    .then(() => server.init());