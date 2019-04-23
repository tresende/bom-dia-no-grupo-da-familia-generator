const express = require("express");
const cfenv = require("cfenv");
const appEnv = cfenv.getAppEnv();
const app = express();

module.exports = {
    init: () => {
        app.use(express.static(__dirname + "../../public"));
        app.listen(appEnv.port, "0.0.0.0", () => console.log(`server starting on ${appEnv.url}`));
        app.get('/number', (req, res) => {
            var id = Math.floor(Math.random() * Math.floor(process.env.images));
            res.send(id + '');
        })
    }
}