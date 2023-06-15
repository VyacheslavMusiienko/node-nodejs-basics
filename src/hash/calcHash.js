import { readFileSync } from 'fs';
import { createHash } from 'crypto';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';

async function calculateHash() {
  const filePath = join(dirname(fileURLToPath(import.meta.url)),'files', 'fileToCalculateHashFor.txt');
  const fileData = readFileSync(filePath);
  const hash = createHash('sha256');
  hash.update(fileData);
  const hexHash = hash.digest('hex');
  console.log(hexHash);
}

await calculateHash();