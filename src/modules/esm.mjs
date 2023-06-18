import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import { dirname, sep } from 'path';
import { fileURLToPath } from 'url';
import './files/c.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const random = Math.random();

const unknownObject =  random > 0.5
    ? require('./files/a.json', {assert: {type: 'json'}})
    : require('./files/b.json', {assert: {type: 'json'}});

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirName}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

