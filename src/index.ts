import { promises } from 'fs';

const getData = async (path: string, type: 'file' | 'folder'): Promise<string[]> => {
  const foldersOrFiles = await promises.readdir(path, { withFileTypes: true });
  return foldersOrFiles
    .filter((folderOrFile) => (type === 'file' ? folderOrFile.isFile() : folderOrFile.isDirectory()))
    .map((data) => data.name);
};
