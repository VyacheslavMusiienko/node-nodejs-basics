import { copyFile, stat, mkdir, readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {

  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);
  const FOLDER_NAME = 'files';
  const COPY_FOLDER_NAME = 'files-copy';

  try {
    await stat(join(currentDirPath, FOLDER_NAME));
  } catch (error) {
    throw new Error('FS operation failed: The files folder does not exist');
  }

  try {
    await stat(join(currentDirPath, COPY_FOLDER_NAME));
    throw new Error('FS operation failed: the files-copy folder already exists');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  await mkdir(join(currentDirPath, COPY_FOLDER_NAME), { recursive: true });
  const originPath = await readdir(join(currentDirPath, FOLDER_NAME));

  for (const file of originPath) {
    copyFile(join(currentDirPath, FOLDER_NAME, file), join(currentDirPath, COPY_FOLDER_NAME, file));
  }

};

try {
  await copy();
} catch (error) {
  console.error(error.message);
}