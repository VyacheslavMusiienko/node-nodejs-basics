import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import { sep } from 'path';
import objA from "./files/a.json" assert { type: "json" };
import objB from "./files/b.json" assert { type: "json" };
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = objA;
} else {
    unknownObject = objB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${new URL('.', import.meta.url).pathname}`);

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
