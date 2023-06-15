import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { unlinkSync } from 'fs';

const remove = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);
  const targetDir = 'files';
  const targetFile = 'fileToRemove.txt';

  const currentDirPathDelete = join(currentDirPath, targetDir);

  try {
    unlinkSync(join(currentDirPathDelete, targetFile));
    console.log('File deleted successfully.');
  } catch (error) {
    throw new Error('FS operation failed: ' + error.message);
  }
};

try {
  await remove();
} catch (error) {
  console.error(error.message);
}