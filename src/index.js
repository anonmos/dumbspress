"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = require("./util");
const app = express_1.default();
const port = 3000;
app.get('/*', (req, res) => {
    const urlParts = req.url.split('/');
    const fileName = urlParts[urlParts.length - 1];
    console.log(`Serving ${fileName}`);
    const file = util_1.getFile(fileName);
    res.send(file);
});
app.listen(port, () => console.log(`File server app listening at http://localhost:${port}`));
