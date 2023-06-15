import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {readdirSync, existsSync } from 'fs';

const list = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);
  const FOLDER_NAME = 'files';

  const filePath = join(currentDirPath, FOLDER_NAME);

  if(!existsSync(filePath)) {
    throw new Error('FS operation failed: ' + error.message);
  }

  const files = readdirSync(filePath);

  files.forEach((file) => {
    console.log(file);
  })

};

try {
  await list();
} catch (error) {
  console.error(error.message);
}