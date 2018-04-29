import fs from 'fs';
import cleaner from '../nlp/cleaner';
import tokenizer from '../nlp/tokenizer';
import counter from '../lib/wordCounter';
import j2a from '../lib/jsonToArray';
import Canvas from 'canvas'
import cloud from './../lib/d3Cloud'

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

export function main() {
    let data = require("../assets/89.txt");
    let cleaned = cleaner(data);
    let words = tokenizer(cleaned);
    let counted = counter(words);
    // let array_from_json = j2a(counted);
    // console.log(counted);
    return counted;
}

// our example model is just an Array
const speech89 = main();
export default speech89;
