"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getFile(name) {
    const filePath = path_1.default.join(`${__dirname}/static-files`, name);
    const fileContent = fs_1.default.readFileSync(filePath);
    return fileContent.toString();
}
exports.getFile = getFile;