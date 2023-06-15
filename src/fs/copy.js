import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {

  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);
  const FOLDER_NAME = 'files';
  const COPY_FOLDER_NAME = 'files-copy';

  if(!existsSync(join(currentDirPath, FOLDER_NAME))){
    throw new Error('FS operation failed: The files folder does not exist')
  }
  if(existsSync(join(currentDirPath, COPY_FOLDER_NAME))){
    throw new Error('FS operation failed: the files-copy folder already exists')
  }

  mkdirSync(join(currentDirPath, COPY_FOLDER_NAME), { recursive: true });
  const originPath = readdirSync(join(currentDirPath, FOLDER_NAME));

  for (const file of originPath) {
    copyFileSync(join(currentDirPath, FOLDER_NAME, file), join(currentDirPath, COPY_FOLDER_NAME, file));
  }

};

try {
  await copy();
} catch (error) {
  console.error(error.message);
}