import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const getProjectRootDir = () => join(__dirname, '../../');

const __srcFolder = join(getProjectRootDir(), '/src');

export const getRelativeUrlByFilePath = (filepath) => {
  if (filepath) {
    return filepath.replace(__srcFolder, '');
  }
  return null;
};
