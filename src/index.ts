import fs from 'fs';
import path from 'path';

const noDotFiles = (x: string): boolean => {
  return x[0] !== '.';
};

  const dir = path.join(root, prefix);
  if (!fs.existsSync(dir)) return files;
  if (fs.statSync(dir).isDirectory())
    fs.readdirSync(dir)
      .filter(function (name, index) {
        return filter(name, index, dir);
      })
      .forEach(function (name) {
        read(root, filter, files, path.join(prefix, name));
      });
  else files.push(prefix);

  return files;
};
