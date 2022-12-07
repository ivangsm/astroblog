import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** */
export const getProjectRootDir = () => {
  return path.join(__dirname, '../../');
};

const __srcFolder = path.join(getProjectRootDir(), '/src');

/** */
export const getRelativeUrlByFilePath = (filepath) => {
  if (filepath) {
    return filepath.replace(__srcFolder, '');
  }

  return null;
};
