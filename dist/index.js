"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.read = (root = './') => {
    root = root || './';
    const files = [];
    if (!fs_1.existsSync(root))
        return files;
    const readRecursive = (path) => {
        const data = fs_1.readdirSync(path_1.join(root, path), { withFileTypes: true });
        data.filter((data) => data.isFile()).forEach((file) => files.push(path_1.join(path, file.name)));
        data.filter((data) => data.isDirectory()).forEach((folder) => readRecursive(path_1.join(path, folder.name)));
    };
    readRecursive(root);
    return files;
};
