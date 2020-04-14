import fs from 'fs';
import path from 'path';

const noDotFiles = (x: string): boolean => {
  return x[0] !== '.';
};

type Filter = (path: string, index?: number, dir?: string) => boolean;

export const read = (root: string, filter: Filter = noDotFiles, files: string[] = [], prefix = ''): string[] => {
  const dir = path.join(root, prefix);
  if (!fs.existsSync(dir)) return files;
  if (fs.statSync(dir).isDirectory())
    fs.readdirSync(dir)
      .filter((name, index) => {
        return filter(name, index, dir);
      })
      .forEach((name) => {
        read(root, filter, files, path.join(prefix, name));
      });
  else files.push(prefix);

  return files;
};
