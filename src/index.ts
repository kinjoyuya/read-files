import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

//** if no parameters => read current dir */
export const read = (root = './'): string[] | [] => {
  root = root || './'; // "" => "./"
  const files: string[] = [];
  if (!existsSync(root)) return files;
  const readRecursive = (path: string) => {
    const data = readdirSync(join(root, path), { withFileTypes: true });
    data.filter((data) => data.isFile()).forEach((file) => files.push(join(path, file.name)));
    data.filter((data) => data.isDirectory()).forEach((folder) => readRecursive(join(path, folder.name)));
  };
  readRecursive(root);
  return files;
};
