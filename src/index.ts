import { existsSync, statSync, readdirSync } from 'fs';
import { join } from 'path';

const noDotFiles = (x: string): boolean => {
  return x[0] !== '.';
};

type Filter = (path: string, index?: number, dir?: string) => boolean;

export const read = (root: string, filter: Filter = noDotFiles, files: string[] = [], prefix = ''): string[] => {
  const dir = join(root, prefix);
  if (!existsSync(dir)) return files;
  if (statSync(dir).isDirectory())
    readdirSync(dir)
      .filter((name, index) => {
        return filter(name, index, dir);
      })
      .forEach((name) => {
        read(root, filter, files, join(prefix, name));
      });
  else files.push(prefix);

  return files;
};
