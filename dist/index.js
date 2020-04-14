"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const noDotFiles = (x) => {
    return x[0] !== '.';
};
exports.read = (root, filter = noDotFiles, files = [], prefix = '') => {
    const dir = path_1.join(root, prefix);
    if (!fs_1.existsSync(dir))
        return files;
    if (fs_1.statSync(dir).isDirectory())
        fs_1.readdirSync(dir)
            .filter((name, index) => {
            return filter(name, index, dir);
        })
            .forEach((name) => {
            exports.read(root, filter, files, path_1.join(prefix, name));
        });
    else
        files.push(prefix);
    return files;
};
